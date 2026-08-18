/** 03 · Principles. First three are featured on the homepage; all five on /principles/. */
export interface Principle {
  /** Serif line. */
  line: string;
  /** Desktop long form. */
  body: string;
  /** Mobile short form. */
  bodyShort: string;
  /** Slug of the field note that expands on it. Optional until written. */
  noteSlug?: string;
  featured: boolean;
}

export const PRINCIPLES: Principle[] = [
  {
    line: 'Recover before you acquire.',
    body: 'If money is slipping out of the current operation, more patients mostly means more slipping. Handle the missed follow-ups and unbilled visits first, then spend on growth.',
    bodyShort: 'If money is slipping out of the current operation, more patients mostly means more slipping.',
    featured: true,
  },
  {
    line: 'A signal without an owner is just another dashboard.',
    body: 'A finding needs a person and a next step. Otherwise it sits on a screen while the money waits.',
    bodyShort: 'A finding needs a person and a next step. Otherwise it sits on a screen while the money waits.',
    featured: true,
  },
  {
    line: 'AI must show its work.',
    body: 'When money or patients are involved, anything automated should say what it read, what it skipped, and what it is unsure about. If it cannot, it does not get to make the call.',
    bodyShort: 'Anything automated should say what it read, what it skipped, and what it is unsure about.',
    featured: true,
  },
  {
    line: 'Identified is not collected.',
    body: 'A scan identifies money that may be slipping. Nothing counts as recovered until it lands. So the proof is what changed afterward: the claim that went out, the patient who rebooked, the authorization renewed before the visit. I would rather show a small change that happened than a large one on a slide. Every public number I use is held to that line, here and at Caretrics.',
    bodyShort: 'A scan identifies money that may be slipping. Nothing counts as recovered until it lands.',
    featured: false,
  },
  {
    line: 'Billing problems usually start upstream.',
    body: 'By the time it shows in billing, the miss usually happened earlier: at booking, in the plan of care, in a re-evaluation nobody scheduled. Trace it back through Found, Booked, Treated, Retained and Paid, and look for the stage that broke.',
    bodyShort: 'By the time it shows in billing, the miss usually happened earlier: at booking, in the plan of care, in a re-evaluation nobody scheduled.',
    featured: false,
  },
];
