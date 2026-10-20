import type { APIRoute } from 'astro';
import { SITE } from '../../data/site';
import { validEmail } from '../../lib/newsletter-confirmation';
import { requestNotesConfirmation } from '../../lib/newsletter-flow';
import { newsletterResult, postOnly, trustedFormRequest } from '../../lib/newsletter-http';

export const prerender = false;
export const GET: APIRoute = async () => postOnly();

export const POST: APIRoute = async ({ request }) => {
  if (!trustedFormRequest(request)) return newsletterResult(request, 'invalid');
  try {
    const data = await request.formData();
    if (data.get('website')) return newsletterResult(request, 'pending');
    const value = data.get('email');
    const email = typeof value === 'string' ? value.trim().toLowerCase() : '';
    if (!validEmail(email)) return newsletterResult(request, 'invalid');

    const apiKey = import.meta.env.RESEND_API_KEY?.trim();
    const segmentId = import.meta.env.RESEND_SEGMENT_ID?.trim();
    const topicId = import.meta.env.RESEND_TOPIC_ID?.trim();
    const secret = import.meta.env.NEWSLETTER_CONFIRMATION_SECRET?.trim();
    if (!apiKey || !segmentId || !topicId || !secret) throw new Error('Missing newsletter configuration.');

    // Production links always use the canonical site, never a supplied Host/Origin.
    const status = await requestNotesConfirmation({
      email, apiKey, segmentId, topicId, secret, signal: AbortSignal.timeout(15_000),
      origin: import.meta.env.DEV ? new URL(request.url).origin : SITE.url,
    });
    return newsletterResult(request, status);
  } catch (error) {
    console.error(`Newsletter confirmation request failed (${error instanceof Error ? error.name : 'UnknownError'}).`);
    return newsletterResult(request, 'error');
  }
};
