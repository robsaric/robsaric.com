import test from 'node:test';
import assert from 'node:assert/strict';
import { subscribeToNotes } from '../src/lib/subscribe.ts';

function fixture(responses) {
  const calls = [];
  const request = async (url, options) => {
    calls.push({ url, method: options.method, body: options.body && JSON.parse(options.body) });
    assert.ok(responses.length, 'Unexpected provider request');
    const [status, body] = responses.shift();
    return Response.json(body, { status });
  };
  const subscription = {
    email: 'reader+notes@example.com', apiKey: 'test-key',
    segmentId: 'personal-segment', topicId: 'personal-topic',
    signal: new AbortController().signal,
  };
  return { calls, run: () => subscribeToNotes(subscription, request) };
}

test('a new reader opts into personal writing and out of every other topic, across pages', async () => {
  const { run, calls } = fixture([
    [404, { message: 'Not found' }],
    [200, { data: [{ id: 'caretrics', default_subscription: 'opt_in' }], has_more: true }],
    [200, { data: [{ id: 'personal-topic' }, { id: 'future-product' }], has_more: false }],
    [200, { object: 'contact', id: 'new-reader' }],
  ]);
  assert.equal(await run(), 'ok');
  assert.match(calls[0].url, /reader%2Bnotes%40example.com$/);
  assert.match(calls[2].url, /after=caretrics/);
  assert.deepEqual(calls[3].body, {
    email: 'reader+notes@example.com', unsubscribed: false,
    segments: [{ id: 'personal-segment' }],
    topics: [
      { id: 'caretrics', subscription: 'opt_out' },
      { id: 'personal-topic', subscription: 'opt_in' },
      { id: 'future-product', subscription: 'opt_out' },
    ],
  });
});

test('existing readers receive only targeted writes, preserving other choices and global state', async () => {
  const { run, calls } = fixture([
    [200, { id: 'existing-reader', unsubscribed: false }],
    [200, { data: [{ id: 'other-segment' }], has_more: false }],
    [200, { id: 'existing-reader' }],
    [200, { id: 'personal-segment' }],
  ]);
  assert.equal(await run(), 'ok');
  assert.equal(calls[2].method, 'PATCH');
  assert.deepEqual(calls[2].body, [{ id: 'personal-topic', subscription: 'opt_in' }]);
  assert.match(calls[3].url, /\/segments\/personal-segment$/);
  assert.equal(calls[3].body, undefined);
  assert.ok(calls.every(call => !call.body || !('unsubscribed' in call.body)));
  assert.equal(calls.length, 4);
});

test('a global unsubscribe is preserved without any writes', async () => {
  const { run, calls } = fixture([[200, { id: 'reader', unsubscribed: true }]]);
  assert.equal(await run(), 'unsubscribed');
  assert.equal(calls.length, 1);
});

for (const status of [401, 429, 500]) {
  test(`lookup ${status} is not mistaken for a new contact`, async () => {
    const { run, calls } = fixture([[status, { message: 'Provider failure' }]]);
    await assert.rejects(run, new RegExp(String(status)));
    assert.equal(calls.length, 1);
  });
}

test('a failed preference write cannot produce success or add segment membership', async () => {
  const { run, calls } = fixture([
    [200, { id: 'reader', unsubscribed: false }],
    [200, { data: [], has_more: false }],
    [500, { message: 'Failed' }],
  ]);
  await assert.rejects(run, /500/);
  assert.equal(calls.length, 3);
});

test('a failed segment write is reported even if the preference was saved', async () => {
  const { run } = fixture([
    [200, { id: 'reader', unsubscribed: false }],
    [200, { data: [], has_more: false }],
    [200, { id: 'reader' }],
    [409, { message: 'Already something else' }],
  ]);
  await assert.rejects(run, /409/);
});

test('missing personal topic cannot create a subscriber with accidental defaults', async () => {
  const { run, calls } = fixture([
    [404, {}],
    [200, { data: [{ id: 'other-topic' }], has_more: false }],
  ]);
  await assert.rejects(run, /personal newsletter topic/);
  assert.equal(calls.length, 2);
});

test('incomplete topic pagination fails before creating a contact', async () => {
  const { run, calls } = fixture([
    [404, {}],
    [200, { data: [], has_more: true }],
  ]);
  await assert.rejects(run, /incomplete topic list/);
  assert.equal(calls.length, 2);
});

test('malformed existing contact cannot enable global delivery', async () => {
  const { run, calls } = fixture([[200, { id: 'reader' }]]);
  await assert.rejects(run, /invalid contact/);
  assert.equal(calls.length, 1);
});

test('a create conflict is a failure, not an unverified subscription', async () => {
  const { run } = fixture([
    [404, {}],
    [200, { data: [{ id: 'personal-topic' }], has_more: false }],
    [409, { message: 'Already exists' }],
  ]);
  await assert.rejects(run, /409/);
});

for (const preference of ['opt_in', 'opt_out']) {
  test(`repeated confirmation preserves an existing personal ${preference} without writes`, async () => {
    const { run, calls } = fixture([
      [200, { id: 'reader', unsubscribed: false }],
      [200, { data: [{ id: 'unrelated' }], has_more: true }],
      [200, { data: [{ id: 'personal-segment' }], has_more: false }],
      [200, { data: [{ id: 'personal-topic', subscription: preference }], has_more: false }],
    ]);
    assert.equal(await run(), preference === 'opt_in' ? 'exists' : 'unsubscribed');
    assert.ok(calls.every(call => call.method === 'GET'));
    assert.match(calls[2].url, /after=unrelated/);
  });
}
