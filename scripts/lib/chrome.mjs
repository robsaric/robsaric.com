/**
 * Shared headless-Chrome plumbing for the scripts that render pages: the
 * layout gate (check-layout.mjs) and the OG card generator (generate-og.mjs).
 * Drives Chrome over CDP using Node 22's global WebSocket. No dependencies.
 */
import { spawn } from 'node:child_process';
import { readFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

export const CHROME_CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
];

export const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

export function findChrome() {
  return CHROME_CANDIDATES.find((candidate) => existsSync(candidate)) ?? null;
}

/** Minimal CDP client: send(method, params) -> Promise<result>, plus one-shot event waiters. */
export function cdp(url) {
  const ws = new WebSocket(url);
  const pending = new Map();
  const waiters = [];
  let nextId = 0;

  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);

    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
      return;
    }

    for (let i = waiters.length - 1; i >= 0; i -= 1) {
      if (waiters[i].method === msg.method) {
        waiters[i].resolve(msg.params);
        waiters.splice(i, 1);
      }
    }
  });

  const ready = new Promise((resolve, reject) => {
    ws.addEventListener('open', () => resolve());
    ws.addEventListener('error', () => reject(new Error(`cdp connect failed: ${url}`)));
  });

  return {
    ready,
    send(method, params = {}) {
      nextId += 1;
      const id = nextId;
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    },
    once(method, timeoutMs = 20000) {
      return new Promise((resolve, reject) => {
        // The timer must be cleared on resolve: an armed timer holds the Node
        // event loop open, and neither consumer exits on its success path, so
        // an uncleared 20s timer kept the process alive ~20s after done.
        const waiter = { method, resolve: null };
        const timer = setTimeout(() => {
          const at = waiters.indexOf(waiter);
          if (at >= 0) {
            waiters.splice(at, 1);
            reject(new Error(`timed out waiting for ${method}`));
          }
        }, timeoutMs);
        waiter.resolve = (params) => {
          clearTimeout(timer);
          resolve(params);
        };
        waiters.push(waiter);
      });
    },
    close() {
      ws.close();
    },
  };
}

/**
 * Spawns headless Chrome, waits for its debugging port, and returns page
 * factories plus a cleanup that also runs on process exit. The caller owns
 * everything else (its own static server, navigation, evaluation).
 */
export async function launchChrome() {
  const chrome = findChrome();
  if (!chrome) {
    throw new Error(`no Chrome or Edge found. Checked:\n  ${CHROME_CANDIDATES.join('\n  ')}`);
  }

  const profile = mkdtempSync(join(tmpdir(), 'rs-chrome-'));
  const browser = spawn(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--hide-scrollbars',
    `--user-data-dir=${profile}`,
    '--remote-debugging-port=0',
    'about:blank',
  ], { stdio: 'ignore' });

  let cleaned = false;
  const close = () => {
    if (cleaned) return;
    cleaned = true;
    try { browser.kill(); } catch { /* already gone */ }
    try { rmSync(profile, { recursive: true, force: true }); } catch { /* best effort */ }
  };
  process.on('exit', close);

  // Chrome writes the port it actually took into the profile directory.
  const portFile = join(profile, 'DevToolsActivePort');
  let debugPort = null;
  for (let attempt = 0; attempt < 150 && debugPort === null; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    if (!existsSync(portFile)) continue;
    const line = readFileSync(portFile, 'utf8').split('\n')[0].trim();
    if (line) debugPort = Number(line);
  }
  if (!debugPort) {
    close();
    throw new Error('Chrome did not report a debugging port.');
  }

  const version = await (await fetch(`http://127.0.0.1:${debugPort}/json/version`)).json();
  const browserCdp = cdp(version.webSocketDebuggerUrl);
  await browserCdp.ready;

  return {
    browserCdp,
    async newPage() {
      const { targetId } = await browserCdp.send('Target.createTarget', { url: 'about:blank' });
      const page = cdp(`ws://127.0.0.1:${debugPort}/devtools/page/${targetId}`);
      await page.ready;
      await page.send('Page.enable');
      return page;
    },
    close() {
      browserCdp.close();
      close();
    },
  };
}
