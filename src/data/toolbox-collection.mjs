/**
 * The Toolbox collection: one entry per guide, and the illustrative output shown
 * on its index card and on its share card. Plain .mjs, like og-card.mjs, because
 * scripts/generate-og.mjs runs in Node and cannot import TypeScript.
 * src/data/toolbox-presentation.ts re-exports it for the pages.
 */
export const COLLECTION = /** @type {const} */ ({
  open: 'Open guide',
  github: 'GitHub',
  repo: 'https://github.com/robsaric/robsaric.com/tree/main/skills/',
  bring: 'Bring',
  sample: 'Illustrative output',
  entries: [
    { kind: 'interview', slug: 'interview-draft-edit', bring: 'An idea, draft or spoken explanation.' },
    { kind: 'dashboard', slug: 'dashboard-test', bring: 'A screenshot and one decision to review.' },
    { kind: 'mapping', slug: 'value-stream-mapping', bring: 'Notes about how a service works.' },
    { kind: 'crm', slug: 'crm-by-conversation', bring: 'An Attio workspace connected to your assistant.' },
  ],
  interview: {
    label: 'A draft you can question',
    before: 'Our weekly updates could be shorter.',
    annotation: 'What was still unclear?',
    after: 'We agreed to revise the proposal, but nobody was named to send it.',
  },
  dashboard: {
    label: 'One finding. One next step.',
    verdictLabel: 'Verdict',
    verdict: 'Keep the dashboard.',
    changeLabel: 'Change',
    change: 'Put the pattern above the chart.',
    checkLabel: 'Check',
    check: 'Can the reader explain what changed?',
  },
  mapping: {
    label: 'Where does the work wait?',
    steps: ['Request', 'Approval', 'Repair'],
    note: 'Approval wait: not yet measured.',
  },
  crm: {
    label: 'Nothing is saved until you say yes.',
    steps: ['Notes', 'Proposal', 'Yes'],
    note: 'Then it reads the record back.',
  },
});
