import { newsletterStatus, subscribeToNotes, type Subscription } from './subscribe.ts';
import { confirmationSendKey, createConfirmationToken, readConfirmationToken } from './newsletter-confirmation.ts';
import { sendConfirmationEmail } from './newsletter-email.ts';

export async function requestNotesConfirmation(
  options: Subscription & { secret: string; origin: string },
  request: typeof fetch = fetch,
): Promise<'pending' | 'exists' | 'unsubscribed'> {
  const status = await newsletterStatus(options, request);
  if (status === 'exists' || status === 'unsubscribed') return status;
  const url = new URL('/confirm/', options.origin);
  url.searchParams.set('token', createConfirmationToken(options.email, options.secret));
  await sendConfirmationEmail({
    ...options, url: url.href,
    idempotencyKey: confirmationSendKey(options.email, options.secret),
  }, request);
  return 'pending';
}

export async function confirmNotes(
  options: Omit<Subscription, 'email'> & { secret: string; token: string },
  request: typeof fetch = fetch,
): Promise<'ok' | 'exists' | 'unsubscribed' | 'invalidlink'> {
  const confirmed = readConfirmationToken(options.token, options.secret);
  if (!confirmed) return 'invalidlink';
  return subscribeToNotes({ ...options, email: confirmed.email }, request);
}
