/**
 * Now strip. Three items max. All entries are DRAFT (design placeholders, V9)
 * until real ones exist; drafts are hidden in production builds and the strip
 * renders nothing when the visible list is empty.
 */
export interface NowItem {
  kicker: string;
  title: string;
  /** Desktop only. */
  blurb: string;
  href: string;
  draft?: boolean;
}

export const NOW_ITEMS: NowItem[] = [
  {
    kicker: 'Building',
    title: 'The Caretrics revenue diagnostic',
    blurb: 'What a first read of a clinic’s Jane account looks for, and what it deliberately leaves alone.',
    href: '/field-notes/',
    draft: true,
  },
  {
    kicker: 'From the field',
    title: 'What clinic operators keep asking about',
    blurb: 'The three questions that come up in almost every conversation, and my current answers.',
    href: '/field-notes/',
    draft: true,
  },
  {
    kicker: 'Writing',
    title: 'Ownership is the difference between a report and a result',
    blurb: 'The latest field note.',
    href: '/field-notes/',
    draft: true,
  },
];

/** Shared draft rule: drafts show in dev, never in production builds. */
export const SHOW_DRAFTS = import.meta.env.DEV;
