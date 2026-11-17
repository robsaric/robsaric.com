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
  crmRows: [
    { input: 'A connected Attio workspace and how you sell', output: 'A proposed set of fields, lists and views in one table.', decision: 'What gets built, and what is left out.' },
    { input: 'Companies or people to load', output: 'A column mapping and the first five rows, then counts of what was created, matched and skipped.', decision: 'Whether the mapping is right before the rest is loaded.' },
    { input: 'Rough notes after a call', output: 'A proposed note, field changes and one follow-up task.', decision: 'Whether each change is saved, edited or dropped.' },
  ],
} as const;

/** Lives in an .mjs file so the share-card generator can read it too. */
export { COLLECTION } from './toolbox-collection.mjs';
