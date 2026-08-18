#!/usr/bin/env node
/**
 * Redirect check for the 2009 to 2019 WordPress URLs.
 *
 * Local mode (default): reads .vercel/output/config.json after `pnpm build` and
 * simulates Vercel route matching for every legacy URL, with and without the
 * trailing slash. Follows 308 slash normalizers the way the platform does.
 *
 * Live mode: `node scripts/check-redirects.mjs https://preview-host` fetches
 * each legacy URL and asserts a 301/308 chain ending on the expected path.
 *
 * Exit 1 on any miss.
 */
import { readFile } from 'node:fs/promises';
import { LEGACY_POST_SLUGS, LEGACY_PAGE_REDIRECTS } from '../src/data/legacy-redirects.mjs';

const expectations = [];
for (const slug of LEGACY_POST_SLUGS) {
  expectations.push({ from: `/${slug}/`, to: `/archive/${slug}/` });
  expectations.push({ from: `/${slug}`, to: `/archive/${slug}/` });
}
for (const [from, to] of Object.entries(LEGACY_PAGE_REDIRECTS)) {
  expectations.push({ from, to });
  expectations.push({ from: `${from}/`, to });
}

const base = process.argv[2];
let failures = 0;

if (!base) {
  const cfg = JSON.parse(await readFile(new URL('../.vercel/output/config.json', import.meta.url), 'utf8'));
  const routes = cfg.routes.filter((r) => r.src && r.status && r.headers?.Location);
  const resolve = (path, hops = 0) => {
    if (hops > 5) return { error: 'loop' };
    for (const r of routes) {
      const m = new RegExp(r.src).exec(path);
      if (m) {
        const loc = r.headers.Location.replace(/\$(\d)/g, (_, i) => m[Number(i)]);
        if (r.status === 301) return { final: loc, hops: hops + 1 };
        return resolve(loc, hops + 1);
      }
    }
    return { final: null, hops };
  };
  for (const { from, to } of expectations) {
    const res = resolve(from);
    const ok = res.final === to;
    if (!ok) { failures++; console.error(`MISS ${from} -> ${res.final ?? '404'} (expected ${to})`); }
  }
  console.log(`check-redirects (local): ${expectations.length} URLs, ${failures} miss(es)`);
} else {
  for (const { from, to } of expectations) {
    let url = new URL(from, base).toString();
    let ok = false;
    for (let hop = 0; hop < 5; hop++) {
      const res = await fetch(url, { redirect: 'manual' });
      if (res.status === 301 || res.status === 302 || res.status === 307 || res.status === 308) {
        const loc = new URL(res.headers.get('location'), url);
        if (loc.pathname + loc.hash === to || loc.pathname === to) { ok = true; break; }
        url = loc.toString();
        continue;
      }
      break;
    }
    if (!ok) { failures++; console.error(`MISS ${from} did not reach ${to}`); }
  }
  console.log(`check-redirects (live ${base}): ${expectations.length} URLs, ${failures} miss(es)`);
}

process.exit(failures ? 1 : 0);
