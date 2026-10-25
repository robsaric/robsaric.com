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
  ['runner', 'exec-0b2f19f5-4cce-450b-9535-c270f700a62f.png', 4, 2],
  ['evening', 'exec-a05242fc-bd7f-4846-9105-0f9dfba543ef.png', 4, 1],
  ['wrong-turn', 'exec-8aa8c5e1-4466-48f0-b2a0-75312bdc6fca.png', 3, 2],
];
for (const [name, source, columns, rows] of sheets) {
  const input = generated + source;
  const { width, height } = await sharp(input).metadata();
  const cells = [];
  for (let y = 0; y < rows; y++) for (let x = 0; x < columns; x++) {
    const left = Math.round(x * width / columns), top = Math.round(y * height / rows);
    const w = Math.round((x + 1) * width / columns) - left;
    const h = Math.round((y + 1) * height / rows) - top;
    cells.push(await sharp(input).extract({ left, top, width: w, height: h }).png().toBuffer());
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
    .webp({ quality: 84, alphaQuality: 100 }).toFile(resolve(root, name + '.webp'));
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
