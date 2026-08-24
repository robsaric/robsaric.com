export const COPY = {
  hero: {
    eyebrowDesktop: 'Founder of Caretrics · Allied-health revenue operations',
    eyebrowMobile: 'Founder of Caretrics',
    heading: 'I kept finding the same revenue gaps in clinic after clinic.',
    bodyIntro:
      "I'm Rob Saric. I spent twenty years building software, then went through twelve months of records for more than fifty clinics, one clinic at a time.",
    bodyOutcome:
      'That work became Caretrics. It helps allied-health and rehab teams using Jane.app see what is slipping, give the work an owner, and verify what changed.',
    primaryCta: 'See how Caretrics works',
    secondaryCta: 'Read the field notes',
    /** Mobile renders the secondary path as a text link, not a second button. */
    secondaryCtaMobile: 'Read the field notes →',
    tagline: 'Evidence-led. AI-assisted. Human-controlled.',
    portraitAlt: 'Rob Saric',
  },
  now: {
    heading: 'What I am working on now',
  },
  evidence: {
    number: '01',
    label: 'Evidence',
    heading: 'The dashboard held the evidence. The work still had no owner.',
    bodyDesktop: 'The same pattern turned up in clinic after clinic. The report existed, somebody had read it, and the task it implied still belonged to no one in particular. Here is one anonymized signal, from detection through to a verified outcome.',
    bodyMobile: 'One anonymized signal, from detection through to a verified outcome.',
    signalEyebrow: 'The signal',
    /** Restored 2026-08-24 (V5 resolved); the breakdown lives in /how-i-counted/. */
    metric: '$127,000',
    metricNote:
      'Identified across four gaps in one clinic, over one year. Identified is not collected.',
    metricLink: 'How I counted this →',
    exitLink: 'More of these, in the field notes →',
    methodsLink: 'How I count and verify clinic findings →',
  },
  caretrics: {
    number: '02',
    label: 'Caretrics',
    heading: 'Clinic revenue moves through five stages. So do its problems.',
    bodyDesktop: "Caretrics reads a clinic's Jane data with read-only access and works between Booked and Paid. Select a stage.",
    bodyMobile: "Caretrics reads a clinic's Jane data with read-only access and works between Booked and Paid.",
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
    number: '03',
    label: 'Principles',
    heading: 'Principles I use when reviewing clinic operations.',
    itemLink: 'The note behind this one →',
    allLink: 'See all five principles →',
  },
  fieldNotes: {
    number: '04',
    label: 'Field notes',
    heading: 'What I am seeing, shipping, and rethinking.',
    body: 'Kept in public, in order. The wrong turns stay in.',
    desktopLink: 'All field notes →',
    mobileLink: 'See all field notes →',
  },
  about: {
    number: '05',
    label: 'About',
    heading: 'Where the standard came from.',
    bodyDesktop: 'I have mentored with Big Brothers Big Sisters for over a decade. Time is the thing people in care have least of, and it is the thing most software asks for more of. That is the whole reason I care about this work.',
    bodyMobile: 'I have mentored with Big Brothers Big Sisters for over a decade. Time is the thing people in care have least of, and it is the thing most software asks for more of.',
    /**
     * Third person by design: this feeds the JSON-LD Person.description on
     * /about/ and public/llms.txt, never a rendered page. `extendedHistory` is
     * currently unrendered; /about/ carries its content in aboutPage.intro.
     */
    extendedCredential: 'Rob Saric spent twenty years building software, including years as a systems architect inside large managed health-service organizations. He built Dentallytics, an analytics platform for dental groups, then went through twelve months of records for 50+ allied health clinics, one clinic at a time, and found the same four gaps almost every time.',
    extendedHistory: 'Before Caretrics I spent years as a systems architect inside large managed health-service organizations, and earlier at Trend Micro, Mitel and Pythian.',
    quote: '"If it adds work to care, it has failed."',
    stats: [
      '20+ years building software',
      '50+ clinics, firsthand',
      'Founder of Caretrics, Ottawa',
    ],
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
        'I went through twelve months of records for more than fifty clinics, one clinic at a time, and kept finding the same four gaps.',
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
      quote: 'If it adds work to care, it has failed.',
      signatureAlt: 'Rob Saric',
      attribution: 'Rob Saric, founder of Caretrics',
      contactLink: 'Write to me and tell me where I am wrong →',
      notesLink: 'Read the field notes →',
    },
  },
  writeToMe: {
    number: '06',
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
    cardHeading: 'Get the field notes.',
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
    backLink: 'Back to the field notes →',
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
      title: 'Field notes',
      description: 'Field notes from Rob Saric on clinic revenue, ownership, and building Caretrics. Kept in public, in order.',
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
      intro:
        'Every public number I use is held to the standard on this page. If a number cannot meet it, it comes down until it can. That has already happened once.',
      noteLink: 'The note where I took my own number down →',
      noteHref: '/field-notes/2026-08-19-i-took-my-own-number-down/',
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
      description: 'Write to Rob Saric about clinic revenue, where money slips, or a principle that does not match your front desk. He reads and answers everything himself.',
      body: 'You run the clinic. You see things I cannot. If a principle does not match what you see at your front desk, or you know where money slips, message me. I read and answer everything myself, and if I do not know, I will say so.',
    },
    notFound: {
      title: 'Nothing here.',
      body: 'The page moved or never existed. Try the field notes or the archive.',
    },
  },
} as const;
