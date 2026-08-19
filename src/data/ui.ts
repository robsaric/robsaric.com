export const UI = {
  meta: {
    titleSeparator: ' · ',
    ogImageAlt: 'Rob Saric, founder of Caretrics',
  },
  section: {
    separator: ' · ',
  },
  skipLink: 'Skip to content',
  nav: {
    primaryLabel: 'Primary navigation',
    wordmarkLabel: 'Home',
    fieldNotes: 'Field notes',
    principles: 'Principles',
    about: 'About',
    caretrics: 'Caretrics',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  evidence: {
    nextStep: 'Next step',
    startAgain: 'Start again',
    stepCounter: (step: number, total: number) => `Step ${step} of ${total}`,
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
