/** 01 · Evidence stepper. Source: docs/COPY.md. Order matters. */
export interface EvidenceStep {
  label: string;
  kicker: string;
  body: string;
  source: string;
}

export const EVIDENCE_SIGNAL = '17 insurance items have had no activity in 21 days.';

/**
 * The $127,000 metric was cut on 2026-08-19 (breakdown not written down) and
 * restored on 2026-08-24 after Rob confirmed the four gaps and amounts. The
 * metric strings live in COPY.evidence; the breakdown is written down in
 * /how-i-counted/ section 8. See docs/COPY.md V5 (resolved).
 */

export const EVIDENCE_STEPS: EvidenceStep[] = [
  {
    label: 'Detected',
    kicker: 'Signal detected',
    body: 'Seventeen insurance items on one clinic’s account show no status change in 21 days. Caretrics flags the group, not the individual claim, because the pattern is the finding.',
    source: 'read from Jane · read-only · grouped by days since last activity',
  },
  {
    label: 'Evidence',
    kicker: 'Evidence reviewed',
    body: 'Each item links back to the visit it came from, the date it was submitted, and the last status recorded. Nothing is inferred. Where a field was missing, the item says so instead of guessing.',
    source: 'per-item record · no derived values · gaps disclosed',
  },
  {
    label: 'Owner',
    kicker: 'Owner assigned',
    body: 'The clinic assigns the group to a person. Caretrics does not decide who. It records the name and the date, so the work stops being nobody’s in particular.',
    source: 'assigned by the clinic · named by role · timestamped',
  },
  {
    label: 'Action',
    kicker: 'Action completed',
    body: 'The owner resubmits, corrects, or writes each item off. The choice is logged against the item, never against the person who made it.',
    source: 'one action per item · reversible · audit trail retained',
  },
  {
    label: 'Verified',
    kicker: 'Outcome verified',
    body: 'An item only closes when its status changes in Jane. Identified is not collected, and the record shows plainly which of the two happened.',
    source: 'confirmed against source data · identified and collected reported separately',
  },
];
