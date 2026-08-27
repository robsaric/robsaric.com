---
title: "A clean report is not a clean clinic"
summary: "The patient who never rebooked is not on the no-show report. The claim never submitted is not on aging. A clean report only means what you chose to look at is fine."
type: "Field note"
date: 2026-08-19
tags:
  - "Clinic revenue"
stage: -1
description: "The patient who never rebooked is not on any no-show report, and the claim never submitted is not on aging. What clean reports cannot show."
---

The patient who never rebooked is not on your no-show report. She did not miss anything. She left her last visit with nothing booked, so there was no appointment to fail to show up for, and every report you run says the month went fine.

The claim that was never submitted is the same story. Aging reports age claims that exist.

You have a report you trust. You built it, or someone built it for you, and you check it on a rhythm. It shows what you thought to measure on the day you set it up, and the gap is almost never inside that view. It is in the range nobody drew.

A clean report is not the same as a clean clinic. It means everything you decided to look at is fine.

I fell for my own version of this the week I built this site. The design was drawn at two screen widths, a wide one for desktops and a narrow one for phones, and my pre-ship checklist said to screenshot both. I did, every time, and it passed every time. Then I measured the sizes in between and found the homepage running four hundred pixels wider than a small laptop's screen. It had been broken the entire time. My checklist was thorough about the two views it named and silent about everything else, and silence reads exactly like a pass (the check runs at seven widths now, and it fails loudly instead of waiting for me to notice).

So the question I now ask about any report, mine included, is what would have to go wrong for it to still look fine. For my site the answer was a laptop. For a clinic it is usually a patient who quietly stopped existing in the system, and almost no standard report is built to show those.

What I would check in your clinic: pull the patients whose last visit has no next appointment after it, this month and last. No report flags them. That is the point.
