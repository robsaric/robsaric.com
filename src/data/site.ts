/**
 * Site-wide configuration. Values marked TODO are unset on purpose:
 * components render nothing for an unset link rather than a dead one.
 * See docs/COPY.md "Verification table" (V12).
 */
export const SITE = {
  name: 'Rob Saric',
  title: 'Rob Saric · Founder of Caretrics',
  description:
    'Rob Saric builds Caretrics with allied-health and rehab clinics that run on Jane.app. Field notes on clinic revenue, ownership, and AI that shows its work.',
  url: 'https://robsaric.com',
  locale: 'en',
  author: {
    name: 'Rob Saric',
    jobTitle: 'Founder, Caretrics',
    location: 'Ottawa',
  },
  caretricsUrl: 'https://caretrics.com',
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
