---
title: "I only checked the widths I designed for"
summary: "This site was drawn at two screen widths and reviewed at the same two. Those turned out to be the two widths where a large bug was invisible."
type: "Field note"
date: 2026-08-19
tags:
  - "Founder notes"
stage: -1
meta: "Founder notes"
description: "This site was drawn at two screen widths and reviewed at the same two. They were the two widths where a large layout bug happened to be invisible."
---

This site was drawn at two screen widths. A wide one for desktop and a narrow one for phones. The checklist I wrote for myself said to take screenshots at those two widths before shipping anything.

I did that every time. It passed every time.

Then I measured the widths in between. On a small laptop, the homepage was running about four hundred pixels wider than the window. The whole page slid sideways. On a slightly larger screen it was still off by more than two hundred, and it did not come right until the window was wider than most laptops people actually own.

It had been broken the entire time. My review had certified it, repeatedly, because my review looked at exactly the two places the problem could not appear.

The cause was ordinary. The layout had one rule that switched between phone and desktop, and nothing in between, so a laptop got the desktop arrangement at a size it was never built for. Boring to fix.

The interesting part is the review. I had a checklist. I followed it. It was thorough about the two views it named and silent about everything else, and silence reads exactly like a pass.

## The same shape shows up at a front desk

Every clinic I have looked at has a version of this.

You have a report you trust. You built it, or someone built it for you, and you check it on a rhythm. It shows what you thought to measure when you set it up.

The gap is almost never inside that view. It is in the range nobody drew. The patient who never rebooked does not appear on a no-show report, because she did not fail to show up for anything. She simply never got a next appointment. The claim that was never submitted is not on an aging report, because aging reports show claims that exist.

A clean report is not the same as a clean clinic. It means everything you decided to look at is fine.

## What I would actually check

The question I now ask about any report, mine included, is not what it says. It is what would have to go wrong for this to still look fine.

For this site, the answer was a laptop. So the check is automated now, at seven widths instead of two, and it fails the build rather than waiting for me to notice.

For a clinic, the answer is usually a patient who stopped existing in the system rather than one who did something wrong. Those are the ones worth hunting, and almost no standard report is built to show them.
