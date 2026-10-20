import type { APIRoute } from 'astro';
import { confirmNotes } from '../../lib/newsletter-flow';
import { newsletterResult, postOnly, trustedFormRequest } from '../../lib/newsletter-http';

export const prerender = false;
export const GET: APIRoute = async () => postOnly();

export const POST: APIRoute = async ({ request }) => {
  if (!trustedFormRequest(request)) return newsletterResult(request, 'invalidlink');
  try {
    const secret = import.meta.env.NEWSLETTER_CONFIRMATION_SECRET?.trim();
    const apiKey = import.meta.env.RESEND_API_KEY?.trim();
    const segmentId = import.meta.env.RESEND_SEGMENT_ID?.trim();
    const topicId = import.meta.env.RESEND_TOPIC_ID?.trim();
    if (!secret || !apiKey || !segmentId || !topicId) throw new Error('Missing newsletter configuration.');
    const form = await request.formData();
    const token = form.get('token');
    if (typeof token !== 'string') return newsletterResult(request, 'invalidlink');
    const status = await confirmNotes({
      token, secret, apiKey, segmentId, topicId, signal: AbortSignal.timeout(15_000),
    });
    return newsletterResult(request, status);
  } catch (error) {
    console.error(`Newsletter confirmation failed (${error instanceof Error ? error.name : 'UnknownError'}).`);
    return newsletterResult(request, 'error');
  }
};
