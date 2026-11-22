/**
 * The Toolbox collection: one entry per guide, and the illustrative output shown
 * on its share card. Plain .mjs, like og-card.mjs, because
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
    { kind: 'interview', slug: 'interview-draft-edit', job: 'Talk through a rough idea and turn your own words into a draft.' },
    { kind: 'dashboard', slug: 'dashboard-test', job: 'Take a weekly report and see whether it helps anyone decide what to do next.' },
    { kind: 'mapping', slug: 'value-stream-mapping', job: 'Follow one job from start to finish to find where it gets held up.' },
    { kind: 'crm', slug: 'crm-by-conversation', job: 'Turn meeting notes into updates you can review before saving them in Attio.' },
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
