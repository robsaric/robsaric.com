import { personFrame, runnerParts } from './start-runner.mjs';

export const MOMENT_DURATION = { evening: 4300, 'wrong-turn': 4700 };
const clamp = t => Math.max(0, Math.min(1, t));
const ease = t => t * t * (3 - 2 * t);
const between = (t, start, end) => ease(clamp((t - start) / (end - start)));
const mix = (a, b, t) => a + (b - a) * t;
const n = x => Number(x.toFixed(2));
const point = (x, y) => `${n(x)} ${n(y)}`;
const interpolate = (poses, t) => {
  const next = poses.findIndex(([at]) => at > t);
  if (next < 0) return poses.at(-1)[1];
  if (!next) return poses[0][1];
  const [from, a] = poses[next - 1], [to, b] = poses[next];
  return a.map((value, i) => mix(value, b[i], between(t, from, to)));
};

// Same joint order as the homepage runner. The seated body stays grounded;
// the hands reach the lid, close it, and then lift the book from the lap.
const typing = [82,23, 76,39, 67,71, 94,51, 118,62, 81,57, 105,62, 96,74, 104,106, 79,87, 73,106];
const reach = [83,23, 76,39, 67,71, 110,34, 138,27, 81,57, 105,62, 96,74, 104,106, 79,87, 73,106];
const closed = [83,26, 76,41, 67,71, 99,51, 112,62, 81,57, 105,62, 96,74, 104,106, 79,87, 73,106];
const pickUp = [83,28, 77,41, 67,71, 88,60, 103,77, 76,61, 99,77, 96,74, 104,106, 79,87, 73,106];
const reading = [84,26, 76,40, 67,71, 87,57, 113,63, 76,57, 98,60, 96,74, 104,106, 73,88, 68,106];

function eveningFrame(t) {
  const pose = interpolate([[0,typing],[.12,typing],[.24,reach],[.47,closed],[.6,pickUp],[.88,reading],[1,reading]],t);
  const close = between(t,.24,.47);
  const angle = mix(-110,-180,close)*Math.PI/180;
  const lidX = 152+38*Math.cos(angle), lidY = 63+38*Math.sin(angle);
  const lift = between(t,.6,.88), open = between(t,.69,.88);
  const x = mix(103,114,lift), y = mix(84,67,lift), w = mix(2,18,open), h=22;
  return {
    person:personFrame(pose),
    props: {
      laptop: {d:`M108 65h48 M152 63L${point(lidX,lidY)}`},
      bookLeft: {d:`M${point(x,y)} l${point(-w,-6*open)} v-${h} l${point(w,6*open)} Z`},
      bookRight: {d:`M${point(x,y)} l${point(w,-6*open)} v-${h} l${point(-w,6*open)} Z`},
      bookSpine: {d:`M${point(x,y-h)}v${h}`},
      bookLines: {d:`M${point(x-w+4,y-h-1)}l${point(Math.max(0,w-8),3*open)} M${point(x+4,y-h+2)}l${point(Math.max(0,w-8),-3*open)}`,opacity:open},
    },
  };
}

const strideA = [3,15, 0,29, -5,56, 13,42, 19,30, -13,43, -22,34, 13,58, 15,86, -23,71, -36,81];
const strideB = [3,17, 0,31, -5,58, -14,45, -23,37, 15,42, 23,31, -22,75, -36,81, 15,62, 29,86];
const standing = [0,15, 0,29, -3,56, 11,44, 9,58, -11,44, -10,57, 4,72, 6,86, -9,72, -12,86];
const mapPose = [5,19, 1,32, -3,56, 16,44, 31,43, 4,49, 20,45, 4,72, 6,86, -9,72, -12,86];
const movePose = (pose,x,direction=1) => pose.map((v,i)=>i%2 ? v+22 : x+v*direction);

function wrongTurnFrame(t) {
  const gait = interpolate([[0,strideA],[.08,strideB],[.16,strideA],[.24,strideB],[.32,strideA],[.4,strideB],[.48,standing],[.6,mapPose],[.7,mapPose],[.76,standing],[.84,strideA],[.92,strideB],[1,standing]],t);
  const x = t < .48 ? mix(39,244,between(t,0,.48)) : mix(244,185,between(t,.76,1));
  const direction = t < .74 ? 1 : -1;
  const reveal = between(t,.52,.61)*(1-between(t,.7,.74));
  const mapX=x+20, mapY=65, w=15*reveal;
  const pose=movePose(gait,x,direction);
  const person=personFrame(pose);
  if (direction<0) {
    person.footBack=`M${point(pose[20]+2,pose[21])}l-8 1`;
    person.footFront=`M${point(pose[16]+2,pose[17])}l-8 1`;
  }
  return {
    person,
    props: {
      map: {d:`M${point(mapX-w,mapY-14)}l${point(w,4)}l${point(w,-4)}v22l${point(-w,4)}l${point(-w,-4)}Z M${point(mapX,mapY-10)}v22`,opacity:reveal},
      mapRoute: {d:`M${point(mapX-10,mapY+2)}l7-7 7 7 6-6`,opacity:reveal},
    },
  };
}

export function momentFrame(variant, progress) {
  const t=clamp(progress);
  return variant==='evening' ? eveningFrame(t) : wrongTurnFrame(t);
}

export function momentProps(frame) {
  return Object.entries(frame.props).map(([name,prop])=>`<path class="moment-prop moment-${name}" data-prop="${name}" d="${prop.d}" opacity="${prop.opacity??1}"/>`).join('');
}

export const MOMENT_SCENERY = {
  evening: '<path class="moment-ground" d="M35 109h145"/><path class="moment-furniture" d="M54 48v28h33 M58 76v31 M83 76v31 M113 70h57 M160 70v37"/>',
  'wrong-turn': '<path class="moment-ground" d="M14 110h274"/><path class="moment-furniture" d="M153 41v66"/><path class="moment-sign" d="M174 25h-36l-13 9 13 9h36Z"/><path class="moment-sign-arrow" d="M163 34h-25m5-4-5 4 5 4"/>',
};

/** Static rendering also supplies the no-JavaScript and reduced-motion poses. */
export function momentPerson(frame) { return runnerParts(frame.person); }
