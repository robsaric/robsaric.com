/**
 * Now strip. Three items max. Real entries ship without `draft`; the remaining
 * design placeholders (V9) stay `draft: true` until they are real. Drafts are
 * hidden in production builds and the strip renders nothing when the visible
 * list is empty.
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
    kicker: 'Writing',
    title: 'Unbooked at the desk, seventy percent never come back',
    blurb: 'Two years of first visits at one clinic, and the one thing at the front desk that predicted whether a new patient came back.',
    href: '/field-notes/2026-08-18-unbooked-at-the-desk/',
  },
  {
    kicker: 'Building',
    title: 'The Recovery Scan',
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
];

/** Shared draft rule: drafts show in dev, never in production builds. */
export const SHOW_DRAFTS = import.meta.env.DEV;
