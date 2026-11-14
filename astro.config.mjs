// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import { buildSiteRedirects } from './src/data/redirects.mjs';
import { readFile, writeFile } from 'node:fs/promises';

/**
 * Vercel emits our 301s as `^/slug$`, but with trailingSlash 'always' the
 * platform 308s `/slug` -> `/slug/` first, and `/slug/` matches nothing, so
 * every legacy URL would 404 in production. Make each 301 source accept both
 * forms. No-op if the adapter ever emits a slash-tolerant source itself.
 * Verified against @vercel/routing-utils matching in scripts/check-redirects.mjs.
 */
/** @returns {import('astro').AstroIntegration} */
function vercelSlashTolerantRedirects() {
  return {
    name: 'robsaric:vercel-slash-tolerant-redirects',
    hooks: {
      'astro:build:done': async ({ logger }) => {
        const file = new URL('./.vercel/output/config.json', import.meta.url);
        let cfg;
        try {
          cfg = JSON.parse(await readFile(file, 'utf8'));
        } catch {
          return; // not a Vercel build
        }
        let patched = 0;
        for (const r of cfg.routes ?? []) {
          if (r.status === 301 && typeof r.src === 'string' && /\$$/.test(r.src) && !/\/\??\$$/.test(r.src)) {
            r.src = r.src.replace(/\$$/, '/?$');
            patched++;
          }
        }
        if (patched) {
          await writeFile(file, JSON.stringify(cfg, null, 2));
          logger.info(`made ${patched} legacy 301 route(s) trailing-slash tolerant`);
        }
      },
    },
  };
}

/**
 * The adapter emits its one-year immutable cache route for /_astro/ after
 * `{ handle: 'filesystem' }`. Vercel's Build Output API: "The handle value
 * indicates the start of a phase. All following routes are only checked in
 * that phase", and the filesystem phase is for "matches after the filesystem
 * misses". Every /_astro/ file exists, so the header never applied: production
 * served them `max-age=0, must-revalidate` (checked 2026-11-14). Moving the
 * route ahead of the handle puts it where vercel.json headers go. No-op if the
 * adapter ever fixes its own ordering. Checked in scripts/check-redirects.mjs.
 */
/** @returns {import('astro').AstroIntegration} */
function vercelAssetCacheBeforeFilesystem() {
  let assets = '_astro';
  return {
    name: 'robsaric:vercel-asset-cache-before-filesystem',
    hooks: {
      'astro:config:done': ({ config }) => {
        assets = config.build.assets || '_astro';
      },
      'astro:build:done': async ({ logger }) => {
        const file = new URL('./.vercel/output/config.json', import.meta.url);
        let cfg;
        try {
          cfg = JSON.parse(await readFile(file, 'utf8'));
        } catch {
          return; // not a Vercel build
        }
        /** @type {Array<Record<string, any>>} */
        const routes = cfg.routes ?? [];
        const assetSrc = `^/${assets}/(.*)$`;
        const assetRouteIndex = routes.findIndex(
          (r) => r.src === assetSrc && typeof r.headers?.['cache-control'] === 'string' && r.continue === true,
        );
        const fileSystemRouteIndex = routes.findIndex((r) => r.handle === 'filesystem');
        if (assetRouteIndex < 0 || fileSystemRouteIndex < 0 || assetRouteIndex < fileSystemRouteIndex) return;
        const [assetRoute] = routes.splice(assetRouteIndex, 1);
        routes.splice(fileSystemRouteIndex, 0, assetRoute);
        await writeFile(file, JSON.stringify(cfg, null, 2));
        logger.info('moved Vercel asset cache route before the filesystem phase');
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://robsaric.com',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  adapter: vercel(),
  integrations: [
    sitemap({
      /**
       * /how-i-counted/ stays in (docs/COPY.md, V5). /subscribed/ comes out
       * 2026-08-29: it renders `noindex, nofollow` and is Disallow'd in
       * robots.txt, so submitting it made Search Console report the page as
       * both blocked and noindexed. Confirmation links also stay private.
       */
      filter: (page) => !page.includes('/subscribed/') && !page.includes('/confirm/'),
    }),
    mdx(),
    vercelSlashTolerantRedirects(),
    vercelAssetCacheBeforeFilesystem(),
  ],
  // Self-hosted at build time through the Fonts API (no runtime Google requests).
  // Consumed in BaseLayout via <Font cssVariable="--font-inter" preload /> and
  // <Font cssVariable="--font-manrope" />; tokens.css aliases them as
  // --font-sans / --font-display (distinct names prevent self-reference).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      weights: [400, 500],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      weights: [500, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  // 301s for the 2009 to 2019 WordPress URLs. Source: src/data/legacy-redirects.mjs.
  redirects: buildSiteRedirects(),
});
