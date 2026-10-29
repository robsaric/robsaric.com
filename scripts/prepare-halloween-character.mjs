import sharp from 'sharp';

// Package the four generated poses into the same horizontal strip format as
// the original characters. Keep the source and earlier stories untouched.
const source = 'src/assets/illustrations/halloween-wizard-source.png';
const { width, height } = await sharp(source).metadata();
const size = 384;
const cells = [];
for (let row = 0; row < 2; row++) for (let column = 0; column < 2; column++) {
  // Register the generated sheet's feet rather than assuming its drawing
  // centres landed exactly on the requested equal grid.
  const left = column === 0 ? 120 : 700, top = Math.round(row * height / 2);
  const cellWidth = Math.min(580, width - left);
  const cellHeight = Math.round((row + 1) * height / 2) - top;
  cells.push(await sharp(source).extract({ left, top, width: cellWidth, height: cellHeight })
    .resize(size, size, { fit: 'contain', background: '#00000000' }).webp({ lossless: true }).toBuffer());
}
await sharp({ create: { width: size * 4, height: size, channels: 4, background: '#00000000' } })
  .composite(cells.map((input, index) => ({ input, left: index * size, top: 0 })))
  .webp({ quality: 88, alphaQuality: 100 })
  .toFile('public/illustrations/rob-ink/halloween.webp');
console.log('Halloween: four 384px poses; original artwork retained.');
