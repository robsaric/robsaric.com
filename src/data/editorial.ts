import { OG_SITE_CARD } from './og-card.mjs';
import { SITE } from './site';

/** Approved personal positioning. Article bodies remain in their content collections. */
export const EDITORIAL = {
  hero: {
    identity: 'Co-founder & CEO of Caretrics · Ottawa',
    heading: OG_SITE_CARD.heading,
    lead: 'At Caretrics, we help clinic teams see which claims are still unpaid and who’s already followed up. Here I write about the decisions behind my projects, including the ones I’d make differently.',
    portraitAlt: 'Rob Saric in a blue blazer',
  },
  writing: {
    title: 'Start here.',
    intro: 'Notes on building things, working with people, and changing my mind. Some from this week’s work. Some I’ve been turning over for years.',
    pageTitle: 'Writing',
    pageDescription: 'Essays by Rob Saric on small teams, useful AI, building companies and making room for life beyond the screen.',
    featuredHref: '/field-notes/2026-10-19-are-dashboards-dead/',
    supportingHref: '/field-notes/2026-10-18-small-teams-deserve-their-time-back/',
    readEssay: 'Read the essay',
    pageHeading: 'Writing',
    pageIntro: 'Essays on building companies, making sense of AI, and life outside work.',
    latest: 'Latest writing',
    earlier: 'Earlier writing',
    earlierIntro: 'A few pieces from the archive. Kept as written, with their original dates. I don’t expect every opinion to age perfectly.',
    all: 'All writing',
    archive: 'Explore the full archive',
  },
  process: {
    heading: 'Start with the people.',
    intro: 'Design thinking means getting close enough to understand the problem. Systems thinking means noticing what happens around it.',
    caption: 'How I try to work. Select a step.',
    staticCaption: 'How I try to work.',
    steps: [
      { label: 'Listen', title: 'Find the friction.', text: 'Watch the work. Ask what gets repeated, what falls between people, and what they’ve already tried.', note: '“Why do we keep explaining this?”' },
      { label: 'Make', title: 'Build something useful.', text: 'Try the smallest thing that helps. A clearer handoff can matter more than another feature.', note: 'One small change. A real task.' },
      { label: 'Learn', title: 'Let reality answer.', text: 'Put it in people’s hands. Notice what helps, admit what doesn’t, and change it.', note: 'Did it actually make the day better?' },
    ],
  },
  work: {
    caretrics: {
      name: 'Caretrics',
      status: 'Co-founder & CEO',
      body: 'For clinic teams. See which claims need a call, who followed up last and what’s still open.',
      link: 'Explore Caretrics',
      href: SITE.caretricsUrl,
    },
    togetheren: {
      name: 'Togetheren',
      status: 'Early access',
      body: 'For people who host a group in person. Pick a time and place, send one invitation and see who’s coming.',
      link: 'Visit Togetheren',
      href: SITE.togetherenUrl,
    },
    skillnav: {
      name: 'SkillNav',
      status: 'In development · Founder-assisted pilot',
      body: 'For consultants. Turn client meeting notes into a follow-up you can review before the next call.',
      link: 'See the SkillNav pilot',
      href: SITE.skillnavUrl,
    },
  },
  building: {
    title: 'What I’m building',
    description: 'Rob Saric’s current projects include Caretrics for clinic teams, Togetheren for in-person groups and the SkillNav pilot for consultants.',
    heading: 'What I’m building.',
    lead: 'Caretrics is for people who run clinics. Togetheren is for people who bring a group together in person. With SkillNav, the work starts with a client meeting.',
    whyLink: 'Why this work',
    caretrics: {
      heading: 'What happens after you spot the problem?',
      problem: 'An unpaid claim on a report is a starting point. Someone still needs to find out what happened, record the conversation and decide when to follow up.',
      approach: 'Caretrics helps clinic teams find that work and keep the records and next steps together. Staff make the calls, record what happened and decide what comes next.',
      thinkingHeading: 'Easier to build doesn’t mean worth building.',
      thinking: [
        'I believe AI will make building software less of an advantage on its own. Understanding the work, earning people’s trust and taking responsibility for the result will matter more. I learned the hard part at Athlete Builder: loving a product doesn’t make its economics work. AI can help you build that mistake faster.',
        'That shapes what I want Caretrics to become. Finding a problem is the beginning. The work is helping someone decide what to do, follow through and learn whether it made a difference. As AI takes on more repetitive tasks, the person still needs to understand what happened and where their judgement is needed.',
      ],
      imageAlt: 'Caretrics demo showing an overdue claim, the last recorded payer conversation and a follow-up date.',
      imageLabel: 'Product example · Demo data',
      imageCaption: 'The next person can see the last conversation and when to follow up. This is a synthetic example, not a recovered payment.',
      detailHeading: 'Keep the next step with the record.',
    },
    whyHeading: 'Why this work matters to me.',
    why: [
      'I grew up in a loving, blue-collar family in Windsor. My dad worked midnights for thirty straight years. He never complained. He made me breakfast before school, showed up to all my practices and believed in me relentlessly.',
      'He’d grown up sharing a home with nineteen other people, without the support he later gave me. My mom lost her dad when she was two, and later lost her mother to kidney failure. Both knew what it meant to go without. They gave the people around them kindness and love without keeping score.',
      'That’s where my view of people comes from. I want it to show in the work I build, the people I surround myself with and how we treat each other when things get difficult. I want to build businesses that do well and make life better for the people who depend on them.',
    ],
    storyLink: 'What I learned from my dad',
    togetheren: {
      heading: 'When’s the next walk?',
      body: 'Say you’re getting a few people together for a Sunday walk. You pick a time and a trailhead, share an invitation and see who can make it. After the walk, you can keep a private note about what worked and set a date for the next one.',
    },
    skillnav: {
      heading: 'What did we agree to on that call?',
      body: 'In the pilot, a consultant brings notes from a client meeting. SkillNav helps draft what was agreed, what’s still open and what to bring up next time. The consultant reviews the draft before anything is shared.',
    },
    closingHeading: 'Building something of your own?',
    closingBody: 'I share the work as it develops: decisions, mistakes, useful discoveries. Follow along, or tell me about a problem your team knows too well.',
    contactLink: 'Tell me what you’re working on',
  },
  personal: {
    heading: 'A little about me.',
    body: 'I’m a founder and dad in Ottawa. I care about the people trying to make a business work, and the lives they’re trying to make room for.',
    bodyTwo: 'Outside the work, I’m interested in parenting, time away from screens, and making things for the pleasure of it.',
    link: 'A little more about me',
  },
  about: {
    title: 'About',
    heading: 'I care about the people doing the work.',
    intro: 'I’m Rob. A founder, a dad, and someone who tends to ask one more question about why a thing works the way it does.',
    backgroundHeading: 'What shaped how I work.',
    background: [
      'I grew up in a blue-collar family in Windsor and now live in Ottawa. My career has included leadership roles at Trend Micro, Pythian and Mitel, years in software and systems architecture, and the messier education of building companies.',
      'Some ideas worked better than others. Athlete Builder found customers in youth sports, but I couldn’t make the economics work. That experience is part of how I think about building now.',
      'Healthcare became personal during my dad’s long illness. Later, building Dentallytics and working through clinic operations helped shape Caretrics. I care about the person trying to make the system work, not just the software.',
    ],
    missionHeading: 'Small teams deserve good tools.',
    mission: [
      'A small business can hold an extraordinary amount of knowledge in a few people’s heads. I’m interested in helping those people put it to work without adding another layer of administration.',
      'I want the tools we build to make people more capable, and leave them in control.',
    ],
    lifeHeading: 'And life deserves more than a screen.',
    life: [
      'I’m a dad of two. I’ve spent more than a decade mentoring through Big Brothers Big Sisters. I like athletics, travel and making things, including the projects that never become a business.',
      'I want children to have room to be bored, play outside, and figure things out together. Their attention should not be treated as inventory.',
      'I’m also a builder who uses AI and social platforms. That doesn’t excuse me from questioning Big Tech, or the way products compete for our attention. It gives me a responsibility to look closely at what I’m helping create.',
    ],
    hikingAlt: 'Rob outdoors with a backpack',
    photos: {
      familyAlt: 'Rob with his family in a park',
      familyCaption: 'Family day at the park.',
      togetherAlt: 'Rob carrying his child outdoors',
      togetherCaption: 'Outside together.',
      hikingCaption: 'Time on the trail.',
    },
    unpluggedLink: 'The conversation at Unplugged Canada',
  },
  connect: {
    heading: 'Let’s keep the conversation going.',
    body: 'Follow along for what I’m building, what I’m questioning, and what I’m learning from other people.',
    follow: 'Follow on LinkedIn',
    email: 'Or write to me',
  },
  newsletter: {
    heading: 'Digital days.',
    headingAccent: 'Analog nights.',
    body: 'What I’m learning about building small companies, making sense of AI, and making time for the people in our lives. Get new essays by email.',
    action: 'Send me the next essay',
    cadence: 'Confirm your email, then hear from me when I have something worth sharing. Unsubscribe whenever you like.',
    sample: 'Read an essay first',
    sampleHref: '/field-notes/2026-10-19-are-dashboards-dead/',
    follow: 'Or follow on LinkedIn',
  },
  article: {
    subscribe: 'Get the next essay',
    heading: 'Read next',
    followHeading: 'More on small teams and useful technology.',
    followBody: 'I share new writing and what I’m learning as I build on LinkedIn.',
    authorDetail: 'Founder, dad, champion of small teams.',
  },
  contact: {
    heading: 'Tell me what you’re working on.',
    body: 'A problem you keep coming back to, a different view on something I wrote, or an idea for working together. I’d like to hear it.',
  },
  footer: {
    line: 'Digital days. Analog nights.',
    archive: 'Earlier writing',
    principles: 'What I believe',
    source: 'Site source',
  },
} as const;

export const EARLIER_WRITING = [
  { id: 'building-a-startup-requires-self-awareness', summary: 'On persistence, personal limits, and getting to know the person building the company: you.' },
  { id: 'treat-contractors-well', summary: 'What client projects taught me about trust and treating contractors as part of the team.' },
  { id: 'great-systems-need-to-create-flow', summary: 'A design question I keep coming back to: how do people find their rhythm in a system?' },
] as const;

// Ordered editorial choices. Later choices are used only when an earlier one
// is unavailable in this build, including when the chosen essay is a draft.
export const NEXT_READS: Record<string, readonly { href: string; reason: string }[]> = {
  '/field-notes/2026-10-18-small-teams-deserve-their-time-back/': [
    { href: '/field-notes/2026-10-19-are-dashboards-dead/', reason: 'Once you decide what needs attention, how do you learn whether the work helped?' },
    { href: '/archive/great-systems-need-to-create-flow/', reason: 'An earlier look at designing around the person using the system.' },
  ],
  '/field-notes/2026-10-18-building-with-ai-and-life-beyond-the-feed/': [
    { href: '/field-notes/2026-10-18-small-teams-deserve-their-time-back/', reason: 'Why useful software gives you somewhere to begin.' },
    { href: '/archive/great-systems-need-to-create-flow/', reason: 'An earlier look at designing for flow, and what makes an experience worth having.' },
  ],
  '/field-notes/2026-10-19-are-dashboards-dead/': [
    { href: '/field-notes/2026-10-18-small-teams-deserve-their-time-back/', reason: 'How an insight helps you reach the next question worth asking.' },
  ],
  '/archive/building-a-startup-requires-self-awareness/': [
    { href: '/field-notes/2026-10-18-small-teams-deserve-their-time-back/', reason: 'What an early Caretrics tool taught me about where people need to start.' },
    { href: '/archive/treat-contractors-well/', reason: 'How the way you work with others shapes what you build.' },
  ],
  '/archive/treat-contractors-well/': [
    { href: '/field-notes/2026-10-18-small-teams-deserve-their-time-back/', reason: 'Meeting people where they are when you build for them.' },
    { href: '/archive/great-systems-need-to-create-flow/', reason: 'Designing systems around the people who use them.' },
  ],
  '/archive/great-systems-need-to-create-flow/': [
    { href: '/field-notes/2026-10-18-building-with-ai-and-life-beyond-the-feed/', reason: 'A question I’m asking now: when should a useful product let us leave?' },
    { href: '/archive/building-a-startup-requires-self-awareness/', reason: 'Looking more closely at our own limits as builders.' },
  ],
  // Added 2026-11-14 for the archive posts that appear most in search, by
  // page-level Search Console impressions, Oct 14 to Nov 10 2026: 1,425, 28
  // and 25 (16, 0 and 0 clicks). None linked to current writing before this.
  // The Alan Turing post (23) has no next read on purpose: no current essay
  // connects honestly to a post about persecution and staying true to yourself.
  '/archive/7-of-the-most-extraordinary-people-you-probably-do-not-know-but-should/': [
    { href: '/field-notes/2026-10-18-building-with-ai-and-life-beyond-the-feed/', reason: 'What should the tools we build give back to the people who use them?' },
  ],
  '/archive/entering-beast-mode/': [
    { href: '/field-notes/2026-10-18-building-with-ai-and-life-beyond-the-feed/', reason: 'When a team finishes sooner, who decides what happens to the time it saves?' },
    { href: '/archive/building-a-startup-requires-self-awareness/', reason: 'Looking more closely at our own limits as builders.' },
  ],
  '/archive/great-coders-are-artists/': [
    { href: '/field-notes/2026-10-18-small-teams-deserve-their-time-back/', reason: 'Designing software around where the person using it is starting.' },
    { href: '/archive/great-systems-need-to-create-flow/', reason: 'Designing systems around the people who use them.' },
  ],
};
