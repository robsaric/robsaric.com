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
    title: 'Your dashboard still leaves you with the job.',
    blurb: 'Why a chart is only the start of helping a small team get the work done.',
    href: '/field-notes/2026-10-19-are-dashboards-dead/',
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
