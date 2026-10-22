/** Illustrates the essay's hypothetical renovation-company example, not a product UI. */
export const DASHBOARD_SKETCH = {
  heading: 'The customer said no. The system still says follow up.',
  record: 'Quoting system',
  stale: 'Follow-up still due',
  spreadsheet: 'Your spreadsheet',
  done: 'Customer declined',
  gap: 'Only saved here',
  after: 'Save the outcome where the team works.',
  resolved: 'Quote closed',
  detail: 'Customer declined. No follow-up due.',
  caption: 'One customer, two conflicting records. Without your update, a colleague may call again.',
} as const;

export const ACTION_REVIEW = {
  heading: 'Know which work is actually finished.',
  introduction: 'A proposed daily view for this imagined company.',
  statusLabel: 'Status',
  eventLabel: 'What happened',
  expandLabel: 'See my design notes',
  seriesLabel: 'What I’d change',
  viewLabel: 'What you would see',
  notesLabel: 'Why I’d design it this way',
  nextLabel: 'What needs you',
  rows: [
    {
      status: 'Recorded', event: 'Customer declined.',
      next: 'Nothing. The quote is closed, with the message attached.',
      noteHeading: 'Keep the evidence close.',
      note: 'I’d put the customer’s reply beside the closed quote. You can check the reason without hunting through your inbox.',
    },
    {
      status: 'Your decision', event: 'Customer asked for a lower price.',
      next: 'Check the margin. Approve or edit the draft reply.',
      noteHeading: 'Leave the price with you.',
      note: 'The tool can prepare a reply. You know whether you can afford the discount. Nothing goes out until you decide.',
    },
    {
      status: 'Partly completed', event: 'Reply sent. Quote update failed.',
      next: 'Retry the record update without resending the email.',
      noteHeading: 'Say which part failed.',
      note: '“Try again” is too vague here. I’d offer to save the quote again, with the sent email left alone.',
    },
  ],
  tradeoffHeading: 'The trade-off I’d accept',
  tradeoff: 'This takes more space than a green tick. I’d accept that. You need enough detail to trust the work, and a way to open the full record when something looks wrong.',
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
