// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import { buildLegacyRedirects } from './src/data/legacy-redirects.mjs';
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

// https://astro.build/config
export default defineConfig({
  site: 'https://robsaric.com',
  output: 'static',
  trailingSlash: 'always',
  adapter: vercel(),
  integrations: [
    sitemap({
      // No pages excluded. /how-i-counted/ returns with the metric (docs/COPY.md, V5).
      filter: () => true,
    }),
    mdx(),
    vercelSlashTolerantRedirects(),
  ],
  // Self-hosted at build time through the Fonts API (no runtime Google requests).
  // Consumed in BaseLayout via <Font cssVariable="--font-inter" preload /> and
  // <Font cssVariable="--font-instrument-serif" />; tokens.css aliases them as
  // --font-sans / --font-serif (distinct names, so the aliases cannot self-reference).
  fonts: [
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
      name: 'Instrument Serif',
      cssVariable: '--font-instrument-serif',
      weights: [400],
      styles: ['italic', 'normal'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
  // 301s for the 2009 to 2019 WordPress URLs. Source: src/data/legacy-redirects.mjs.
  redirects: buildLegacyRedirects(),
});
