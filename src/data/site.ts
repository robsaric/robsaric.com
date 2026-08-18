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
  /** TODO(V12): set before launch. Empty string hides the link. */
  email: '',
  links: {
    /** TODO(V12): confirm handles. Empty string hides the link. */
    linkedin: '',
    x: '',
    github: '',
    /** Public repo for "View source". Empty string hides the link. */
    source: '',
  },
} as const;

export type SiteLinkKey = keyof typeof SITE.links;
