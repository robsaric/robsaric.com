const API = 'https://api.resend.com';

export interface Subscription {
  email: string;
  apiKey: string;
  segmentId: string;
  topicId: string;
  signal: AbortSignal;
}

type TopicPreference = { id: string; subscription: 'opt_in' | 'opt_out' };

function record(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function provider(subscription: Subscription, request: typeof fetch) {
  return (path: string, method = 'GET', body?: unknown) => request(`${API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${subscription.apiKey}`,
      'Content-Type': 'application/json',
    },
    signal: subscription.signal,
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
}

function requireSuccess(response: Response): void {
  // Provider bodies can contain private contact information.
  if (!response.ok) throw new Error(`Newsletter provider returned ${response.status}.`);
}

async function contactList(
  send: ReturnType<typeof provider>, path: string,
): Promise<Record<string, unknown>[]> {
  const result: Record<string, unknown>[] = [];
  const seen = new Set<string>();
  let after: string | undefined;
  do {
    const query = new URLSearchParams({ limit: '100' });
    if (after) query.set('after', after);
    const response = await send(`${path}?${query}`);
    requireSuccess(response);
    const page: unknown = await response.json();
    if (!record(page) || !Array.isArray(page.data) || typeof page.has_more !== 'boolean') {
      throw new Error('Newsletter provider returned an invalid membership list.');
    }
    for (const item of page.data) {
      if (!record(item) || typeof item.id !== 'string' || !item.id || seen.has(item.id)) {
        throw new Error('Newsletter provider returned invalid membership.');
      }
      result.push(item);
      seen.add(item.id);
    }
    if (page.has_more && !page.data.length) throw new Error('Incomplete newsletter membership list.');
    after = page.has_more ? result.at(-1)?.id as string : undefined;
  } while (after);
  return result;
}

/** Membership is also the replay guard: a confirmation never re-enables a former reader. */
export async function newsletterStatus(
  subscription: Subscription, request: typeof fetch = fetch,
): Promise<'new' | 'eligible' | 'exists' | 'unsubscribed'> {
  const send = provider(subscription, request);
  const path = `/contacts/${encodeURIComponent(subscription.email)}`;
  const response = await send(path);
  if (response.status === 404) return 'new';
  requireSuccess(response);
  const contact: unknown = await response.json();
  if (!record(contact) || typeof contact.unsubscribed !== 'boolean') {
    throw new Error('Newsletter provider returned an invalid contact.');
  }
  if (contact.unsubscribed) return 'unsubscribed';
  const segments = await contactList(send, `${path}/segments`);
  if (!segments.some(segment => segment.id === subscription.segmentId)) return 'eligible';
  const topics = await contactList(send, `${path}/topics`);
  const personal = topics.find(topic => topic.id === subscription.topicId);
  if (!personal || !['opt_in', 'opt_out'].includes(String(personal.subscription))) {
    throw new Error('Newsletter provider returned an invalid personal preference.');
  }
  return personal.subscription === 'opt_in' ? 'exists' : 'unsubscribed';
}

/** Keep the shared provider's default topics out of a new reader's signup. */
export async function subscribeToNotes(
  subscription: Subscription,
  request: typeof fetch = fetch,
): Promise<'ok' | 'exists' | 'unsubscribed'> {
  const { email, segmentId, topicId } = subscription;
  const contactPath = `/contacts/${encodeURIComponent(email)}`;
  const send = provider(subscription, request);
  const status = await newsletterStatus(subscription, request);
  if (status === 'exists' || status === 'unsubscribed') return status;
  if (status === 'eligible') {
    requireSuccess(await send(
      `${contactPath}/topics`, 'PATCH',
      [{ id: topicId, subscription: 'opt_in' }],
    ));
    requireSuccess(await send(
      `${contactPath}/segments/${encodeURIComponent(segmentId)}`, 'POST',
    ));
    return 'ok';
  }

  const preferences: TopicPreference[] = [];
  const seen = new Set<string>();
  let after: string | undefined;
  do {
    const query = new URLSearchParams({ limit: '100' });
    if (after) query.set('after', after);
    const response = await send(`/topics?${query}`);
    requireSuccess(response);
    const page: unknown = await response.json();
    if (!record(page) || !Array.isArray(page.data) || typeof page.has_more !== 'boolean') {
      throw new Error('Newsletter provider returned an invalid topic list.');
    }
    for (const topic of page.data) {
      if (!record(topic) || typeof topic.id !== 'string' || !topic.id || seen.has(topic.id)) {
        throw new Error('Newsletter provider returned an invalid topic.');
      }
      seen.add(topic.id);
      preferences.push({
        id: topic.id,
        subscription: topic.id === topicId ? 'opt_in' : 'opt_out',
      });
    }
    if (page.has_more && !page.data.length) {
      throw new Error('Newsletter provider returned an incomplete topic list.');
    }
    after = page.has_more ? preferences.at(-1)?.id : undefined;
  } while (after);

  if (!seen.has(topicId)) {
    throw new Error('The personal newsletter topic was not found.');
  }

  requireSuccess(await send('/contacts', 'POST', {
    email,
    unsubscribed: false,
    segments: [{ id: segmentId }],
    topics: preferences,
  }));
  return 'ok';
}
