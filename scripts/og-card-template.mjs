/**
 * The OG share card, as HTML. Rendered by generate-og.mjs in headless Chrome
 * at exactly 1200x630 and screenshotted, so what ships is this markup painted
 * with the real site tokens (/tokens.css) and the real built fonts (fontCss is
 * lifted from a built page, hashed URLs and all).
 *
 * Transcribed from the claude.ai/design "Field Note OG Cards" sheet (turn 9),
 * approved 2026-08-25: the dark 9a layout with its 92/84/76 size ladder, the
 * 9c composition when the note carries a stat, and the avatar mark in the
 * footer (Rob's addition to the sheet). The title is anchored to the footer
 * rule and grows upward, so a short title leaves its air under the eyebrow,
 * where it reads as deliberate. Layout numbers are the artboard's own.
 *
 * Strings come in from the caller (src/data/og-card.mjs + note frontmatter);
 * nothing on the card is authored here.
 */

const esc = (s) => s
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

/**
 * The sheet's ladder: 92px to 25ch (9a), 84px to 39ch (9e), 76px to 52ch
 * (9d). With a stat the title always sets at 60px in two lines (9c).
 */
function titleStyle(title, hasStat) {
  if (hasStat) return 'font-size: 60px; line-height: 1.08; letter-spacing: -0.03em;';
  if (title.length <= 30) return 'font-size: 92px; line-height: 1.04; letter-spacing: -0.035em;';
  if (title.length <= 45) return 'font-size: 84px; line-height: 1.04; letter-spacing: -0.034em;';
  return 'font-size: 76px; line-height: 1.06; letter-spacing: -0.032em;';
}

export function renderCard({ title, eyebrow, author, site, stat, fontCss }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>${fontCss}</style>
<link rel="stylesheet" href="/tokens.css">
<style>
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; }
  .card {
    width: 100%;
    height: 100%;
    padding: 80px;
    display: grid;
    grid-template-rows: ${stat ? 'auto auto 1fr auto' : 'auto 1fr auto'};
    background: var(--forest-500);
    color: var(--cream);
    font-family: var(--font-sans);
  }
  .eyebrow {
    color: var(--on-dark-78);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .title {
    ${stat ? 'margin-top: 30px;' : 'align-self: end;'}
    ${titleStyle(title, Boolean(stat))}
    font-weight: 700;
    text-wrap: balance;
  }
  .stat {
    align-self: end;
    display: flex;
    align-items: baseline;
    gap: 24px;
  }
  .stat__value {
    color: var(--lime-500);
    font-size: 84px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -0.04em;
    font-variant-numeric: tabular-nums;
  }
  .stat__text {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-bottom: 4px;
  }
  .stat__label { font-size: 25px; font-weight: 600; line-height: 1.25; }
  .stat__context {
    color: var(--on-dark-78);
    font-size: 20px;
    font-weight: 400;
    line-height: 1.35;
    font-variant-numeric: tabular-nums;
  }
  .foot {
    margin-top: ${stat ? '34px' : '48px'};
    padding-top: ${stat ? '22px' : '26px'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    border-top: 1px solid var(--on-dark-28);
  }
  .who { display: flex; align-items: center; gap: 18px; }
  .avatar { width: 56px; height: 56px; border-radius: 50%; display: block; }
  .author { font-size: 22px; font-weight: 600; }
  .site { color: var(--lime-500); font-size: 22px; font-weight: 500; }
</style>
</head>
<body>
  <div class="card">
    <div class="eyebrow">${esc(eyebrow)}</div>
    <div class="title">${esc(title)}</div>
    ${stat ? `<div class="stat">
      <span class="stat__value">${esc(stat.value)}</span>
      <span class="stat__text">
        <span class="stat__label">${esc(stat.label)}</span>
        ${stat.context ? `<span class="stat__context">${esc(stat.context)}</span>` : ''}
      </span>
    </div>` : ''}
    <div class="foot">
      <span class="who">
        <img class="avatar" src="/avatar.png" alt="">
        <span class="author">${esc(author)}</span>
      </span>
      <span class="site">${esc(site)}</span>
    </div>
  </div>
</body>
</html>`;
}
