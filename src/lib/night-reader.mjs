import { personFrame, runnerParts } from './start-runner.mjs';

export const NIGHT_READER_DURATION = 3200;
const clamp = value => Math.max(0, Math.min(1, value));
const ease = value => 1 - Math.pow(1 - clamp(value), 3);
const mix = (from, to, t) => from + (to - from) * t;
const n = value => Number(value.toFixed(2));
const point = (x, y) => `${n(x)} ${n(y)}`;

// The runner's joint order, now seated. The feet stay on the floor while
// the reader settles back and raises a book from his lap.
const arriving = [113,17, 105,31, 98,59, 119,46, 135,60, 105,47, 129,60, 127,60, 137,78, 111,68, 105,78];
const reading = [111,22, 102,34, 98,59, 116,45, 144,51, 104,46, 128,48, 127,60, 137,78, 109,68, 103,78];

export function nightReaderFrame(progress) {
  const t = clamp(progress);
  const settle = ease((t - .08) / .78);
  const lift = ease((t - .18) / .64);
  const open = ease((t - .3) / .5);
  const x = mix(133, 141, lift), y = mix(63, 54, lift);
  const w = mix(1.5, 14, open), h = 19;
  return {
    person: personFrame(arriving.map((value, index) => mix(value, reading[index], settle))),
    book: {
      left: `M${point(x,y)}l${point(-w,-4*open)}v-${h}l${point(w,4*open)}Z`,
      right: `M${point(x,y)}l${point(w,-4*open)}v-${h}l${point(-w,4*open)}Z`,
      spine: `M${point(x,y-h)}v${h}`,
      lines: `M${point(x-w+3,y-h)}l${point(Math.max(0,w-6),2.5*open)} M${point(x+3,y-h+2.5*open)}l${point(Math.max(0,w-6),-2.5*open)}`,
      linesOpacity: open,
    },
  };
}

export function nightReaderPerson(progress = 1) {
  return runnerParts(nightReaderFrame(progress).person);
}
