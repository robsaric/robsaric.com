export const COPY = {
  /** Broader personal opening adopted in the v2 brief, 2026-09-18. */
  hero: {
    eyebrowDesktop: 'Founder and builder · Ottawa',
    eyebrowMobile: 'Founder and builder · Ottawa',
    heading: 'I build software that helps good people run better businesses.',
    bodyIntro:
      "I'm Rob Saric, a founder in Ottawa. I'm interested in how AI can take more of the operational burden off people doing valuable work.",
    bodyOutcome:
      'My focus today is clinics: helping teams see what needs attention, follow through, and know whether things improved.',
    primaryCta: 'What I am building',
    secondaryCta: 'Read my notes',
    /** Mobile renders the secondary path as a text link, not a second button. */
    secondaryCtaMobile: 'Read my notes →',
    portraitAlt: 'Rob Saric',
  },
  work: {
    number: '01',
    label: 'Current work',
    heading: 'What I am building.',
    projects: {
      caretrics: {
        name: 'Caretrics',
        body: "I'm building Caretrics to help clinic teams using Jane see where revenue and follow-up work need attention, decide what to work on next, and check what changed.",
        link: 'Explore Caretrics →',
      },
      clinicOperations: {
        name: 'Clinic Operations',
        body: "I'm starting a place for the people running clinics to compare notes on what works and where they get stuck. One clinic or several, there's something to learn from each other.",
      },
    },
  },
  now: {
    heading: 'What I am working on now',
  },
  /** Retained for supporting routes; no longer rendered on the homepage. */
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
    /** Retained with the product walkthrough component. */
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
    number: '02',
    label: 'My notes',
    heading: 'What I am learning and building.',
    body: 'Notes on clinic operations, software, AI, and the decisions that change my mind.',
    desktopLink: 'All notes →',
    mobileLink: 'See all notes →',
  },
  about: {
    number: '03',
    label: 'About',
    /** The personal belief stays; the surrounding copy follows the v2 brief. */
    heading: 'Why I care.',
    bodyDesktop: 'People who do good should do well. My father spent ten years inside a healthcare system that kept making his life harder. Working with clinics later showed me how much effort it takes just to keep care going. I build software to make that work lighter.',
    bodyMobile: 'People who do good should do well. My father spent ten years inside a healthcare system that kept making his life harder. Working with clinics later showed me how much effort it takes just to keep care going. I build software to make that work lighter.',
    link: 'More about me →',
    /**
     * Third person by design: this feeds the JSON-LD Person.description on
     * /about/ and public/llms.txt, never a rendered page. `extendedHistory` is
     * currently unrendered; /about/ carries its content in aboutPage.intro.
     */
    extendedCredential: 'Rob Saric spent twenty years building software, including years as a systems architect inside large managed health-service organizations. He built Dentallytics, an analytics platform for dental service organizations, then went through twelve months of bookings, visits, and billing for 50+ allied health clinics, one clinic at a time, and found the same four gaps almost every time.',
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
      /** Reframed active 2026-08-30; the old "Along the way I moved into" read passive. */
      'I worked my way into executive leadership at Trend Micro, Pythian, and Mitel, and learned what it takes to run systems other people depend on.',
      "Today, I'm building software that helps good people run better businesses. My focus is clinics, and the operational work that gets in the way of looking after people.",
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
      /**
       * Term expanded 2026-08-30: Rob himself read "Firsthand" alone and asked
       * what it meant, which settles V13. "Reviewed" is legal where "audited"
       * is banned; the locked components stay intact.
       */
      { value: '50+ clinics', term: 'Reviewed firsthand' },
      { value: 'Ottawa, Canada', term: 'Based in', wide: true },
    ] as { value: string; term: string; wide?: boolean }[],
    /**
     * Rebuilt 2026-08-30 at Rob's direction: the father paragraph now carries
     * what actually happened (his words: sepsis from a catheter, a stent,
     * repeated mistakes, lost mobility), and the second zone replaces "What
     * the failures changed." with the every-seat arc, so the section earns
     * "well suited to make it better" instead of asserting it.
     */
    background: {
      label: 'Background',
      headingOne: 'Where healthcare came in.',
      bodyOne: [
        'My father was sick for ten years. The system meant to help him kept hurting him instead: sepsis from a catheter, a stent that went wrong, mistake after mistake until he lost his mobility. Watching that is what made healthcare personal for me, before it was ever a business.',
        'Professionally, I kept circling the same system. I spent years as a systems architect inside large managed health-service organizations, then built Dentallytics, an analytics platform for dental service organizations.',
        'As a digital advisor through the Canadian Digital Adoption Program, I worked directly with clinic owners on the gap between software, operations, and care. I have family members who run clinics. I have tried more than once to build clinical software companies.',
        'It is difficult work. The workflows are complicated and trust is earned slowly.',
        'I went through twelve months of bookings, visits, and billing for more than fifty clinics, one clinic at a time, and kept finding the same four gaps.',
      ],
      headingTwo: 'Every side of the system.',
      /**
       * Two ventures, untangled 2026-08-30 on Rob's correction: Athlete
       * Builder was the youth-sports education platform (customers, model
       * that could not sustain them); the orthopedic care-protocols product
       * was a separate build. Earlier copy, back to the original brief, had
       * conflated them.
       */
      bodyTwo: [
        'I have built things that did not survive. Athlete Builder, an educational platform for youth sports, had real customers and an economic model that could not sustain them. Another product helped orthopedic surgeons deliver care protocols; I believed in it, and the market was hard to win and harder to go deep in. Different failures, the same two lessons: stay close to the people doing the work, and test the business before the product.',
        'I have been the architect inside the system, the founder selling into it, part of a family that runs clinics in it, and the son it failed. Most people see healthcare from one seat. I have sat in nearly all of them, and that is the experience Caretrics is built on.',
      ],
    },
    caretrics: {
      label: 'Current work',
      /** This key remains for the existing About page composition. */
      heading: 'What I am building now.',
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
       * The pairing, adopted 2026-08-30 when Rob asked the card to carry more:
       * creed then test, both his lines, no explanation added (the vision-line
       * rule holds; the card explains nothing, it commits to two things). This
       * was the canvas's own second option from 2026-08-25.
       */
      quote: 'People who do good should do well. If what I build adds work to care, it has failed.',
      /**
       * Photo strip above the standard card, live since 2026-08-29 with the
       * three photos Rob delivered. Captions drafted by Claude at Rob's
       * direction ("come up with the captions for now"), written to what the
       * photos visibly show and nothing more; his wording overrules anytime.
       * Keys map to imports in about.astro.
       */
      photos: [
        /** Event corrected by Rob 2026-08-30: Accelerate OTT, not the Jane Summit. */
        { key: 'event', alt: 'Rob Saric at Accelerate OTT', caption: 'Accelerate OTT, 2026' },
        { key: 'family', alt: 'Rob Saric with his family in a park', caption: 'Family day at the park' },
        { key: 'hiking', alt: 'Rob Saric hiking above a valley', caption: 'On the trail, above the valley' },
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
    number: '04',
    label: 'Write to me',
    heading: 'What are you working through?',
    bodyDesktop: {
      beforeLink: "If you run a clinic, build useful software, or have a question worth exploring, I'd like to hear from you. ",
      link: 'Write to me',
      afterLink: '.',
    },
    bodyMobile: {
      beforeLink: "If you run a clinic, build useful software, or have a question worth exploring, I'd like to hear from you. ",
      link: 'Write to me',
      afterLink: '.',
    },
    cardHeading: 'Get my notes.',
    cardBodyDesktop: 'Occasional notes on what I am building and learning. Reply whenever something connects with your own work.',
    cardBodyMobile: 'Occasional notes on what I am building and learning. Reply whenever something connects with your own work.',
  },
  subscribed: {
    states: {
      ok: {
        heading: 'You are on the list.',
        body: {
          beforeLink: 'You are on the list for my occasional notes. You can reply to any of them.',
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
      intro: 'What I am learning about clinic operations, building software, and using AI in real work. Some are observations. Some are decisions I have changed my mind about.',
      description: 'Notes from Rob Saric on clinic operations, software, AI, and what he is learning while building Caretrics.',
    },
    principles: {
      title: 'Five principles for reviewing clinic operations',
      intro: 'These are the principles I use in my work with clinics. They are one part of how I think about building useful software. If your experience challenges one, write to me.',
      description: 'Five principles Rob Saric uses when reviewing clinic operations, from recover before you acquire to billing problems usually start upstream.',
    },
    about: {
      title: 'About',
      description: 'Meet Rob Saric, a founder in Ottawa building Caretrics and sharing what he learns about clinics, software, and AI.',
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
        'How Rob Saric checks clinic findings, separates records from estimates, and distinguishes identified opportunities from collected money.',
      /**
       * Context paragraph added 2026-08-27 (Rob: the page assumed the reader
       * arrived from the homepage). One orienting line for the stranger, then
       * the standard.
       */
      context:
        'This page explains how I check clinic findings and describe their limits. A recorded balance, an estimated opportunity and money collected are different things.',
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
          body: 'The relevant records depend on the question being investigated and the information available from the clinic. I state the period, sources and missing information for each finding.',
        },
        {
          heading: 'Separate records from estimates.',
          body: 'For each finding, I want to know which records support it, which fields are missing, and whether any part is estimated. Missing billing information alone does not prove that a service was never invoiced.',
        },
        {
          heading: 'A finding needs an owner.',
          body: "The clinic assigns each finding to a person. Caretrics does not decide who. It records the name and the date, so the work stops being nobody's in particular.",
        },
        {
          heading: 'Identified is not collected.',
          body: 'A finding can point to work worth doing. Completing that work does not by itself prove that money was collected. I describe bookings, submitted claims and payments separately, using the evidence available for each.',
        },
        {
          heading: 'Check what changed.',
          body: 'A completed task is evidence of work done. A booking, a payment and an updated balance are different outcomes. I check the relevant source before describing a result as confirmed, and I keep an estimated opportunity separate from collected money.',
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
          body: 'This historical example covers one clinic with 25 providers, from June 2025 through May 2026. The four categories are unbilled claims, $52,000; no-shows, $37,000; missed re-bookings, $24,000; and missing re-evaluations, $14,000. These categories include estimated revenue opportunities. The total is not cash collected or a receivables balance.',
        },
      ],
      contactLink: 'Write to me and tell me where I am wrong →',
    },
    contact: {
      title: 'Write to me',
      description: 'Get in touch with Rob Saric about clinic operations, building software, or a question worth exploring.',
      /**
       * Rob's pick 2026-08-25 ("Answer key"): the door is wide, the humor is
       * dry, and the "tell me where money slips" ask is gone because nobody
       * writes in to report that. The challenge framing lives on the homepage
       * band and /how-i-counted/, where it follows the evidence.
       */
      body: "If you run a clinic, are building something useful, or want to compare notes on software and AI, I'd like to hear from you. Tell me what you're working on and what you're trying to figure out.",
    },
    notFound: {
      title: 'Nothing here.',
      body: 'The page moved or never existed. Try my notes or the archive.',
    },
  },
} as const;
