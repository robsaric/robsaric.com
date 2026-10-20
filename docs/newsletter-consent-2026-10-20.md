# Personal newsletter consent

Rob confirmed Q23 on October 20: people signing up on his personal site want his notes only.

## Correction

The shared Resend workspace has three unrelated topics with an opt-in default. The old signup supplied only the personal topic, so a new contact inherited those defaults.

New contacts now receive explicit preferences for every current topic: personal writing is opted in; unrelated topics are opted out. The topic list is paginated and the configured personal topic must exist before creation.

Existing contacts receive targeted changes to the personal topic and segment only. Their other preferences are preserved. A globally unsubscribed contact is not silently enabled; the site gives them a contact path to request help.

Provider errors, including conflicts and rate limits, no longer count as successful signups. The personal topic identifier is required server configuration. Credentials remain server-only and logs exclude contact details.

Resend's normal create endpoint is an upsert. Its lookup/create race is documented in README; there is no conditional-create guarantee in this implementation.

## Validation

- Twelve focused tests cover new contacts, paginated topics, existing preferences, global unsubscribes, malformed responses and provider failures.
- `corepack pnpm@10.27.0 gate` passed: Astro check, copy lint, build, 112 redirects, nine note checks, 49 sharing cards and 84 responsive layout checks.
- The unsubscribe recovery page was inspected at 1440, 900 and 390 pixels.
- Homepage keyboard traversal retained visible focus. The mobile menu opened and closed with Escape.
- A read-only review found no further blockers in the provider request shapes or consent handling.

## Delivery behavior

Signup saves the contact and personal subscription. It does not currently send an automatic welcome email. The occasional essays are sent separately through a broadcast scoped to the personal segment and topic.

Before this correction, an explicitly authorized test email reached Rob's own inbox with SPF, DKIM and DMARC passing. That proves the sending domain's test delivery, not an automatic welcome sequence.

## Existing audience

The live personal segment contained 184 contacts. All belonged only to that segment. Rob's test contact was already corrected; the other 183 showed four subscribed topics.

One existing contact was corrected after its blank Caretrics source properties and creation-time topic activity were inspected. Automatic approval review then stopped a batch correction because segment membership alone does not establish separate consent. The remaining 182 require the exact-cohort confirmation presented to Rob. Do not infer their cleanup is complete.

Contact-level before-state evidence is stored only in ignored local review files, outside the committed documentation.
