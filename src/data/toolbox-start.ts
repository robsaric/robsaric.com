export const QUICK_START = {
  heading: 'Try it now.',
  intro: 'Copy into ChatGPT, Claude or Codex to begin. You can add context below first, or answer the questions in your chat.',
  kitIntro: 'Copy the prompt for a quick guided conversation. For the full review with editable templates, download the review kit and attach START-HERE.md in your chat.',
  connectedIntro: 'Connect Attio to Claude or ChatGPT first, then copy this into a chat there. It reads your workspace and shows you each change before it writes one. You can add context below first, or answer the questions in your chat.',
  context: 'Your starting context (optional)',
  privacy: 'These fields are not saved or sent from this page. Leave out personal and confidential records. Review what you share with your AI service.',
  copy: 'Copy prompt + context',
  copied: 'Copied. Paste into your chat and attach any redacted reference files there.',
  fallback: 'Clipboard unavailable. Select and copy the prepared text below.',
  instructions: 'Read the instructions being copied',
  prepared: 'Prepared prompt and context',
  noScript: 'Without JavaScript, download the chat prompt and add your context in your chat.',
  promptFile: 'Download chat prompt',
  reuse: 'Use it again as a skill.',
  skillZip: 'Download skill ZIP',
  kitZip: 'Download review kit',
  setup: 'Installation & files',
  source: 'Read SKILL.md',
  github: 'View on GitHub',
  more: 'See the method and examples',
  outputs: 'What you bring, get and decide',
  archive: 'Includes SKILL.md and its supporting files for Claude, Claude Code or Codex. No executable scripts or account connections.',
  kit: 'Includes a chat starter, editable worksheets and the Claude / Codex skill ZIP. Keep your client notes separate.',
  connectedArchive: 'Includes SKILL.md and its supporting files for Claude, Claude Code or Codex. No scripts, connectors or keys are included. It works through the Attio connection you set up.',
} as const;

export const START_CONTEXT = {
  dashboard: {
    marker: 'My starting context:',
    result: 'Get a provisional verdict, the main gap, one recommendation and a way to test it.',
    fields: [
      { label: 'Who uses this and when', key: 'Who uses this and when', hint: 'For example: the owner, during the monthly review.' },
      { label: 'Their question or decision', key: 'The question or decision they bring', hint: 'What do they need to understand or decide?' },
      { label: 'The dashboard or report', key: 'Screenshot, description or proposed design', hint: 'Describe it here, or attach a redacted screenshot in your chat.' },
      { label: 'What happens next, if known', key: 'What happens after they look at it (if known)', hint: 'A follow-up, another review, no change, or unknown.' },
    ],
  },
  interview: {
    marker: 'My starting idea, draft or transcript:',
    result: 'Work through your idea with questions, then approve an outline before AI drafts. You make the final edit.',
    fields: [
      { label: 'Your idea, rough draft or transcript', key: '', hint: 'Start with your own words. You can also dictate your idea in your chat.' },
    ],
  },
  mapping: {
    marker: 'My context:',
    result: 'Map how the work happens today, choose one pilot and keep the longer-term ideal separate.',
    fields: [
      { label: 'Your role', key: 'I am facilitating with a client / reviewing my team', hint: 'Are you facilitating with a client or reviewing your team?' },
      { label: 'Who receives the value', key: 'Who we serve and what they need', hint: 'Who is this service for, and what do they need?' },
      { label: 'Where the work starts and ends', key: 'What starts the work and what counts as finished', hint: 'A request through to a finished result, for example.' },
      { label: 'Notes or constraints', key: 'Notes, constraints or redacted examples', hint: 'Bring what you know. Missing information can stay unknown.' },
    ],
  },
  crm: {
    marker: 'My starting context:',
    result: 'Plan your Attio workspace in an interview, approve the structure before it is built, then keep it current from your notes.',
    fields: [
      { label: 'What you sell and who buys it', key: 'What I sell and who buys it', hint: 'One or two sentences is enough.' },
      { label: 'The motion to set up first', key: 'The motion to set up first (new customers or existing ones)', hint: 'Winning new customers, or looking after the ones you have.' },
      { label: 'How you reach people', key: 'How I reach people and how often', hint: 'Email, phone, post or LinkedIn, and the days between touches.' },
      { label: 'Who else works in the workspace', key: 'Who else works in this workspace', hint: 'Names or roles, or just you.' },
    ],
  },
} as const;
