/**
 * Site-wide configuration. Values marked TODO are unset on purpose:
 * components render nothing for an unset link rather than a dead one.
 * See docs/COPY.md "Verification table" (V12).
 */
export const SITE = {
  name: 'Rob Saric',
  title: 'Rob Saric · Work is hard enough. More effort isn’t always the answer.',
  description:
    'Rob Saric on the decisions behind building a business: what’s worth building, where AI helps, and how to leave room for life outside work. Founder in Ottawa.',
  url: 'https://robsaric.com',
  locale: 'en',
  author: {
    name: 'Rob Saric',
    jobTitle: 'Founder and builder',
    location: 'Ottawa',
  },
  caretricsUrl: 'https://caretrics.com',
  /** Switch both values only after the public Clinic Operations site is checked. */
  clinicOperations: {
    href: '/contact/',
    label: 'Talk with me about clinic operations →',
  },
  /**
   * Hero CTA destination (Rob, 2026-08-24): the product explainer continues
   * the "See how Caretrics works" promise better than the root. Verified live
   * 2026-08-24. Nav, footer, and the 02 section button keep the root.
   */
  caretricsProductUrl: 'https://caretrics.com/product',
  togetherenUrl: 'https://togetheren.com',
  unpluggedCanadaUrl: 'https://www.unpluggedcanada.com/',
  email: 'rob@caretrics.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/robertsaric/',
    /** Undecided whether to keep X. Empty string hides the link. */
    x: '',
    github: 'https://github.com/robsaric',
    /** Public repo for "View source". */
    source: 'https://github.com/robsaric/robsaric.com',
  },
} as const;

export type SiteLinkKey = keyof typeof SITE.links;
