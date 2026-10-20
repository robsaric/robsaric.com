import test from 'node:test';
import assert from 'node:assert/strict';
import { createConfirmationToken, readConfirmationToken, confirmationSendKey } from '../src/lib/newsletter-confirmation.ts';
import { confirmationEmail, sendConfirmationEmail } from '../src/lib/newsletter-email.ts';
import { requestNotesConfirmation, confirmNotes } from '../src/lib/newsletter-flow.ts';
import { newsletterResult, trustedFormRequest, postOnly } from '../src/lib/newsletter-http.ts';

const secret = 'a'.repeat(64);
const email = 'reader+test@example.com';
const now = 1_800_000_000_000;
const options = {
  email, secret, origin: 'https://robsaric.com', apiKey: 'fixture',
  segmentId: 'personal-segment', topicId: 'personal-topic', signal: new AbortController().signal,
};

test('confirmation authenticates the mailbox without exposing it in the URL', () => {
  const token = createConfirmationToken(email, secret, now);
  assert.deepEqual(readConfirmationToken(token, secret, now + 1), { email });
  assert.ok(!Buffer.from(token, 'base64url').toString('utf8').includes(email));
  assert.notEqual(token, createConfirmationToken(email, secret, now));
});

test('altered, expired, future, wrong-key and oversized links are rejected', () => {
  const token = createConfirmationToken(email, secret, now);
  const altered = Buffer.from(token, 'base64url');
  altered[30] ^= 1;
  assert.equal(readConfirmationToken(altered.toString('base64url'), secret, now), null);
  assert.equal(readConfirmationToken(token, secret, now + 86_400_000), null);
  assert.equal(readConfirmationToken(token, secret, now - 1), null);
  assert.equal(readConfirmationToken(token, 'b'.repeat(64), now), null);
  assert.equal(readConfirmationToken('x'.repeat(2000), secret, now), null);
  assert.equal(readConfirmationToken(token + '=', secret, now), null);
  assert.throws(() => createConfirmationToken(email, 'weak'), /configuration/);
});

test('duplicate-send keys are stable for a day, private, and change for another reader or day', () => {
  assert.equal(confirmationSendKey(email, secret, now), confirmationSendKey(email, secret, now + 1));
  assert.notEqual(confirmationSendKey(email, secret, now), confirmationSendKey(email, secret, now + 86_400_000));
  assert.notEqual(confirmationSendKey(email, secret, now), confirmationSendKey('other@example.com', secret, now));
  assert.ok(!confirmationSendKey(email, secret, now).includes(email));
});

test('signup sends only a confirmation; it does not create or subscribe a contact', async () => {
  const calls = [];
  const request = async (url, init) => {
    calls.push({ url, init });
    return url.endsWith('/emails') ? Response.json({ id: 'sent' }) : Response.json({}, { status: 404 });
  };
  assert.equal(await requestNotesConfirmation(options, request), 'pending');
  assert.equal(calls.length, 2);
  assert.equal(calls[0].init.method, 'GET');
  assert.equal(calls[1].url, 'https://api.resend.com/emails');
  const message = JSON.parse(calls[1].init.body);
  assert.equal(message.from, 'Rob Saric <rob@robsaric.com>');
  assert.equal(message.reply_to, 'rob@hwarp.com');
  assert.deepEqual(message.to, [email]);
  const link = message.text.match(/https:\/\/robsaric.com\/confirm\/\?token=(\S+)/);
  assert.ok(link);
  assert.deepEqual(readConfirmationToken(link[1], secret), { email });
  assert.match(message.html, /#faf8f2/);
  assert.match(message.html, /#244fc7/);
});

test('confirmation creates a personal-only subscriber, after the valid token is submitted', async () => {
  const calls = [];
  const responses = [
    [404, {}],
    [200, { data: [{ id: 'personal-topic' }, { id: 'company-topic' }], has_more: false }],
    [200, { id: 'created' }],
  ];
  const request = async (url, init) => {
    calls.push({ url, init });
    const [status, body] = responses.shift();
    return Response.json(body, { status });
  };
  assert.equal(await confirmNotes({ ...options, token: createConfirmationToken(email, secret) }, request), 'ok');
  assert.deepEqual(JSON.parse(calls[2].init.body).topics, [
    { id: 'personal-topic', subscription: 'opt_in' },
    { id: 'company-topic', subscription: 'opt_out' },
  ]);
});

test('invalid confirmation never reaches the provider', async () => {
  assert.equal(await confirmNotes({ ...options, token: 'forged' }, () => {
    assert.fail('Provider must not be called');
  }), 'invalidlink');
});

test('existing subscriber and unsubscribed contacts do not receive another confirmation', async () => {
  const request = async () => Response.json({ unsubscribed: true });
  assert.equal(await requestNotesConfirmation(options, request), 'unsubscribed');
  let calls = 0;
  const bodies = [
    { unsubscribed: false },
    { data: [{ id: 'personal-segment' }], has_more: false },
    { data: [{ id: 'personal-topic', subscription: 'opt_in' }], has_more: false },
  ];
  assert.equal(await requestNotesConfirmation(options, async (_, init) => {
    assert.equal(init.method, 'GET');
    return Response.json(bodies[calls++]);
  }), 'exists');
  assert.equal(calls, 3);
});

test('provider send failures are not reported as a confirmation sent', async () => {
  for (const status of [401, 429, 500]) {
    await assert.rejects(sendConfirmationEmail({
      ...options, url: 'https://robsaric.com/confirm/?token=example', idempotencyKey: 'test',
    }, async () => Response.json({}, { status })), new RegExp(String(status)));
  }
  await assert.rejects(sendConfirmationEmail({
    ...options, url: 'https://robsaric.com/confirm/?token=example', idempotencyKey: 'test',
  }, async () => Response.json({})), /acknowledge/);
});

test('only a previously accepted send-key conflict suppresses a repeat email', async () => {
  const sendOptions = { ...options, url: 'https://robsaric.com/confirm/?token=example', idempotencyKey: 'test' };
  await sendConfirmationEmail(sendOptions, async () =>
    Response.json({ name: 'invalid_idempotent_request' }, { status: 409 }));
  await assert.rejects(sendConfirmationEmail(sendOptions, async () =>
    Response.json({ name: 'concurrent_idempotent_requests' }, { status: 409 })), /409/);
});

test('HTML escapes fallback URLs and includes the same action as plain text', () => {
  const rendered = confirmationEmail('https://robsaric.com/confirm/?token=test&other="bad');
  assert.match(rendered.html, /&amp;other=&quot;bad/);
  assert.ok(!rendered.html.includes('&other="bad'));
  assert.match(rendered.text, /Confirm my email: https:/);
  assert.ok(!rendered.html.includes('<img'));
});

test('confirmation requires a form POST and rejects cross-site and oversized forms', async () => {
  assert.equal(postOnly().status, 405);
  assert.equal(postOnly().headers.get('Allow'), 'POST');
  const url = 'https://robsaric.com/api/confirm/';
  assert.ok(trustedFormRequest(new Request(url, { headers: { origin: 'https://robsaric.com' } })));
  assert.ok(!trustedFormRequest(new Request(url, { headers: { origin: 'https://other.example' } })));
  assert.ok(!trustedFormRequest(new Request(url, { headers: { 'sec-fetch-site': 'cross-site' } })));
  assert.ok(!trustedFormRequest(new Request(url, { headers: { 'content-length': '5000' } })));
  const result = newsletterResult(new Request(url), 'ok');
  assert.equal(result.status, 303);
  assert.equal(result.headers.get('Location'), '/subscribed/?status=ok');
  assert.equal(result.headers.get('Cache-Control'), 'no-store');
  assert.equal(result.headers.get('Referrer-Policy'), 'no-referrer');
  const failure = newsletterResult(new Request(url, { headers: { accept: 'application/json' } }), 'error');
  assert.equal(failure.status, 503);
  assert.deepEqual(await failure.json(), { status: 'error' });
});
