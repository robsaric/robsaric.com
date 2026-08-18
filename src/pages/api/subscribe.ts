import type {
  APIContext,
  APIRoute,
} from 'astro';
import { UI } from '../../data/ui';

export const prerender = false;

type SubscribeStatus =
  | 'ok'
  | 'exists'
  | 'invalid'
  | 'error';

type Redirect = APIContext['redirect'];

const RESEND_CONTACTS_URL = 'https://api.resend.com/contacts';
const EMAIL_PATTERN =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

const STATUS_CODES: Record<SubscribeStatus, number> = {
  ok: 200,
  exists: 200,
  invalid: 400,
  error: 500,
};

const STATUS_PATHS: Record<SubscribeStatus, string> = {
  ok: '/subscribed/',
  exists: '/subscribed/?status=exists',
  invalid: '/subscribed/?status=invalid',
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
    'Newsletter subscription is missing RESEND_API_KEY or RESEND_SEGMENT_ID.',
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

  if (!apiKey || !segmentId) {
    logMissingConfiguration();
    return resultResponse(request, redirect, 'error');
  }

  const payload: {
    email: string;
    unsubscribed: boolean;
    segments: { id: string }[];
    topics?: {
      id: string;
      subscription: 'opt_in';
    }[];
  } = {
    email,
    unsubscribed: false,
    segments: [{ id: segmentId }],
  };

  if (topicId) {
    payload.topics = [{
      id: topicId,
      subscription: 'opt_in',
    }];
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const response = await fetch(RESEND_CONTACTS_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (response.ok) {
      return resultResponse(request, redirect, 'ok');
    }

    let message = '';

    if (response.status >= 400 && response.status < 500) {
      try {
        const responseBody = await response.json();
        if (typeof responseBody?.message === 'string') {
          message = responseBody.message;
        }
      } catch {
        message = '';
      }
    }

    if (
      response.status === 409
      || message.toLowerCase().includes('already')
    ) {
      return resultResponse(request, redirect, 'exists');
    }

    console.error(
      `Resend contacts request failed with status ${response.status}.`,
    );
    return resultResponse(request, redirect, 'error');
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
