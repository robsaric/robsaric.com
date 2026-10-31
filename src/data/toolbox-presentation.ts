export const GUIDE_PRESENTATION = {
  heading: 'What you bring. What you get. What stays with you.',
  columns: ['You bring', 'The skill helps draft', 'You decide'],
  overviewLink: 'What you get',
  exampleLink: 'See an example',
  methodLink: 'How it works',
  promptLink: 'Try it in a chat',
  downloadsLink: 'Kit & setup',
  methodDetails: 'See the five writing steps',
  dashboardExample: 'See what the review could produce.',
  interviewExample: 'See what the interview changes.',
  interviewExampleIntro: 'A vague complaint becomes a specific point the writer can act on.',
  interviewRows: [
    { input: 'An idea, rough draft or spoken explanation', output: 'Questions about the experience, belief or detail that is missing.', decision: 'Your answers and what you actually want to say.' },
    { input: 'Your answers and optional writing samples', output: 'A draft organized around your point, with suggested additions marked.', decision: 'Which claims, words and suggestions you stand behind.' },
    { input: 'Your review of that draft', output: 'Revisions based on your feedback.', decision: 'The final edit and whether it is ready to publish.' },
  ],
  dashboardRows: [
    { input: 'A redacted screenshot or description and the reader’s question', output: 'Questions about the decision, data and work behind the screen.', decision: 'Whether the review reflects how the dashboard is used.' },
    { input: 'One recent decision and what happened next', output: 'A provisional verdict and the main gap, with missing evidence visible.', decision: 'Keep it, improve it, use a simpler alternative or investigate further.' },
    { input: 'The constraints and evidence you can check', output: 'One practical improvement and a way to check whether it helps.', decision: 'What to change and whether the result helped the reader.' },
  ],
} as const;

export const COLLECTION = {
  open: 'Open guide',
  github: 'GitHub',
  repo: 'https://github.com/robsaric/robsaric.com/tree/main/skills/',
  bring: 'Bring',
  sample: 'Illustrative output',
  entries: [
    { kind: 'interview', slug: 'interview-draft-edit', bring: 'An idea, draft or spoken explanation.' },
    { kind: 'dashboard', slug: 'dashboard-test', bring: 'A screenshot and one decision to review.' },
    { kind: 'mapping', slug: 'value-stream-mapping', bring: 'Notes about how a service works.' },
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
} as const;
