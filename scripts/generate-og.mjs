#!/usr/bin/env node
/**
 * Renders the OG share card for every published field note.
 *
 * How: builds each card as an HTML page (scripts/og-card-template.mjs), paints
 * it in headless Chrome at 1200x630 with the real site tokens and the real
 * built fonts, screenshots it, and writes public/og/notes/<note-id>.png. The
 * PNGs are committed; Vercel never runs this (its build image has no Chrome),
 * it just copies public/ like any other static file.
 *
 * Fonts come from the production build: the Fonts API inlines @font-face CSS
 * into every built page with hashed /_astro/fonts/ URLs, so this script lifts
 * that CSS from dist/client/index.html and serves dist/client for the files.
 * That is why `astro build` must run first.
 *
 * Run: pnpm generate:og   (after a build; then commit the PNGs)
 * The gate's check-notes fails any published note whose PNG is missing.
 */
import { createServer } from 'node:http';
import { readdirSync, readFileSync, existsSync, mkdirSync, writeFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import sharp from 'sharp';
import { MIME, launchChrome } from './lib/chrome.mjs';
import { frontmatter, isDraft } from './lib/frontmatter.mjs';
import { renderCard, renderSiteCard } from './og-card-template.mjs';
import { OG_CARD, OG_SITE_CARD } from '../src/data/og-card.mjs';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const DIST = join(ROOT, 'dist', 'client');
const NOTES_DIR = join(ROOT, 'src', 'content', 'notes');
const TOKENS = join(ROOT, 'src', 'styles', 'tokens.css');
const AVATAR = join(ROOT, 'src', 'assets', 'images', 'rob-avatar.png');
const SITE_PHOTO = join(ROOT, 'src', 'assets', 'images', 'rob-portrait-caretrics.png');
const OUT_DIR = join(ROOT, 'public', 'og', 'notes');
const SITE_CARD_OUT = join(ROOT, 'public', 'og-default.png');

/** Same shape as the article header date (Intl en-CA long, UTC). */
const dateFormat = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

/** The @font-face and :root{--font-*} CSS the Fonts API inlined into the build. */
function builtFontCss() {
  const html = readFileSync(join(DIST, 'index.html'), 'utf8');
  const faces = html.match(/@font-face\{[^}]*\}/gu) ?? [];
  const roots = html.match(/:root\{--font-[^}]*\}/gu) ?? [];
  if (faces.length === 0 || roots.length === 0) {
    throw new Error('no @font-face CSS in dist/client/index.html; run `astro build` first');
  }
  return [...faces, ...roots].join('');
}

/** Published notes only; drafts get their card when they are un-drafted. */
function publishedNotes() {
  return readdirSync(NOTES_DIR)
    .filter((name) => /\.mdx?$/u.test(name))
    .map((name) => ({ id: name.replace(/\.mdx?$/u, ''), data: frontmatter(readFileSync(join(NOTES_DIR, name), 'utf8')) }))
    .filter(({ id, data }) => {
      if (!data || !data.title || !data.date || !data.type) {
        throw new Error(`${id}: missing title, date, or type frontmatter`);
      }
      // check-notes enforces the same rule; repeated here because this script
      // runs before the gate and a misnamed PNG would 404 behind a green gate:
      // the page's og:image path uses Astro's slugified entry.id, and only an
      // already-clean stem is guaranteed to equal it.
      if (!/^[a-z0-9-]+$/u.test(id)) {
        throw new Error(`${id}: filename stem must be a clean slug (lowercase a-z, 0-9, hyphens); Astro's entry.id would diverge from it`);
      }
      return !isDraft(data);
    })
    .sort((a, b) => a.id.localeCompare(b.id));
}

/** Serves the card pages plus dist/client, which the cards need for fonts. */
function serve(cards) {
  const server = createServer((req, res) => {
    const url = decodeURIComponent((req.url ?? '/').split('?')[0]);

    if (cards.has(url)) {
      res.writeHead(200, { 'content-type': MIME['.html'] });
      res.end(cards.get(url));
      return;
    }
    if (url === '/tokens.css') {
      res.writeHead(200, { 'content-type': MIME['.css'] });
      res.end(readFileSync(TOKENS));
      return;
    }
    if (url === '/avatar.png') {
      res.writeHead(200, { 'content-type': MIME['.png'] });
      res.end(readFileSync(AVATAR));
      return;
    }
    if (url === '/site-photo.png') {
      res.writeHead(200, { 'content-type': MIME['.png'] });
      res.end(readFileSync(SITE_PHOTO));
      return;
    }

    let file = join(DIST, url);
    try {
      if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
      const body = readFileSync(file);
      res.writeHead(200, { 'content-type': MIME[extname(file)] ?? 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain' }).end('not found');
    }
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

async function main() {
  if (!existsSync(DIST)) {
    console.error('generate-og: dist/client not found. Run `astro build` first.');
    process.exit(1);
  }

  const fontCss = builtFontCss();
  const notes = publishedNotes();
  if (notes.length === 0) {
    console.log('generate-og: no published notes.');
    return;
  }

  const cards = new Map(notes.map(({ id, data }) => [
    `/card/${id}/`,
    renderCard({
      title: data.title,
      eyebrow: [data.type, dateFormat.format(new Date(`${data.date}T00:00:00Z`))].join(OG_CARD.separator),
      author: OG_CARD.author,
      site: OG_CARD.site,
      stat: data.stat && data.statLabel
        ? { value: data.stat, label: data.statLabel, context: data.statContext }
        : null,
      fontCss,
    }),
  ]));

  cards.set('/card/__site__/', renderSiteCard({ ...OG_SITE_CARD, fontCss }));

  const { server, port } = await serve(cards);
  const browser = await launchChrome();
  const cleanup = () => {
    browser.close();
    try { server.close(); } catch { /* already closed */ }
  };
  process.on('exit', cleanup);

  const page = await browser.newPage();
  await page.send('Emulation.setDeviceMetricsOverride', {
    width: 1200,
    height: 630,
    deviceScaleFactor: 1,
    mobile: false,
  });

  mkdirSync(OUT_DIR, { recursive: true });

  for (const { id } of notes) {
    const loaded = page.once('Page.loadEventFired');
    await page.send('Page.navigate', { url: `http://127.0.0.1:${port}/card/${id}/` });
    await loaded;
    // The screenshot must wait for the webfonts, or it paints the fallback.
    await page.send('Runtime.evaluate', {
      expression: 'document.fonts.ready.then(() => true)',
      awaitPromise: true,
    });

    const shot = await page.send('Page.captureScreenshot', { format: 'png' });
    const png = await sharp(Buffer.from(shot.data, 'base64'))
      .png({ compressionLevel: 9, palette: true })
      .toBuffer();
    const out = join(OUT_DIR, `${id}.png`);
    writeFileSync(out, png);
    console.log(`  og/notes/${id}.png  ${Math.round(png.length / 1024)}KB`);
  }

  {
    const loaded = page.once('Page.loadEventFired');
    await page.send('Page.navigate', { url: `http://127.0.0.1:${port}/card/__site__/` });
    await loaded;
    await page.send('Runtime.evaluate', {
      expression: 'document.fonts.ready.then(() => true)',
      awaitPromise: true,
    });
    const shot = await page.send('Page.captureScreenshot', { format: 'png' });
    const png = await sharp(Buffer.from(shot.data, 'base64'))
      .png({ compressionLevel: 9 })
      .toBuffer();
    writeFileSync(SITE_CARD_OUT, png);
    console.log(`  og-default.png  ${Math.round(png.length / 1024)}KB (site card)`);
  }

  page.close();
  cleanup();
  console.log(`generate-og: ${notes.length} card(s) written to public/og/notes/`);
}

main().catch((error) => {
  console.error(`generate-og: ${error.message}`);
  process.exit(1);
});
