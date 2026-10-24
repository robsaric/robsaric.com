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
import { buildSiteRedirects } from '../src/data/redirects.mjs';
import assert from 'node:assert/strict';

const expectations = Object.entries(buildSiteRedirects()).flatMap(([from, { destination: to }]) => [
  { from, to }, { from: from + '/', to },
]);

const base = process.argv[2];
let failures = 0;

if (!base) {
  const cfg = JSON.parse(await readFile(new URL('../.vercel/output/config.json', import.meta.url), 'utf8'));
  const routes = cfg.routes.filter((r) => r.src && r.status && r.headers?.Location);
  const resolve = (path, hops = 0) => {
    if (hops > 5) return { error: 'loop' };
    const url = new URL(path, 'https://robsaric.com');
    for (const r of routes) {
      const m = new RegExp(r.src).exec(url.pathname);
      if (m) {
        const loc = new URL(r.headers.Location.replace(/\$(\d)/g, (_, i) => m[Number(i)]), url);
        if (!loc.hash) loc.hash = url.hash;
        return resolve(loc.pathname + loc.search + loc.hash, hops + 1);
      }
    }
    return { final: hops ? url.pathname + url.search + url.hash : null, hops };
  };
  for (const { from, to } of expectations) {
    const res = resolve(from);
    const ok = res.final === to;
    if (!ok) { failures++; console.error(`MISS ${from} -> ${res.final ?? '404'} (expected ${to})`); }
  }
  const writing = await readFile(new URL('../dist/client/writing/index.html',import.meta.url),'utf8');
  const sitemap = await readFile(new URL('../dist/client/sitemap-0.xml',import.meta.url),'utf8');
  assert(writing.includes('rel="canonical" href="https://robsaric.com/writing/"'), 'Writing must self-canonicalize');
  assert(writing.includes('property="og:url" content="https://robsaric.com/writing/"'), 'Writing OG URL must match');
  assert(sitemap.includes('<loc>https://robsaric.com/writing/</loc>'));
  assert(!sitemap.includes('<loc>https://robsaric.com/field-notes/</loc>'), 'Do not sitemap the old index');
  assert.equal(resolve('/writing/').hops,0,'The new index must not redirect');
  assert.equal(resolve('/field-notes/').final,'/writing/');
  assert(resolve('/field-notes/').hops<=2,'Avoid redirect chains');
  const guidePath='/toolbox/interview-draft-edit/';
  const retiredGuide='/toolbox/interview-your-draft/';
  const guide=await readFile(new URL('../dist/client'+guidePath+'index.html',import.meta.url),'utf8');
  assert(guide.includes('rel="canonical" href="https://robsaric.com'+guidePath+'"'),'Guide must self-canonicalize');
  assert(guide.includes('property="og:url" content="https://robsaric.com'+guidePath+'"'),'Guide OG URL must match');
  assert(sitemap.includes('<loc>https://robsaric.com'+guidePath+'</loc>'));
  assert(!sitemap.includes('<loc>https://robsaric.com'+retiredGuide+'</loc>'),'Do not sitemap the retired guide');
  assert.equal(resolve(guidePath).hops,0,'The current guide must not redirect');
  assert.equal(resolve(retiredGuide+'#downloads').final,guidePath+'#downloads','Keep download fragments usable');
  assert(resolve(retiredGuide).hops<=2,'Avoid guide redirect chains');
  const publicUrls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match=>match[1]);
  for (const url of publicUrls) {
    const path=new URL(url).pathname;
    const html=await readFile(new URL('../dist/client'+path+'index.html',import.meta.url),'utf8');
    assert(!/href=["'](?:https:\/\/robsaric\.com)?\/field-notes\/?(?:[?#][^"']*)?["']/.test(html),path+' links to the retired index');
    assert(!/href=["'](?:https:\/\/robsaric\.com)?\/toolbox\/interview-your-draft\/?(?:[?#][^"']*)?["']/.test(html),path+' links to the retired guide');
    if (path.startsWith('/field-notes/')) assert(html.includes('rel="canonical" href="'+url+'"'),'Existing article canonical changed');
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
