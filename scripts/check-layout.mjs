#!/usr/bin/env node
/**
 * Layout gate: no page may scroll horizontally at any width we support.
 *
 * The site had exactly one breakpoint (max-width: 767.98px) and four sections
 * with fixed 360/400px columns, so everything between 768 and about 1150 broke.
 * The review checklist only ever called for 1440 and 390, which are the two
 * widths where that bug is invisible. This closes that hole.
 *
 * Drives headless Chrome over CDP using Node 22's global WebSocket. No
 * dependencies. Serves dist/client itself, so run it after `astro build`.
 *
 * Run: pnpm check:layout   (also runs inside `pnpm gate`)
 */
import { createServer } from 'node:http';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { MIME, launchChrome } from './lib/chrome.mjs';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const DIST = join(ROOT, 'dist', 'client');

/** Every width we claim to support. 768 and 900 are the ones that were never built. */
const WIDTHS = [320, 390, 768, 900, 1024, 1280, 1440];
const HEIGHT = 900;
/** The archive is 38 near-identical templates; one is enough to cover the layout. */
const ARCHIVE_SAMPLE = 1;

/** Every built route, with the archive collapsed to a sample. */
function routes() {
  const found = [];
  const walk = (dir, prefix) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const next = join(dir, entry.name);
      const route = `${prefix}${entry.name}/`;
      if (existsSync(join(next, 'index.html'))) found.push(route);
      walk(next, route);
    }
  };
  if (existsSync(join(DIST, 'index.html'))) found.push('/');
  walk(DIST, '/');

  const archive = found.filter((r) => r.startsWith('/archive/') && r !== '/archive/');
  const rest = found.filter((r) => !r.startsWith('/archive/') || r === '/archive/');
  return [...rest, ...archive.slice(0, ARCHIVE_SAMPLE)].sort();
}

function serve() {
  const server = createServer((req, res) => {
    const url = decodeURIComponent((req.url ?? '/').split('?')[0]);
    let file = join(DIST, url);

    try {
      if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
    } catch {
      /* fall through to the 404 below */
    }

    try {
      const body = readFileSync(file);
      res.writeHead(200, {
        'content-type': MIME[extname(file)] ?? 'application/octet-stream',
      });
      res.end(body);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain' }).end('not found');
    }
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

/**
 * Runs in the page. Reports the document overflow plus the widest offenders,
 * skipping any element whose parent already sticks out at least as far, so a
 * failure names the element that caused it rather than its whole ancestry.
 */
const PROBE = `(() => {
  const doc = document.documentElement;
  const overflow = doc.scrollWidth - doc.clientWidth;
  if (overflow <= 0) return { overflow: 0, culprits: [] };

  const limit = doc.clientWidth;
  const culprits = [];

  for (const el of document.querySelectorAll('body *')) {
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) continue;

    const past = Math.round(rect.right - limit);
    if (past <= 1) continue;

    const parent = el.parentElement;
    if (parent && Math.round(parent.getBoundingClientRect().right - limit) >= past) continue;

    const className = typeof el.className === 'string' ? el.className : '';
    culprits.push({
      past,
      tag: el.tagName.toLowerCase(),
      cls: className
        .split(/\\s+/)
        .filter((c) => c && !c.startsWith('astro-'))
        .slice(0, 2)
        .join('.'),
    });
  }

  culprits.sort((a, b) => b.past - a.past);
  return { overflow: Math.round(overflow), culprits: culprits.slice(0, 3) };
})()`;

async function main() {
  if (!existsSync(DIST)) {
    console.error('check-layout: dist/client not found. Run `astro build` first.');
    process.exit(1);
  }

  const { server, port } = await serve();

  let browser;
  try {
    browser = await launchChrome();
  } catch (error) {
    try { server.close(); } catch { /* already closed */ }
    console.error(`check-layout: ${error.message}`);
    process.exit(1);
  }

  const cleanup = () => {
    browser.close();
    try { server.close(); } catch { /* already closed */ }
  };
  process.on('exit', cleanup);

  const page = await browser.newPage();

  const list = routes();
  const failures = [];
  let checks = 0;

  for (const width of WIDTHS) {
    await page.send('Emulation.setDeviceMetricsOverride', {
      width,
      height: HEIGHT,
      deviceScaleFactor: 1,
      mobile: width <= 767,
    });

    for (const route of list) {
      const loaded = page.once('Page.loadEventFired');
      await page.send('Page.navigate', { url: `http://127.0.0.1:${port}${route}` });
      await loaded;

      const { result } = await page.send('Runtime.evaluate', {
        expression: PROBE,
        returnByValue: true,
      });

      checks += 1;
      const { overflow, culprits } = result.value;
      if (overflow > 0) failures.push({ width, route, overflow, culprits });
    }
  }

  page.close();
  cleanup();

  if (failures.length > 0) {
    console.error(`check-layout: ${failures.length} horizontal overflow(s) across ${checks} checks\n`);
    for (const failure of failures) {
      const who = failure.culprits
        .map((c) => `${c.tag}${c.cls ? `.${c.cls}` : ''} +${c.past}px`)
        .join(', ');
      console.error(
        `  ${String(failure.width).padStart(4)}px  ${failure.route.padEnd(44)}`
        + ` overflow ${failure.overflow}px${who ? `  [${who}]` : ''}`,
      );
    }
    console.error('');
    process.exit(1);
  }

  console.log(
    `check-layout: ${list.length} route(s) x ${WIDTHS.length} width(s),`
    + ` ${checks} checks, no horizontal overflow`,
  );
}

main().catch((error) => {
  console.error(`check-layout: ${error.message}`);
  process.exit(1);
});
