const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const shell = (fontCss, styles, body, theme = '') => `<!doctype html><html lang="en"${theme ? ' data-theme="warm"' : ''}><head><meta charset="utf-8"><style>${fontCss}</style><link rel="stylesheet" href="/tokens.css"><style>
*{box-sizing:border-box;margin:0}body{width:1200px;height:630px;overflow:hidden;font-family:var(--font-sans)}
${styles}</style></head><body>${body}</body></html>`;

export function renderSiteCard({ heading, author, site, fontCss }) {
  return shell(fontCss, `
.card{width:1200px;height:630px;padding:64px 76px;display:grid;grid-template-columns:1.35fr .8fr;gap:64px;background:var(--paper);color:var(--ink)}
.copy{display:flex;flex-direction:column;justify-content:center}
.heading{font:800 76px/1.06 var(--font-display);letter-spacing:-.04em;color:var(--ink)}
.foot{margin-top:42px;display:flex;flex-direction:column;gap:8px}
.author{font:700 28px var(--font-display)}.site{font-size:20px;color:var(--ink-muted)}
.photo{width:100%;height:430px;align-self:center;object-fit:cover;border-radius:12px}
`, `<div class="card"><div class="copy"><div class="heading">${esc(heading)}</div><div class="foot"><span class="author">${esc(author)}</span><span class="site">${esc(site)}</span></div></div><img class="photo" src="/site-photo.png" alt=""></div>`, 'warm');
}

export function renderCard({ title, eyebrow, author, site, stat, fontCss }) {
  const size = stat ? 58 : title.length > 62 ? 64 : title.length > 40 ? 74 : 86;
  return shell(fontCss, `
.card{width:1200px;height:630px;padding:64px 76px;background:var(--blue);color:var(--white);display:flex;flex-direction:column}
.title{font:750 ${size}px/1.09 var(--font-display);letter-spacing:-.035em;max-width:1040px;text-wrap:balance}
.meta{font-size:18px;color:var(--on-dark-78);margin-top:22px}
.stat{display:flex;align-items:center;gap:26px;margin-top:24px}
.stat-value{font:700 64px/1 var(--font-display);color:var(--yellow)}
.stat-text{max-width:680px;display:flex;flex-direction:column;gap:6px;font-size:21px;line-height:1.3}
.stat-context{font-size:17px;color:var(--on-dark-78)}
.foot{margin-top:auto;padding-top:22px;border-top:1px solid var(--on-dark-28);display:flex;justify-content:space-between;align-items:center;font-size:22px}
.site{color:var(--yellow)}.author{font-weight:600}
`, `<div class="card"><div class="title">${esc(title)}</div><div class="meta">${esc(eyebrow)}</div>${stat ? `<div class="stat"><span class="stat-value">${esc(stat.value)}</span><span class="stat-text">${esc(stat.label)}${stat.context ? `<span class="stat-context">${esc(stat.context)}</span>` : ''}</span></div>` : ''}<div class="foot"><span class="author">${esc(author)}</span><span class="site">${esc(site)}</span></div></div>`);
}
