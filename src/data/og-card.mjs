/**
 * Strings on the OG share cards (docs/COPY.md, "OG share cards"). Plain .mjs,
 * like legacy-redirects.mjs, because scripts/generate-og.mjs runs in Node and
 * cannot import TypeScript. The name and domain restate src/data/site.ts
 * values; if either changes there, change it here and re-run `pnpm generate:og`.
 *
 * The card's eyebrow is the note's own `type` and date, joined by `separator`.
 */
export const OG_CARD = {
  author: 'Rob Saric',
  site: 'robsaric.com',
  /** Restates UI.section.separator (src/data/ui.ts); keep the two in step. */
  separator: ' · ',
};
