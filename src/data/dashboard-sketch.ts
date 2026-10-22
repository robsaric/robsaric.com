export const ACTION_REVIEW = {
  heading: 'Know which work is actually finished.',
  statusLabel: 'Status',
  eventLabel: 'What happened',
  nextLabel: 'What needs you',
  rows: [
    {
      status: 'Recorded', event: 'Customer declined.',
      next: 'Nothing. The quote is closed, with the message attached.',
    },
    {
      status: 'Your decision', event: 'Customer asked for a lower price.',
      next: 'Check the margin. Approve or edit the draft reply.',
    },
    {
      status: 'Partly completed', event: 'Reply sent. Quote update failed.',
      next: 'Retry the record update without resending the email.',
    },
  ],
  caption: 'Proposed view for this imagined company.',
} as const;

export const DASHBOARD_NEXT_JOB = {
  heading: 'The dashboard’s next job.',
  intro: 'Show what got done. Make it easy to check.',
  reportLabel: 'Points out a problem',
  report: 'Quote needs follow-up.',
  handoff: 'You take it from here.',
  outcomeLabel: 'Shows the outcome',
  outcome: 'Customer declined. Quote closed.',
  evidence: 'Reply attached. Change recorded.',
  closing: 'When the work isn’t finished, show what still needs you.',
  caption: 'An illustrative workflow.',
  download: 'Download the illustration',
} as const;
