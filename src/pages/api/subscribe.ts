import type {
  APIContext,
  APIRoute,
} from 'astro';
import { UI } from '../../data/ui';
import { subscribeToNotes } from '../../lib/subscribe';

export const prerender = false;

type SubscribeStatus =
  | 'ok'
  | 'exists'
  | 'invalid'
  | 'unsubscribed'
  | 'error';

type Redirect = APIContext['redirect'];

const EMAIL_PATTERN =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

const STATUS_CODES: Record<SubscribeStatus, number> = {
  ok: 200,
  exists: 200,
  invalid: 400,
  unsubscribed: 409,
  error: 500,
};

const STATUS_PATHS: Record<SubscribeStatus, string> = {
  ok: '/subscribed/',
  exists: '/subscribed/?status=exists',
  invalid: '/subscribed/?status=invalid',
  unsubscribed: '/subscribed/?status=unsubscribed',
  error: '/subscribed/?status=error',
};

let missingConfigurationLogged = false;

function withNoStore(response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set('Cache-Control', 'no-store');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function wantsJson(request: Request): boolean {
  return request.headers
    .get('accept')
    ?.toLowerCase()
    .includes('application/json') ?? false;
}

function resultResponse(
  request: Request,
  redirect: Redirect,
  status: SubscribeStatus,
): Response {
  if (wantsJson(request)) {
    return withNoStore(new Response(
      JSON.stringify({ status }),
      {
        status: STATUS_CODES[status],
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      },
    ));
  }

  return withNoStore(redirect(STATUS_PATHS[status], 303));
}

function formValue(
  value: FormDataEntryValue | null,
): string {
  return typeof value === 'string' ? value : '';
}

function validEmail(email: string): boolean {
  if (email.length === 0 || email.length > 254) return false;

  const localPart = email.split('@', 1)[0];
  return localPart.length <= 64 && EMAIL_PATTERN.test(email);
}

function logMissingConfiguration(): void {
  if (missingConfigurationLogged) return;
  missingConfigurationLogged = true;
  console.error(
    'Newsletter subscription is missing its server configuration.',
  );
}

export const GET: APIRoute = async () => withNoStore(
  new Response(UI.api.methodNotAllowed, {
    status: 405,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      Allow: 'POST',
    },
  }),
);

export const POST: APIRoute = async ({
  request,
  redirect,
}) => {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return resultResponse(request, redirect, 'error');
  }

  const website = formValue(formData.get('website')).trim();

  if (website) {
    return resultResponse(request, redirect, 'ok');
  }

  const email = formValue(formData.get('email'))
    .trim()
    .toLowerCase();

  if (!validEmail(email)) {
    return resultResponse(request, redirect, 'invalid');
  }

  const apiKey = import.meta.env.RESEND_API_KEY?.trim();
  const segmentId = import.meta.env.RESEND_SEGMENT_ID?.trim();
  const topicId = import.meta.env.RESEND_TOPIC_ID?.trim();

  if (!apiKey || !segmentId || !topicId) {
    logMissingConfiguration();
    return resultResponse(request, redirect, 'error');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const status = await subscribeToNotes({
      email, apiKey, segmentId, topicId,
      signal: controller.signal,
    });
    return resultResponse(request, redirect, status);
  } catch (error) {
    const errorName =
      error instanceof Error ? error.name : 'UnknownError';
    console.error(
      `Resend contacts request failed with ${errorName}.`,
    );
    return resultResponse(request, redirect, 'error');
  } finally {
    clearTimeout(timeout);
  }
};
