import { test } from 'node:test';
import assert from 'node:assert/strict';
import { initializeHalloweenCharacters } from '../src/lib/halloween-character.ts';

function setup(reduced = false) {
  const animations = [], events = new Map();
  let intersect;
  const animate = (frames, options) => {
    const animation = { frames, options, playState: 'running', currentTime: 0,
      play() { this.playState = 'running'; }, pause() { this.playState = 'paused'; }, cancel() { this.playState = 'idle'; } };
    animations.push(animation); return animation;
  };
  const wizard = { animate }, spark = { animate };
  const tiles = Array.from({ length: 5 }, (_, i) => ({ animate, offsetLeft: 120 + i * 20, offsetTop: 50 + i * 20 }));
  const button = { hidden: true, dataset: {}, setAttribute(key, value) { this[key] = value; }, addEventListener: (name, callback) => events.set('button:' + name, callback) };
  const stage = { clientWidth: 380, clientHeight: 304 };
  const scene = { dataset: { pauseLabel: 'Pause Halloween animation', resumeLabel: 'Resume Halloween animation' },
    querySelector: selector => ({ '[data-wizard]': wizard, '[data-halloween-toggle]': button, '.halloween-stage': stage, '[data-spark]': spark })[selector],
    querySelectorAll: () => tiles };
  const preference = { matches: reduced, addEventListener: (name, callback) => events.set('preference:' + name, callback) };
  const document = { hidden: false, querySelectorAll: () => [scene], addEventListener: (name, callback) => events.set(name, callback) };
  const window = { IntersectionObserver: true, addEventListener: (name, callback) => events.set(name, callback) };
  const globals = { document, window, matchMedia: () => preference,
    Image: class { set src(value) { this.onload(); } },
    IntersectionObserver: class { constructor(callback) { intersect = callback; } observe() {} } };
  const saved = Object.fromEntries(Object.keys(globals).map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  for (const [key, value] of Object.entries(globals)) Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
  initializeHalloweenCharacters();
  return { animations, scene, preference, button, document,
    visible(value) { intersect([{ isIntersecting: value, intersectionRatio: value ? 1 : 0 }]); },
    event(name) { events.get(name)?.(); },
    close() { for (const key of Object.keys(globals)) saved[key] ? Object.defineProperty(globalThis, key, saved[key]) : delete globalThis[key]; } };
}

test('seasonal story pauses offscreen, in hidden tabs, and on request without restarting', () => {
  const f = setup();
  try {
    assert.equal(f.animations.length, 7);
    assert.ok(f.animations.every(a => a.playState === 'paused'));
    f.visible(true); assert.ok(f.animations.every(a => a.playState === 'running'));
    f.animations.forEach(a => { a.currentTime = 3000; });
    f.event('button:click');
    assert.equal(f.button['aria-label'], 'Resume Halloween animation');
    assert.ok(f.animations.every(a => a.playState === 'paused' && a.currentTime === 3000));
    f.event('button:click'); assert.ok(f.animations.every(a => a.playState === 'running' && a.currentTime === 3000));
    f.document.hidden = true; f.event('visibilitychange'); assert.ok(f.animations.every(a => a.playState === 'paused'));
    f.document.hidden = false; f.event('visibilitychange'); f.visible(false);
    assert.ok(f.animations.every(a => a.playState === 'paused'));
  } finally { f.close(); }
});
test('reduced motion keeps the composed CSS still and hides pause, including preference changes', () => {
  const f = setup(true);
  try {
    f.visible(true); assert.equal(f.animations.length, 0); assert.equal(f.button.hidden, true);
    assert.equal(f.scene.dataset.state, 'reduced');
    f.preference.matches = false; f.event('preference:change');
    assert.equal(f.animations.length, 7); assert.equal(f.button.hidden, false);
    f.preference.matches = true; f.event('preference:change');
    assert.ok(f.animations.every(a => a.playState === 'idle')); assert.equal(f.button.hidden, true);
  } finally { f.close(); }
});
test('seasonal performance ends its motion before the quiet portion of the loop', () => {
  const f = setup();
  try {
    for (const animation of f.animations) {
      assert.equal(animation.options.duration, 15000);
      assert.ok(animation.frames.at(-2).offset < .5);
      for (const property of ['opacity', 'transform', 'backgroundPosition']) {
        if (property in animation.frames.at(-1)) assert.equal(animation.frames.at(-1)[property], animation.frames.at(-2)[property]);
      }
    }
  } finally { f.close(); }
});
