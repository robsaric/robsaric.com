import test from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';
import { resolveAppearance, appearanceBootstrap } from '../src/lib/appearance.mjs';

test('auto respects both local day boundaries', () => {
  for (const [hour, expected] of [[0,'night'],[6,'night'],[7,'day'],[12,'day'],[18,'day'],[19,'night'],[23,'night']]) {
    assert.equal(resolveAppearance('auto', hour), expected);
  }
});
test('explicit choice overrides time', () => {
  assert.equal(resolveAppearance('day', 23), 'day');
  assert.equal(resolveAppearance('night', 12), 'night');
});
function bootstrap(value, hour, blocked = false) {
  const dataset = {};
  runInNewContext(appearanceBootstrap, {
    document: { documentElement: { dataset } },
    localStorage: { getItem() { if (blocked) throw new Error('blocked'); return value; } },
    Date: class { getHours() { return hour; } },
  });
  return dataset;
}
test('entry script handles absent, invalid and blocked storage', () => {
  assert.deepEqual(bootstrap(null, 7), { appearancePreference: 'auto', appearance: 'day' });
  assert.deepEqual(bootstrap('broken', 19), { appearancePreference: 'auto', appearance: 'night' });
  assert.deepEqual(bootstrap(null, 19, true), { appearancePreference: 'auto', appearance: 'night' });
});
test('entry script keeps remembered preferences', () => {
  assert.deepEqual(bootstrap('night', 7), { appearancePreference: 'night', appearance: 'night' });
  assert.deepEqual(bootstrap('day', 19), { appearancePreference: 'day', appearance: 'day' });
});
