import { UI } from '../data/ui.ts';

export type NewsletterStatus = 'pending' | 'ok' | 'exists' | 'invalid' | 'invalidlink' | 'unsubscribed' | 'error';
const codes: Record<NewsletterStatus, number> = {
  pending: 200, ok: 200, exists: 200, invalid: 400, invalidlink: 400, unsubscribed: 409, error: 503,
};

export function privateHeaders(): Headers {
  return new Headers({
    'Cache-Control': 'no-store',
    'Referrer-Policy': 'no-referrer',
    'X-Robots-Tag': 'noindex, nofollow',
  });
}

export function newsletterResult(request: Request, status: NewsletterStatus): Response {
  const headers = privateHeaders();
  if (request.headers.get('accept')?.toLowerCase().includes('application/json')) {
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return new Response(JSON.stringify({ status }), { status: codes[status], headers });
  }
  headers.set('Location', `/subscribed/?status=${status}`);
  return new Response(null, { status: 303, headers });
}

export function postOnly(): Response {
  const headers = privateHeaders();
  headers.set('Allow', 'POST');
  return new Response(UI.api.methodNotAllowed, { status: 405, headers });
}

export function trustedFormRequest(request: Request): boolean {
  const origin = request.headers.get('origin');
  return (!origin || origin === new URL(request.url).origin)
    && request.headers.get('sec-fetch-site') !== 'cross-site'
    && Number(request.headers.get('content-length') ?? 0) <= 4096;
}
