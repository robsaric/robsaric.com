export const UI = {
  meta: {
    titleSeparator: ' · ',
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
  footer: {
    navigationLabel: 'Footer navigation',
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
