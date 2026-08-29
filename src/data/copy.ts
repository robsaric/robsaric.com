export const COPY = {
  /**
   * Rob adopted the cleaned review opening 2026-08-29, superseding his
   * 2026-08-27 verbatim hero after two independent reviews flagged the same
   * boundary breach ("verifies the revenue is recovered" vs "identified is
   * not collected"). Cleaned means: no em dash, the locked credential back
   * in paragraph 1, "Jane.app" once (the eyebrow), Jane after, sentence-case
   * CTAs, and a destination the CTA's promise can honor. This replacement
   * closed every tension the 08-27 hero carried; the tagline returns on the
   * same ruling.
   */
  hero: {
    eyebrowDesktop: 'Founder of Caretrics · Revenue recovery operations for clinics on Jane.app',
    eyebrowMobile: 'For clinics on Jane.app',
    heading: 'I kept finding the same revenue gaps in clinic after clinic.',
    bodyIntro:
      "I'm Rob Saric. I spent twenty years building software, then went through twelve months of bookings, visits, and billing for more than fifty clinics, one clinic at a time.",
    bodyOutcome:
      'That work became Caretrics. It helps allied-health and rehab teams identify the work affecting revenue, give it a clear owner, and verify what changed, without replacing Jane or the people making the decisions.',
    primaryCta: 'See how Caretrics works',
    secondaryCta: 'Read my notes',
    /** Mobile renders the secondary path as a text link, not a second button. */
    secondaryCtaMobile: 'Read my notes →',
    tagline: 'Evidence-led. AI-assisted. Human-controlled.',
    portraitAlt: 'Rob Saric',
  },
  now: {
    heading: 'What I am working on now',
  },
  /**
   * Restructured 2026-08-27 at Rob's direction: the old 01 Evidence and 02
   * Caretrics read as a product pitch interrupting a personal site. They are
   * now one arc under "01 · What I found": the realization, the proof (metric,
   * signal, operator quote), then Caretrics as the answer. The Caretrics block
   * keeps its label but loses its own number; everything after renumbers.
   */
  evidence: {
    number: '01',
    label: 'What I found',
    heading: 'I realized why the money keeps slipping.',
    bodyDesktop: 'Not carelessness. The report exists, somebody reads it, and the task it points at belongs to no one in particular. I watched it repeat in places full of people doing real good and quietly eating the cost. Everyone selling to clinics was selling demand, more new patients, more bookings. I became obsessed with the other side: operations, and recovering the money a clinic has already earned. Here is one signal, from detection through to a verified outcome.',
    bodyMobile: 'The report exists, somebody reads it, and the task it points at belongs to no one. Everyone sells demand; I became obsessed with recovering money already earned. Here is one signal, from detection to a verified outcome.',
    signalEyebrow: 'The signal',
    /** Restored 2026-08-24 (V5 resolved); the breakdown lives in /how-i-counted/. */
    metric: '$127,000',
    metricNote:
      'Identified across four gaps in one clinic, over one year. Identified is not collected.',
    metricLink: 'How I counted this →',
    exitLink: 'More of these, in my notes →',
    methodsLink: 'How I count and verify clinic findings →',
  },
  caretrics: {
    /** Empty on purpose: this block continues 01 rather than starting a section. */
    number: '',
    label: 'Caretrics',
    heading: 'So I am building Caretrics.',
    /**
     * Noun alignment 2026-08-29, superseding the 2026-08-27 "Revenue Recovery
     * Diagnostic" naming: caretrics.com never says Diagnostic and already
     * names this exact first read the Recovery Scan (verified against the
     * live site; the scan produces the Recovery Report). One vocabulary
     * across both sites; the five-stage read is the method behind the Scan.
     */
    bodyDesktop: "It starts with the Recovery Scan: a read-only pass over a clinic's own Jane data, across the five stages revenue moves through. It works between Booked and Paid, and it shows where money slips and what to fix first. Select a stage.",
    bodyMobile: "It starts with the Recovery Scan: a read-only pass over a clinic's own Jane data, across the five stages revenue moves through. It shows where money slips and what to fix first.",
    questionEyebrow: "The clinic's question",
    signalsEyebrow: 'Example signals',
    doesHeading: 'What Caretrics does',
    doesBody: "It reads twelve months of a clinic's Jane data, groups missed revenue and follow-up work into an Action Plan, and records who acted and what changed.",
    trustLine: 'Read-only access · Cancel anytime · Revoke anytime',
    doesNotHeading: 'What it does not do',
    doesNotBody: 'It does not send bills, collect money, or decide what a patient clinically needs. It identifies. Your team decides.',
    mobileBody: "It reads twelve months of a clinic's Jane data, groups missed revenue and follow-up work into an Action Plan, and records who acted and what changed. It does not send bills, collect money, or decide what a patient clinically needs.",
    cta: 'See Caretrics',
    /** The 02 Togetheren row was removed 2026-08-24; /about/ still uses this. */
    togetherenLink: 'See selected work →',
  },
  principles: {
    number: '02',
    label: 'Principles',
    heading: 'Principles I use when reviewing clinic operations.',
    itemLink: 'The note behind this one →',
    allLink: 'See all five principles →',
  },
  fieldNotes: {
    number: '03',
    label: 'My notes',
    heading: 'What I am seeing, building, and rethinking.',
    body: 'Kept in public, in order. The wrong turns stay in.',
    desktopLink: 'All notes →',
    mobileLink: 'See all notes →',
  },
  about: {
    number: '04',
    label: 'About',
    /**
     * Rewritten 2026-08-27 at Rob's direction: "Where the standard came from."
     * read as self-regard. This band is now the belief, in his words: tired of
     * people who contribute nothing monetizing the people who do. The creed
     * leads here and signs the /about/ card; the test line stays the quote.
     */
    heading: 'Why I care.',
    bodyDesktop: 'People who do good should do well. I am tired of the opposite: people who contribute little, monetizing the people who carry the world. Clinicians spend themselves helping others live with pain and injury. The clinics around them should thrive for it, not struggle.',
    bodyMobile: 'People who do good should do well. I am tired of the opposite: people who contribute little, monetizing the people who carry the world.',
    /**
     * Third person by design: this feeds the JSON-LD Person.description on
     * /about/ and public/llms.txt, never a rendered page. `extendedHistory` is
     * currently unrendered; /about/ carries its content in aboutPage.intro.
     */
    extendedCredential: 'Rob Saric spent twenty years building software, including years as a systems architect inside large managed health-service organizations. He built Dentallytics, an analytics platform for dental groups, then went through twelve months of bookings, visits, and billing for 50+ allied health clinics, one clinic at a time, and found the same four gaps almost every time.',
    extendedHistory: 'Before Caretrics I spent years as a systems architect inside large managed health-service organizations, and earlier at Trend Micro, Mitel and Pythian.',
    quote: '"If it adds work to care, it has failed."',
    /**
     * Replaced the three stat rows 2026-08-27: after "Why I care." the resume
     * register broke the band's emotion, and both claims already live in the
     * hero prose and the /about/ facts rail. One quiet line remains, in the
     * same grammar as the /about/ signed card.
     */
    attribution: 'Founder of Caretrics · Ottawa',
    photoAlt: 'Rob Saric outdoors',
    signatureAlt: 'Rob Saric',
  },
  /**
   * 07 · /about/ page. Its own composition, not the homepage About band.
   * Copy approved 2026-08-19 (docs/ABOUT-PAGE-BRIEF.md section 3.1). Where the
   * claude.ai/design export rewrote a line, the approved line is kept here and
   * the rewrite is listed in the brief for a ruling. See docs/COPY.md.
   */
  aboutPage: {
    label: 'About',
    heading: 'I spent twenty years building software. Healthcare is where the work became personal.',
    intro: [
      'I grew up in a blue-collar family in Windsor, Ontario. Work meant showing up, helping where help was needed, and not making much noise about it. I carried that with me to Ottawa and into a career building software.',
      'Along the way I moved into executive leadership at Trend Micro, Pythian, and Mitel. Each taught me something about running systems other people depend on.',
    ],
    portraitAlt: 'Rob Saric',
    /**
     * Stat bar, per the turn 9 artboards: the value leads at display size, the
     * term sits under it in mono. `wide` marks a value that is words rather
     * than a figure, so it steps down a size instead of wrapping.
     *
     * The artboard labelled the middle cell "Dissected line-by-line". That is a
     * rewrite of the locked credential and sits a step from the banned "by
     * hand", so the locked components are used instead: the value carries
     * "50+ clinics" and the term carries "Firsthand".
     */
    facts: [
      { value: '20+ years', term: 'Building software' },
      { value: '50+ clinics', term: 'Firsthand' },
      { value: 'Ottawa, Canada', term: 'Based in', wide: true },
    ] as { value: string; term: string; wide?: boolean }[],
    background: {
      label: 'Background',
      headingOne: 'Where healthcare came in.',
      bodyOne: [
        'My father battled illness for ten years. Watching that is what made healthcare personal for me, before it was ever a business.',
        'My first real view into healthcare operations came through Dentallytics, an analytics platform I built for a dental group.',
        'Later, as a digital advisor through the Canadian Digital Adoption Program, I worked directly with clinic owners on the gap between software, operations, and care. I also have family members who run clinics, and I have tried more than once to build clinical software companies.',
        'It is difficult work. The workflows are complicated and trust is earned slowly.',
        'I went through twelve months of bookings, visits, and billing for more than fifty clinics, one clinic at a time, and kept finding the same four gaps.',
      ],
      headingTwo: 'What the failures changed.',
      bodyTwo: [
        'I built one startup around helping orthopedic surgeons deliver care protocols. Athlete Builder had a product I believed in and the wrong economic model.',
        'Those failures cost time and money. They also changed how I build. Stay close to the people doing the work, and test the business before the product.',
      ],
    },
    caretrics: {
      label: 'Caretrics',
      heading: 'Why Caretrics.',
      body: [
        'Most clinic owners do not know how the business is actually doing this month, because what matters is split between Jane, payroll, and a spreadsheet nobody has time to open. Finding a real margin should not cost a Sunday afternoon and an Excel template.',
        'Allied-health and rehab clinicians help people live better with pain, injury, and chronic conditions. There are not enough of them, and the clinics around them have to stay open.',
        'That is what I am building with Caretrics: a way for clinics to see the revenue and follow-up work that gets missed, give it an owner, and keep it moving without adding administration.',
      ],
    },
    outside: {
      label: 'Outside',
      heading: 'Outside the work.',
      /**
       * Rob's approved copy, restored 2026-08-19 in his own three-paragraph
       * shape. An earlier pass compressed these into one and swapped the closer
       * for a line lifted from the homepage About band. Both were taste calls
       * on my part, and taste does not outrank the author's voice.
       */
      body: [
        'I will probably always be an entrepreneur. I like athletics, travel, AI experiments, and small projects that teach me something.',
        'I am a dad to two kids and have mentored with Big Brothers Big Sisters for over a decade. Family and community keep the rest in proportion.',
        'At the centre of all of it, I try to work hard, treat people well, and build things that earn their place.',
      ],
      /**
       * Rob's pick 2026-08-25 from the About refinements canvas: the creed
       * signs /about/, the test line stays on the homepage About band
       * (COPY.about.quote). Division of labor, each said once.
       */
      quote: 'People who do good should do well.',
      /**
       * Photo strip above the standard card, from the same canvas. Captions
       * are Rob's to write; the strip is dev-only (SHOW_OUTSIDE_PHOTOS) until
       * they are real. Keys map to imports in about.astro.
       */
      photos: [
        { key: 'event', alt: 'Rob Saric at the Jane Summit', caption: '[Caption for Rob to write]' },
        { key: 'family', alt: 'Rob Saric outdoors', caption: '[Caption for Rob to write]' },
      ],
      signatureAlt: 'Rob Saric',
      attribution: 'Rob Saric, founder of Caretrics',
      /**
       * Softened from "Write to me and tell me where I am wrong →" 2026-08-25:
       * the challenge line stays where it is earned, on the homepage band
       * heading and the /how-i-counted/ exit; the About exit is a plain door.
       */
      contactLink: 'Write to me →',
      notesLink: 'Read my notes →',
    },
  },
  writeToMe: {
    number: '05',
    label: 'Write to me',
    heading: 'Tell me where I am wrong.',
    bodyDesktop: {
      beforeLink: 'You run the clinic. You see things I cannot. If a principle does not match what you see at your front desk, or you know where money slips that I have not mentioned, ',
      link: 'write to me',
      afterLink: '. I read and answer everything myself.',
    },
    bodyMobile: {
      beforeLink: 'You run the clinic. You see things I cannot. ',
      link: 'Write to me',
      afterLink: '. I read and answer everything myself.',
    },
    cardHeading: 'Get the notes.',
    cardBodyDesktop: 'Occasional notes on what I saw in a clinic and what I would check in yours. No schedule I cannot keep.',
    cardBodyMobile: 'Occasional notes on what I saw in a clinic and what I would check in yours.',
  },
  subscribed: {
    states: {
      ok: {
        heading: 'You are on the list.',
        body: {
          beforeLink: 'Occasional notes, no schedule I cannot keep. Reply to any of them. I read and answer everything myself.',
          link: '',
          afterLink: '',
        },
      },
      exists: {
        heading: 'You were already on the list.',
        body: {
          beforeLink: 'Nothing to do. The next note will reach you.',
          link: '',
          afterLink: '',
        },
      },
      invalid: {
        heading: 'That does not look like an email address.',
        body: {
          beforeLink: 'Go back and try again, or ',
          link: 'email me',
          afterLink: ' and I will add you myself.',
        },
      },
      error: {
        heading: 'That did not go through.',
        body: {
          beforeLink: 'Something failed on my side, not yours. ',
          link: 'Email me',
          afterLink: ' and I will add you myself.',
        },
      },
    },
    backLink: 'Back to my notes →',
  },
  footer: {
    line: 'I build things to help people live better lives.',
    byline: 'Rob Saric · Founder of Caretrics · Ottawa.',
    archive: {
      before: 'Earlier writing on systems and flow, 2009 to 2019, is in',
      after: '.',
    },
  },
  pages: {
    fieldNotes: {
      /** The URL stays /field-notes/ and the card type stays "Field note"; only the surfaces rename. */
      title: 'My notes',
      description: 'Notes from Rob Saric on clinic revenue, ownership, and building Caretrics. Kept in public, in order.',
    },
    principles: {
      title: 'Five principles for reviewing clinic operations',
      intro: 'Written down so a clinic owner can hold me to them. If one does not match what you see at your front desk, write to me.',
      description: 'Five principles Rob Saric uses when reviewing clinic operations, from recover before you acquire to billing problems usually start upstream.',
    },
    about: {
      title: 'About',
      description: 'Rob Saric, founder of Caretrics in Ottawa. Twenty years building software, 50+ clinics firsthand, and one standard: if it adds work to care, it has failed.',
    },
    archive: {
      title: 'Earlier writing, 2009 to 2019',
      intro: 'Thirty-eight posts from the first blog, kept as they were written. Systems, flow, leadership, and a few detours.',
      description: "Rob Saric's earlier writing on systems, flow, and leadership, 2009 to 2019, kept as it was written.",
    },
    archivePost: {
      eyebrow: (year: number) => `From the archive · ${year}`,
      notice: (year: number) => `Written in ${year}. Kept as it was.`,
    },
    howICounted: {
      title: 'How I count',
      heading: 'How I count and verify clinic findings.',
      description:
        'How Rob Saric counts and verifies clinic findings: what Caretrics reads, what is never inferred, and why identified is not collected.',
      /**
       * Context paragraph added 2026-08-27 (Rob: the page assumed the reader
       * arrived from the homepage). One orienting line for the stranger, then
       * the standard.
       */
      context:
        "I find revenue that clinics are missing, by reading their own Jane.app data. Numbers like that are easy to claim and hard to check, so this page shows the counting.",
      intro:
        'Every public number I use is held to the standard on this page. If a number cannot meet it, it comes down until it can. That has already happened once.',
      noteLink: 'The note where I took my own number down →',
      noteHref: '/field-notes/2026-08-19-i-took-my-own-number-down/',
      /** The five-step strip reuses the evidence stepper's labels; this names it. */
      pipelineEyebrow: "One signal's journey",
      /**
       * The $127,000 broken into its four gaps, for the bar breakdown in the
       * last section. Amounts are the V5 figures Rob confirmed 2026-08-24,
       * matching what caretrics.com publishes; `value` drives the bar width.
       */
      gaps: [
        { name: 'Unbilled claims', amount: '$52,000', value: 52000 },
        { name: 'No-shows', amount: '$37,000', value: 37000 },
        { name: 'Missed re-bookings', amount: '$24,000', value: 24000 },
        { name: 'Missing re-evaluations', amount: '$14,000', value: 14000 },
      ],
      gapsNote: 'One clinic, 25 providers, June 2025 through May 2026. Identified is not collected.',
      sections: [
        {
          heading: 'What gets read.',
          body: "Caretrics reads twelve months of a clinic's Jane.app data with read-only access and works between Booked and Paid. Signals come from the clinic's own calendar, visit, and billing records, never from clinical judgement. Access can be revoked anytime.",
        },
        {
          heading: 'Read, not inferred.',
          body: 'Each item links back to the visit it came from, the date it was submitted, and the last status recorded. Nothing is inferred. Where a field was missing, the item says so instead of guessing.',
        },
        {
          heading: 'A finding needs an owner.',
          body: "The clinic assigns each finding to a person. Caretrics does not decide who. It records the name and the date, so the work stops being nobody's in particular.",
        },
        {
          heading: 'Identified is not collected.',
          body: 'A scan identifies money that may be slipping. Nothing counts as recovered until it lands. The proof is what changed afterward: the claim that went out, the patient who rebooked, the authorization renewed before the visit.',
        },
        {
          heading: 'How an outcome closes.',
          body: 'An item only closes when its status changes in Jane. Identified and collected are reported separately, and the record shows plainly which of the two happened.',
        },
        {
          heading: 'Where AI assists, and where a person decides.',
          body: 'Anything automated says what it read, what it skipped, and what it is unsure about. If it cannot, it does not get to make the call. People assign the work and make the decisions, and each action is logged against the item, never against the person who made it.',
        },
        {
          heading: 'Public examples.',
          body: 'Patient examples use a first name and last initial, never real data. Signals shown in public are anonymized, and every public number carries what it counts and where it came from. When a number is missing its breakdown, it comes down.',
        },
        {
          heading: 'The $127,000.',
          body: 'The number on the homepage: one clinic, 25 providers, the twelve months of June 2025 through May 2026. Four gaps: unbilled claims, $52,000. No-shows, $37,000. Missed re-bookings, $24,000. Missing re-evaluations, $14,000. Identified across those four, and identified is not collected: it is what the records showed, not what the clinic banked.',
        },
      ],
      contactLink: 'Write to me and tell me where I am wrong →',
    },
    contact: {
      title: 'Write to me',
      description: 'Write to Rob Saric about clinic operations, a note that landed or missed, or a question he has not answered. He reads and answers everything himself.',
      /**
       * Rob's pick 2026-08-25 ("Answer key"): the door is wide, the humor is
       * dry, and the "tell me where money slips" ask is gone because nobody
       * writes in to report that. The challenge framing lives on the homepage
       * band and /how-i-counted/, where it follows the evidence.
       */
      body: 'You run the clinic. I only write about them. That means you hold the answer key, and I would rather hear a correction from you than keep being wrong in public. Questions, arguments, and notes that missed all land in the same inbox, which is just me. I read and answer everything, and if I do not know, I will say so.',
    },
    notFound: {
      title: 'Nothing here.',
      body: 'The page moved or never existed. Try my notes or the archive.',
    },
  },
} as const;

/**
 * Same rule as SHOW_DRAFTS in now.ts: the Outside photo strip renders in dev,
 * never in production, until Rob replaces the placeholder captions.
 */
export const SHOW_OUTSIDE_PHOTOS = import.meta.env.DEV;
