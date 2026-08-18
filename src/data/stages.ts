/** 02 · Caretrics five-stage model. Index is the stage id used by notes (0..4). */
export interface Stage {
  name: string;
  question: string;
  signals: string;
  note: string;
  /** Whether Caretrics works in this stage (drives the filled/hollow dot). */
  owned: boolean;
}

export const STAGES: Stage[] = [
  {
    name: 'Found',
    question: 'Are the right patients finding you and booking a first visit?',
    signals: 'Referral sources · first-visit bookings · enquiries that never became appointments',
    note: 'Caretrics does not measure this stage. A gap here often gets blamed on a later one.',
    owned: false,
  },
  {
    name: 'Booked',
    question: 'Does the schedule hold once it is set?',
    signals: 'No-shows · late cancellations · scheduling gaps nobody fills',
    note: 'Read from the clinic’s own calendar data.',
    owned: true,
  },
  {
    name: 'Treated',
    question: 'Are patients completing the care they started?',
    signals: 'Plan-of-care completion · drop-offs · visits that happened and were never invoiced',
    note: 'Read from visit and billing records, never from clinical judgement.',
    owned: true,
  },
  {
    name: 'Retained',
    question: 'Does the plan of care finish, or fade?',
    signals: 'Missed re-bookings · re-evaluations never scheduled · authorizations that expired with visits left',
    note: 'The stage where the most money quietly leaves.',
    owned: true,
  },
  {
    name: 'Paid',
    question: 'Does the completed work turn into money?',
    signals: 'Unbilled visits · aging receivables · claims that never went out',
    note: 'Identified only. Caretrics does not bill or collect.',
    owned: true,
  },
];

/** Stage open by default on the homepage (desktop tab and mobile accordion). */
export const DEFAULT_STAGE_INDEX = 4;
