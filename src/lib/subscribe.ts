const API = 'https://api.resend.com';

interface Subscription {
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

/** Keep the shared provider's default topics out of a new reader's signup. */
export async function subscribeToNotes(
  subscription: Subscription,
  request: typeof fetch = fetch,
): Promise<'ok' | 'unsubscribed'> {
  const { email, apiKey, segmentId, topicId, signal } = subscription;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };
  const contactPath = `/contacts/${encodeURIComponent(email)}`;
  const send = (path: string, method = 'GET', body?: unknown) => request(
    `${API}${path}`,
    { method, headers, signal, ...(body === undefined ? {} : { body: JSON.stringify(body) }) },
  );
  const requireSuccess = (response: Response) => {
    if (!response.ok) {
      // Do not log provider response bodies: they can contain subscriber details.
      throw new Error(`Newsletter provider returned ${response.status}.`);
    }
  };

  const existing = await send(contactPath);
  if (existing.status !== 404) {
    requireSuccess(existing);
    const contact: unknown = await existing.json();
    if (!record(contact) || typeof contact.unsubscribed !== 'boolean') {
      throw new Error('Newsletter provider returned an invalid contact.');
    }
    // Re-enabling global delivery can revive unrelated subscriptions.
    if (contact.unsubscribed) return 'unsubscribed';

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
