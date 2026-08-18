/** 04 · Field note tags. "All" is the implicit first pill; not a tag. */
export const NOTE_TAGS = [
  'Clinic revenue',
  'Billing and insurance',
  'Patient flow',
  'AI and trust',
  'Building Caretrics',
  'Founder notes',
] as const;

export type NoteTag = (typeof NOTE_TAGS)[number];

export const NOTE_TYPES = ['Field note', 'Shipped', 'Changed my mind'] as const;
export type NoteType = (typeof NOTE_TYPES)[number];

export const ALL_FILTER_LABEL = 'All';
