/** Verify the actual built share metadata and images for every sitemap URL. */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { socialImagePath, SOCIAL_IMAGE_VERSION } from '../src/lib/social.mjs';

const root = 'dist/client';
const urls = [...readFileSync(root + '/sitemap-0.xml', 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
const hashes = new Set();
for (const url of urls) {
  const path = new URL(url).pathname;
  const html = readFileSync(root + path + 'index.html', 'utf8');
  const meta = name => html.match(new RegExp('<meta (?:property|name)="' + name + '" content="([^"]+)"'))?.[1];
  assert.equal(meta('og:url'), url, path);
  assert(meta('og:title') && meta('og:description') && meta('og:image:alt'), path);
  assert.equal(meta('twitter:title'), meta('og:title'), path);
  assert.equal(meta('twitter:description'), meta('og:description'), path);
  assert.equal(meta('twitter:image'), meta('og:image'), path);
  assert.equal(meta('twitter:image:alt'), meta('og:image:alt'), path);
  assert.equal(meta('twitter:card'), 'summary_large_image', path);
  assert.equal(meta('og:image:type'), 'image/png', path);
  const image = new URL(meta('og:image'));
  assert.equal(image.origin, new URL(url).origin, path);
  assert.equal(image.pathname, socialImagePath(path), path);
  assert.equal(image.searchParams.get('v'), SOCIAL_IMAGE_VERSION, path);
  const bytes = readFileSync(root + image.pathname);
  assert.equal(bytes.readUInt32BE(0), 0x89504e47, path);
  assert.equal(bytes.readUInt32BE(16), 1200, path);
  assert.equal(bytes.readUInt32BE(20), 630, path);
  assert(bytes.length < 5 * 1024 * 1024, path);
  const hash = createHash('sha256').update(bytes).digest('hex');
  assert(!hashes.has(hash), path + ' unexpectedly reuses another page’s share card');
  hashes.add(hash);
}
console.log(`check-social: ${urls.length} public URLs, unique 1200x630 cards, complete OG/Twitter metadata, no missing images`);
