// Authored poses: head, shoulder, hip, front elbow/wrist, rear elbow/wrist,
// front knee/ankle and rear knee/ankle. Coordinates stay in the SVG's own space.
export const RUN_DURATION = 6200;
export const REST_DURATION = 8000;
const crouch = [62,36, 54,45, 37,53, 62,58, 64,75, 45,61, 53,75, 54,61, 42,74, 27,62, 16,74];
const set = [62,34, 54,43, 36,48, 62,57, 64,75, 45,60, 53,75, 53,59, 42,74, 26,61, 16,74];
const drive = [75,29, 65,40, 48,50, 77,48, 81,37, 50,55, 41,48, 66,46, 64,65, 31,62, 18,74];
const strideA = [98,20, 88,32, 76,49, 99,38, 104,26, 73,42, 64,33, 96,46, 92,69, 61,62, 47,58];
const strideB = [122,22, 113,34, 100,52, 97,46, 85,38, 127,43, 134,30, 84,67, 70,64, 120,50, 128,72];
const trip = [235,26, 221,39, 199,48, 244,40, 247,27, 206,49, 198,44, 223,64, 235,74, 189,64, 171,60];
const falling = [260,50, 243,50, 222,55, 257,61, 264,74, 235,67, 248,74, 209,71, 191,73, 218,67, 210,75];
const landed = [271,68, 258,68, 235,69, 271,75, 286,75, 256,75, 266,75, 220,72, 204,74, 227,75, 215,75];
const kneel = [253,38, 247,49, 231,58, 260,60, 263,75, 236,59, 238,73, 250,70, 268,74, 220,74, 208,74];
const stand = [247,13, 247,27, 245,50, 260,41, 258,54, 235,42, 239,56, 250,63, 252,75, 237,63, 235,75];
const brushIn = [245,16, 246,29, 245,50, 252,42, 239,52, 235,42, 239,56, 250,63, 252,75, 237,63, 235,75];
const brushOut = [245,16, 246,29, 245,50, 247,44, 233,61, 235,42, 239,56, 250,63, 252,75, 237,63, 235,75];
const move = (pose, x) => pose.map((value,i) => value + (i % 2 === 0 ? x : 0));
const poses = [
  {at:0,pose:crouch}, {at:.08,pose:set}, {at:.18,pose:drive},
  {at:.25,pose:strideA}, {at:.31,pose:move(strideB,26)},
  {at:.37,pose:move(strideA,82)}, {at:.43,pose:move(strideB,88)},
  {at:.48,pose:trip}, {at:.53,pose:falling}, {at:.58,pose:landed},
  {at:.64,pose:landed}, {at:.71,pose:kneel}, {at:.78,pose:stand},
  {at:.81,pose:brushIn}, {at:.84,pose:brushOut},
  {at:.86,pose:brushIn}, {at:.89,pose:brushOut}, {at:.91,pose:stand},
  {at:.96,pose:stand},
];
const n = value => Number(value.toFixed(2));
const path = (p, ...indices) => indices.map((index,i) => `${i ? 'L' : 'M'}${n(p[index*2])} ${n(p[index*2+1])}`).join(' ');
const ease = t => t*t*(3-2*t);

/** A deterministic frame also used to export the animation for review. */
export function runnerFrame(progress) {
  const t = Math.max(0,Math.min(1,progress));
  let p=crouch, opacity=1;
  if(t>=.96) {
    // Reset during a short dissolve, then rest at the line between attempts.
    opacity=ease((t-.96)/.04);
  } else {
    const end=poses.findIndex(({at})=>at>t);
    const {at:startAt,pose:start}=poses[Math.max(0,end-1)];
    const {at:endAt,pose:finish}=poses[end];
    const mix=ease((t-startAt)/(endAt-startAt));
    p=start.map((value,i)=>value+(finish[i]-value)*mix);
    if(t>.92) opacity=1-ease((t-.92)/.04);
  }
  const dx=p[4]-p[2],dy=p[5]-p[3],length=Math.hypot(dx,dy);
  const px=-dy/length,py=dx/length;
  const torso=`M${n(p[2]+px*6)} ${n(p[3]+py*6)} L${n(p[4]+px*5)} ${n(p[5]+py*5)} L${n(p[4]-px*5)} ${n(p[5]-py*5)} L${n(p[2]-px*6)} ${n(p[3]-py*6)} Z`;
  return {
    opacity:n(opacity),
    head:`M${n(p[0]+6)} ${n(p[1])} a6 6 0 1 0-12 0 a6 6 0 1 0 12 0`,
    neck:path(p,0,1), torso,
    armBack:path(p,1,5,6), armFront:path(p,1,3,4),
    legBack:path(p,2,9,10), legFront:path(p,2,7,8),
    footBack:`M${n(p[20]-2)} ${n(p[21])} l8 1`,
    footFront:`M${n(p[16]-2)} ${n(p[17])} l8 1`,
  };
}

export function runnerParts(frame) {
  return ['legBack','armBack','neck','torso','head','legFront','armFront','footBack','footFront']
    .map(part=>`<path data-part="${part}" class="runner-${part}" d="${frame[part]}"/>`).join('');
}
