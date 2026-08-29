/**
 * Legacy WordPress URLs (robsaric.com, 2009 to 2019) and where they go now.
 * Single source of truth: imported by astro.config.mjs (redirects) and by
 * scripts/import-legacy.mjs (which post slugs to pull). Keep sorted.
 * Redirect status: 301 (permanent). Do not remove entries; search engines still hold them.
 */

/** Post slugs that lived at the site root and now live under /archive/<slug>/. */
export const LEGACY_POST_SLUGS = [
  '3-essential-rules-for-your-startup-journey',
  '3-professional-insights-on-earning-respect',
  '7-ingredients-for-positive-workplace-culture',
  '7-lessons-learned-while-building-a-startup',
  '7-of-the-most-extraordinary-people-you-probably-do-not-know-but-should',
  '9-steps-to-creating-your-sales-battlecard',
  'alignment',
  'be-an-insatiably-curious-intrapreneur',
  'be-great-at-helping-others-succeed',
  'board-meetings',
  'brilliant-but-tortured-alan-turing',
  'building-a-startup-requires-self-awareness',
  'choose-your-core-values-and-mentors-wisely',
  'continually-disrupt-and-reinvent-yourself',
  'dont-be-an-organizational-houdini',
  'enjoy-the-little-things',
  'entering-beast-mode',
  'game-mechanics-designing-an-experience',
  'great-coders-are-artists',
  'great-corporate-culture-starts-with-ethical-decision-making',
  'great-systems-need-to-create-flow',
  'indifference-can-be-powerful-when-negotiating',
  'listening-is-the-language-of-leaders',
  'play-to-win',
  'poor-leadership-warning-signs',
  'setting-expectations-5-things-to-remember-for-maintaining-your-professional-credibility',
  'should-i-ever-provide-free-services-to-earn-new-business',
  'simple-but-effective-rule-to-give-yourself-more-personal-time-each-month',
  'simplicity-is-the-ultimate-sophistication',
  'thank-you-steve-jobs',
  'the-arnold-factor-relentless-determination',
  'the-four-main-life-lessons-that-we-can-learn-from-bill-murray',
  'the-humble-rainmaker',
  'treat-contractors-well',
  'victory-is-the-essence-of-confidence',
  'what-does-leadership-mean-to-you-the-5-challenges-faced-by-women-in-technology-leadership',
  'where-do-you-find-your-professional-inspiration',
  'why-entrepreneurs-should-have-a-bit-of-an-ego',
];

/** Legacy pages and aliases. */
export const LEGACY_PAGE_REDIRECTS = {
  '/blog': '/archive/',
  '/work': '/#caretrics',
  '/links': '/',
  '/writing': '/field-notes/',
  '/feed': '/rss.xml',

  /**
   * Added 2026-08-29. robertsaric.com, the older domain, forwards path for path
   * to robsaric.com, so every indexed legacy path without an entry here lands on
   * a hard 404. `docs/MIGRATION.md` said that domain no longer resolved, which is
   * why the gap went unseen. Slugs confirmed against the Wayback CDX index for
   * both domains and each 404 verified in production before it was added.
   *
   * Two are the same post under an older slug, so they redirect to the post:
   */
  '/great-software-entrepreneurs-are-artists': '/archive/great-coders-are-artists/',
  '/question-of-the-day-should-i-ever-provide-free-services-to-earn-new-business':
    '/archive/should-i-ever-provide-free-services-to-earn-new-business/',

  /** The rest are retired nav and section pages, sent where the reader meant to go. */
  '/bio': '/about/',
  '/mission': '/about/',
  '/my-startups': '/about/',
  '/projects': '/about/',
  '/speaking': '/about/',
  '/connect': '/contact/',
  '/contribute': '/contact/',
  '/work-with-me': '/contact/',
  '/essays': '/archive/',
  '/my-observations': '/archive/',
  '/book': '/archive/',
};

/** Astro `redirects` config object: old path -> { status: 301, destination }. */
export function buildLegacyRedirects() {
  /** @type {Record<string, { status: 301, destination: string }>} */
  const out = {};
  for (const slug of LEGACY_POST_SLUGS) {
    // Astro normalizes the trailing slash; one key covers /slug and /slug/.
    out[`/${slug}`] = { status: 301, destination: `/archive/${slug}/` };
  }
  for (const [from, to] of Object.entries(LEGACY_PAGE_REDIRECTS)) {
    out[from] = { status: 301, destination: to };
  }
  return out;
}
