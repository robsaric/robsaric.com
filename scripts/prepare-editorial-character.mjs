import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// Export the approved artwork as small, equally registered animation cells.
// Source sheets are retained outside the public bundle for future art direction.
const root = resolve('public/illustrations/rob-ink');
await mkdir(root, { recursive: true });
if (!process.argv[2] || !process.argv[3]) throw new Error('Pass the source-sheet folder and the Newsreader TTF file.');
const generated = resolve(process.argv[2]) + '/';
const sheets = [
  ['runner', 'exec-1b8ef2ab-9238-4537-8a05-7b3ff630cd45.png', 4, 3],
  ['evening', 'exec-a05242fc-bd7f-4846-9105-0f9dfba543ef.png', 4, 1],
  ['wrong-turn', 'exec-8aa8c5e1-4466-48f0-b2a0-75312bdc6fca.png', 3, 2],
];
for (const [name, source, columns, rows] of sheets) {
  const input = generated + source;
  const { width, height } = await sharp(input).metadata();
  const cells = [];
  for (let y = 0; y < rows; y++) for (let x = 0; x < columns; x++) {
    // The hand-drawn runner's rows are slightly uneven. Crop in the transparent
    // gutters so the hop's head and the stumble's fingertips stay intact.
    const xs = name === 'runner' ? [0, 362, 750, 1086, 1448] : Array.from({length: columns + 1}, (_, i) => Math.round(i * width / columns));
    const ys = name === 'runner' ? [0, 380, 705, 1086] : Array.from({length: rows + 1}, (_, i) => Math.round(i * height / rows));
    const left = xs[x], top = ys[y];
    const w = xs[x + 1] - left, h = ys[y + 1] - top;
    cells.push(await sharp(input).extract({ left, top, width: w, height: h }).png().toBuffer());
  }
  if (name === 'runner') {
    const recovery = generated + 'exec-837a9de9-6252-4809-8ebe-e870c638a57b.png';
    for (const [column, frame] of [6, 8, 10].entries()) {
      cells[frame] = await sharp(recovery).extract({ left: column * 724, top: 0, width: 724, height: 724 }).png().toBuffer();
    }
    const shuffle = generated + 'exec-c8f2aeb6-9343-4659-af50-f9766a45b76c.png';
    const dimensions = await sharp(shuffle).metadata();
    const half = dimensions.width / 2;
    for (let column = 0; column < 2; column++) {
      cells.push(await sharp(shuffle).extract({ left: column * half, top: 0, width: half, height: dimensions.height }).png().toBuffer());
    }
    // Registered head-turn poses: body height and baseline match the upright pose.
    for (let column = 0; column < 2; column++) {
      cells.push(await sharp('src/assets/illustrations/runner-glance.png')
        .extract({ left: column * 256, top: 0, width: 256, height: 256 }).png().toBuffer());
    }
  }
  // The evening sheet has generous transparent top/bottom margins. Use the
  // same crop for every cell so the chair stays registered between poses.
  const size = name === 'evening' ? 320 : 256;
  const prepared = await Promise.all(cells.map(cell => {
    const image = sharp(cell);
    if (name === 'evening') image.extract({ left: 0, top: 110, width: 543, height: 530 });
    return image.resize(size, size, { fit: 'contain', background: '#00000000' }).png().toBuffer();
  }));
  await sharp({ create: { width: size * cells.length, height: size, channels: 4, background: '#00000000' } })
    .composite(prepared.map((input, i) => ({ input, left: i * size, top: 0 })))
    .webp({ quality: 84, alphaQuality: 100 }).toFile(resolve(root, (name === 'runner' ? 'runner-glance' : name) + '.webp'));
  console.log(`${name}: ${cells.length} frames, ${size}px cells`);
}

const fontfile = resolve(process.argv[3]);
const letters = await sharp({ text: { text: '<span foreground="#252525">RS</span>', font: 'RobNewsreader 132', fontfile, rgba: true } }).png().toBuffer();
const mark = await sharp(letters).resize({ width: 154, height: 142, fit: 'inside' }).png().toBuffer();
const m = await sharp(mark).metadata();
const icon = await sharp({ create: { width: 192, height: 192, channels: 4, background: '#faf8f2' } })
  .composite([{ input: mark, left: Math.round((192-m.width)/2), top: Math.round((192-m.height)/2) }]).png().toBuffer();
await sharp(icon).resize(32,32).png().toFile('public/favicon-32.png');
await sharp(icon).resize(180,180).png().toFile('public/apple-touch-icon.png');
const png = await sharp(icon).resize(32,32).png().toBuffer();
const header = Buffer.alloc(22); header.writeUInt16LE(1,2); header.writeUInt16LE(1,4);
header[6]=32; header[7]=32; header.writeUInt16LE(1,10); header.writeUInt16LE(32,12);
header.writeUInt32LE(png.length,14); header.writeUInt32LE(22,18);
await writeFile('public/favicon.ico',Buffer.concat([header,png]));
await writeFile(resolve(root,'favicon-preview.png'),icon);
