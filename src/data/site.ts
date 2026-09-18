/**
 * Site-wide configuration. Values marked TODO are unset on purpose:
 * components render nothing for an unset link rather than a dead one.
 * See docs/COPY.md "Verification table" (V12).
 */
export const SITE = {
  name: 'Rob Saric',
  title: 'Rob Saric · Founder and builder',
  description:
    'Rob Saric is a founder in Ottawa building Caretrics and exploring how software and AI can help clinics and the people running them.',
  url: 'https://robsaric.com',
  locale: 'en',
  author: {
    name: 'Rob Saric',
    jobTitle: 'Founder, Caretrics',
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
