export const UI = {
  meta: {
    titleSeparator: ' · ',
    ogImageAlt: 'Rob Saric, founder of Caretrics',
    /** Alt for a note's generated share card; type is the note's own. */
    noteOgImageAlt: (type: string, title: string) => `${type}: ${title}`,
  },
  section: {
    separator: ' · ',
  },
  skipLink: 'Skip to content',
  nav: {
    primaryLabel: 'Primary navigation',
    wordmarkLabel: 'Home',
    /** The mark is decorative: the wordmark beside it already names the site. */
    markAlt: '',
    fieldNotes: 'Field notes',
    about: 'About',
    /** Replaced Principles in the nav 2026-08-24; Principles moved to the footer. */
    writeToMe: 'Write to me',
    caretrics: 'Caretrics',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  evidence: {
    nextStep: 'Next step',
    startAgain: 'Start again',
    stepCounter: (step: number, total: number) => `Step ${step} of ${total}`,
  },
  operatorProof: {
    regionLabel: 'From a clinic owner',
  },
  fieldNotes: {
    allFilter: 'All',
    filtersLabel: 'Filter field notes by tag',
    empty: 'Nothing filed under this one yet.',
  },
  newsletter: {
    emailLabel: 'Email address',
    emailPlaceholder: 'you@clinic.com',
    subscribe: 'Subscribe',
    subscribing: 'Subscribing…',
    invalidEmail: 'That does not look like an email address.',
    fallback: 'Email me and I will add you.',
  },
  api: {
    methodNotAllowed: 'Method not allowed.',
  },
  article: {
    backToFieldNotes: 'Back to field notes',
    backToArchive: 'Back to archive',
    /** Field-note byline; the name links to /about/. Archive posts carry none. */
    bylineBefore: 'By ',
    bylineAfter: ' · Founder of Caretrics',
    updated: (date: string) => `Updated ${date}`,
  },
  archive: {
    empty: 'Nothing imported yet.',
  },
  pages: {
    archive: 'Archive',
  },
  footer: {
    navigationLabel: 'Footer navigation',
    contact: 'Write to me',
    /** Joined the row 2026-08-24 when Principles left the nav. */
    principles: 'Principles',
    linkedin: 'LinkedIn',
    x: 'X',
    github: 'GitHub',
    source: 'View source ↗',
    caretrics: 'Caretrics ↗',
    togetherenDesktop: 'Togetheren, selected work',
    togetherenMobile: 'Togetheren',
    archive: 'the archive',
  },
} as const;
