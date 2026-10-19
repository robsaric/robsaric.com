export const BELIEFS_PAGE = {
  title: 'What I believe',
  description: 'Rob Saric’s personal principles: ownership, listening to the people doing the work, useful AI, honest evidence and room for life.',
  intro: 'These are the things I come back to when I’m deciding what to build, how to work with people, and when to leave the laptop closed.',
  closing: 'Holding a belief is easier than living up to it.',
  closingBody: 'I don’t get all of this right. Writing it down gives me something to answer to. If my work falls short of it, I’d rather hear about it.',
  contact: 'Tell me what you think',
  building: 'See what I’m building',
} as const;

export interface Principle {
  line: string;
  body: string;
  choice: string;
  href: string;
  link: string;
}

export const PRINCIPLES: Principle[] = [
  {
    line: 'More people should get to own what they build.',
    body: 'A business can give someone more say over their work and a way to support the people they care about. I want that possibility to be open to more people, including those who cannot hire a big team.',
    choice: 'That means building tools a small business can afford, understand and leave if they stop being useful. A customer staying because they are trapped is not success.',
    href: '/building/',
    link: 'The ambition behind my work',
  },
  {
    line: 'The people doing the work get a say.',
    body: 'A workaround is worth paying attention to. The spreadsheet beside the expensive software may tell you more about what a team needs than the software’s feature list.',
    choice: 'I want to understand why it exists before I try to replace it. Sometimes the useful change is a clearer handoff or fewer steps. Sometimes there is no reason to build anything.',
    href: '/field-notes/2026-10-19-are-dashboards-dead/',
    link: 'What happens after the dashboard',
  },
  {
    line: 'Using AI shouldn’t mean giving up control.',
    body: 'I use AI to build. I also want people to know what it used, check an answer, correct it and decide whether it gets to act.',
    choice: 'I would rather ask for a decision at the right moment than quietly make one on someone’s behalf. Speed is useful when people can trust the work that follows.',
    href: '/field-notes/2026-10-18-small-teams-deserve-their-time-back/',
    link: 'The responsibility that comes with building',
  },
  {
    line: 'Be willing to change your mind.',
    body: 'I can care deeply about an idea and still be wrong about it. A working demo is encouraging. A customer finding it useful is different evidence. A business that can keep serving them is another test.',
    choice: 'I want to keep those distinctions clear, especially when I’m excited. The writing in my archive stays as it was. I don’t need every past opinion to look like something I would say today.',
    href: '/archive/',
    link: 'Earlier writing, kept as written',
  },
  {
    line: 'A good business should leave room for a life.',
    body: 'I want to build things that matter. I also want ordinary time with the people I love, things I do badly for fun, and afternoons that don’t become content.',
    choice: 'If a tool gives us an hour back, filling it with another hour of work is only one option. I want to make products that are useful enough to close when the job is done.',
    href: '/field-notes/2026-10-18-building-with-ai-and-life-beyond-the-feed/',
    link: 'Why I want my analog life back',
  },
];
