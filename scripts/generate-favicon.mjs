import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// Keep the original Newsreader letterforms from the editorial artwork.
const monogram = await sharp('public/illustrations/rob-ink/favicon-preview.png')
  .resize(163, 163)
  .png()
  .toBuffer();
const dot = Buffer.from(
  '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192">' +
  '<circle cx="169" cy="140" r="15.5" fill="#244fc7"/></svg>',
);
const icon = await sharp({
  create: { width: 192, height: 192, channels: 4, background: '#faf8f2' },
}).composite([
  { input: monogram, left: 0, top: 14 },
  { input: dot, left: 0, top: 0 },
]).png().toBuffer();

const sizes = [16, 32];
const images = await Promise.all(sizes.map(size =>
  sharp(icon).resize(size, size).png().toBuffer(),
));
await writeFile('public/favicon-32.png', images[1]);
await sharp(icon).resize(180, 180).png().toFile('public/apple-touch-icon.png');

// An ICO directory points to each PNG so a 16px tab can use a native frame.
const directory = Buffer.alloc(6 + 16 * images.length);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(images.length, 4);
let offset = directory.length;
for (const [index, png] of images.entries()) {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(png.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += png.length;
}
await writeFile('public/favicon.ico', Buffer.concat([directory, ...images]));
