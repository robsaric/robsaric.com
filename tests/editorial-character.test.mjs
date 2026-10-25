import { test } from 'node:test';
import assert from 'node:assert/strict';
import { initializeInkCharacters } from '../src/lib/editorial-character.ts';

function setup(variant = 'runner', reduced = false, still = false) {
  let clock = 0, id = 0, observer;
  const scheduled = new Map(), timers = new Map(), events = new Map(), buttonEvents = new Map();
  const pose = { style: { setProperty(k,v) { this[k]=v; } }, clientWidth: 128 };
  const stage = { clientWidth: 280 };
  const button = { hidden: true, dataset: {}, setAttribute(k,v) { this[k]=v; }, addEventListener(k,v) { buttonEvents.set(k,v); } };
  const scene = { dataset: { inkCharacter: variant }, hasAttribute: () => still,
    querySelector: name => name === '[data-ink-pose]' ? pose : name === '.ink-stage' ? stage : variant === 'runner' ? button : null };
  const preference = { matches: reduced, addEventListener: (k,v) => events.set('preference:'+k,v) };
  const document = { hidden: false, documentElement: { dataset: { appearance: 'day' } }, querySelectorAll: () => [scene], addEventListener: (k,v) => events.set(k,v) };
  const window = { addEventListener: (k,v) => events.set(k,v), setTimeout: (cb,ms) => { timers.set(++id,{cb,ms}); return id; } };
  const globals = { document, window, performance: { now: () => clock }, matchMedia: () => preference,
    requestAnimationFrame: cb => { scheduled.set(++id,cb); return id; }, cancelAnimationFrame: id => scheduled.delete(id), clearTimeout: id => timers.delete(id),
    Image: class { set src(_) { this.onload(); } },
    IntersectionObserver: class { constructor(cb) { observer=cb; } observe() {} },
  };
  window.IntersectionObserver = globals.IntersectionObserver;
  const saved = Object.fromEntries(Object.keys(globals).map(k => [k,Object.getOwnPropertyDescriptor(globalThis,k)]));
  for (const [key,value] of Object.entries(globals)) Object.defineProperty(globalThis,key,{ configurable: true, writable: true, value });
  initializeInkCharacters({ pause: 'Pause runner animation', resume: 'Resume runner animation' });
  return { pose, scene, button, document, preference, scheduled, timers,
    visible(value) { observer?.([{ isIntersecting: value, intersectionRatio: value ? 1 : 0 }]); },
    event(name) { events.get(name)?.(); },
    click() { buttonEvents.get('click')?.(); },
    frame(time) { clock=time; const callbacks=[...scheduled.values()]; scheduled.clear(); callbacks.forEach(cb => cb(clock)); },
    close() { for (const key of Object.keys(globals)) saved[key] ? Object.defineProperty(globalThis,key,saved[key]) : delete globalThis[key]; },
  };
}

test('runner pauses and resumes without restarting its story', () => {
  const f=setup(); try {
    f.visible(true); f.frame(1800); const before=f.scene.dataset.frame;
    f.click(); assert.equal(f.button['aria-label'],'Resume runner animation'); assert.equal(f.scheduled.size,0);
    f.frame(8000); assert.equal(f.scene.dataset.frame,before);
    f.click(); f.frame(8100); assert.equal(f.button['aria-label'],'Pause runner animation'); assert.equal(f.scene.dataset.frame,before);
  } finally { f.close(); }
});
test('quiet interval schedules a wake-up instead of drawing continually', () => {
  const f=setup(); try {
    f.visible(true); f.frame(8500); assert.equal(f.scene.dataset.state,'resting'); assert.equal(f.scheduled.size,0);
    assert.equal([...f.timers.values()][0].ms,8000);
  } finally { f.close(); }
});
test('recovery holds three visible dust-off strokes before standing again', () => {
  const f=setup(); try {
    f.visible(true); f.frame(3000); assert.equal(f.scene.dataset.frame,'4');
    for (const time of [4750,5550,6350]) {
      f.frame(time); assert.equal(f.scene.dataset.beat,'dust-off');
      assert.ok(Number(f.pose.style['--dust-opacity']) > .6);
      assert.equal(f.pose.style.opacity,'1');
    }
    f.frame(6750); assert.equal(f.scene.dataset.frame,'7');
    assert.equal(f.pose.style['--dust-opacity'],'0');
  } finally { f.close(); }
});
test('hidden, offscreen and night-mode runner stops all scheduled work', () => {
  const f=setup(); try {
    f.visible(true); f.document.hidden=true; f.event('visibilitychange'); assert.equal(f.scheduled.size,0);
    f.document.hidden=false; f.event('visibilitychange'); assert.equal(f.scheduled.size,1);
    f.visible(false); assert.equal(f.scheduled.size,0);
    f.visible(true); f.document.documentElement.dataset.appearance='night'; f.event('appearancechange'); assert.equal(f.scheduled.size,0);
  } finally { f.close(); }
});
test('reduced motion exposes a still and hides the unnecessary pause control', () => {
  const f=setup('runner',true); try {
    f.visible(true); assert.equal(f.button.hidden,true); assert.equal(f.scene.dataset.state,'reduced'); assert.equal(f.scheduled.size,0);
    assert.equal(f.pose.style.opacity,'1'); assert.equal(f.pose.style.transform,'');
  } finally { f.close(); }
});
test('footer and 404 finish once and do not replay when re-entering view', () => {
  for (const variant of ['evening','wrong-turn']) {
    const f=setup(variant); try {
      f.visible(true); f.frame(5000); assert.equal(f.scene.dataset.state,'complete'); assert.equal(f.scheduled.size,0);
      f.visible(false); f.visible(true); assert.equal(f.scheduled.size,0); assert.equal(f.timers.size,0);
    } finally { f.close(); }
  }
});
