import { NEWSLETTER as N } from '../data/newsletter.ts';

function escape(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

export function confirmationEmail(url: string): { html: string; text: string } {
  const link = escape(url);
  const paragraph = (value: string) =>
    `<p style="margin:0 0 22px;font-size:17px;line-height:1.65;">${escape(value)}</p>`;
  return {
    text: [N.greeting, N.introduction, `${N.emailAction}: ${url}`, N.promise,
      N.invitation, N.signoff, N.ignore, N.expiry].join('\n\n'),
    html: `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(N.subject)}</title></head>
<body style="margin:0;background:#faf8f2;color:#29343b;font-family:Arial,Helvetica,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escape(N.preheader)}</div>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#faf8f2;"><tr><td align="center" style="padding:32px 20px;">
<table role="presentation" width="560" cellspacing="0" cellpadding="0" style="width:100%;max-width:560px;text-align:left;">
<tr><td style="padding:0 0 32px;border-bottom:1px solid #d6d9d9;font-size:23px;font-weight:bold;">Rob Saric<span style="color:#244fc7;">.</span></td></tr>
<tr><td style="padding:32px 0 8px;">
${paragraph(N.greeting)}${paragraph(N.introduction)}
<table role="presentation" cellspacing="0" cellpadding="0" style="margin:8px 0 28px;"><tr><td bgcolor="#244fc7" style="border-radius:6px;mso-padding-alt:16px 24px;"><a href="${link}" style="display:inline-block;padding:16px 24px;color:#ffffff;text-decoration:none;font-weight:bold;font-size:16px;line-height:1.4;">${escape(N.emailAction)}</a></td></tr></table>
${paragraph(N.promise)}${paragraph(N.invitation)}${paragraph(N.signoff)}
</td></tr>
<tr><td style="border-top:1px solid #d6d9d9;padding:24px 0 0;color:#61666a;font-size:14px;line-height:1.6;">
<p style="margin:0 0 12px;">${escape(N.ignore)}</p><p style="margin:0 0 20px;">${escape(N.expiry)}</p>
<p style="margin:0 0 6px;">${escape(N.fallback)}</p>
<a href="${link}" style="color:#244fc7;overflow-wrap:anywhere;word-break:break-all;">${link}</a>
</td></tr></table></td></tr></table></body></html>`,
  };
}

export async function sendConfirmationEmail(options: {
  email: string; apiKey: string; url: string; idempotencyKey: string; signal: AbortSignal;
}, request: typeof fetch = fetch): Promise<void> {
  const response = await request('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': options.idempotencyKey,
    },
    signal: options.signal,
    body: JSON.stringify({
      from: N.sender, reply_to: N.replyTo, to: [options.email],
      subject: N.subject, ...confirmationEmail(options.url),
    }),
  });
  // A different random token under a previously accepted day's send key
  // must not generate another email. The first delivered link remains valid.
  if (response.status === 409) {
    const error: unknown = await response.json();
    if (typeof error === 'object' && error !== null && 'name' in error
      && error.name === 'invalid_idempotent_request') return;
  }
  if (!response.ok) throw new Error(`Newsletter email provider returned ${response.status}.`);
  const result: unknown = await response.json();
  if (typeof result !== 'object' || result === null || !('id' in result)
    || typeof result.id !== 'string' || !result.id) {
    throw new Error('Newsletter email provider did not acknowledge the message.');
  }
}
