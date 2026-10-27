import { TOOLBOX_DIAGRAMS } from '../src/data/toolbox-diagrams.mjs';
import { renderToolboxDiagram } from '../src/lib/toolbox-diagram.mjs';
import { OG_CARD } from '../src/data/og-card.mjs';

const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
export function renderToolboxSocial({ kind, fontCss, diagramCss }) {
  const d = TOOLBOX_DIAGRAMS[kind];
  return `<!doctype html><html lang="en" data-theme="warm"><head><meta charset="utf-8"><style>${fontCss}</style><link rel="stylesheet" href="/tokens.css"><style>
  *{box-sizing:border-box}body{margin:0;width:1080px;height:1350px;background:var(--paper);color:var(--ink);font-family:var(--font-sans)}
  main{padding:60px 72px;height:1350px;display:flex;flex-direction:column}
  header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--rule);padding-bottom:28px;font-size:22px}
  .author{font:400 34px var(--font-display)}h1{font:400 66px/1.1 var(--font-display);letter-spacing:-.025em;margin:46px 0 32px;max-width:20ch}
  ${diagramCss}
  .toolbox-diagram{padding:40px;margin:0;flex:1;display:flex;flex-direction:column;justify-content:center}
  .toolbox-diagram figcaption{font-size:36px;margin-bottom:36px}
  .toolbox-review{gap:26px}.toolbox-review p{font-size:30px;max-width:27ch}.toolbox-diagram .toolbox-flow-arrow{width:34px;height:34px}
  .toolbox-review-outcomes li{font-size:27px;padding-top:28px}.toolbox-diagram .toolbox-diagram-note{font-size:22px;margin-top:36px}
  .toolbox-writing{flex-direction:column;gap:16px}.toolbox-writing li{font-size:29px;flex-direction:column;align-items:center;justify-content:flex-start;gap:12px;flex:initial}.toolbox-writing li:last-child{flex:initial}.toolbox-writing .toolbox-flow-arrow{transform:rotate(90deg)}
  footer{border-top:1px solid var(--rule);padding-top:25px;margin-top:32px;font-size:22px;line-height:1.6}footer p{margin:0}footer .url{color:var(--blue);margin-top:5px}
  </style></head><body><main><header><span class="author">${esc(OG_CARD.author)}.</span><span>${esc(d.title)}</span></header><h1>${esc(d.socialTitle)}</h1>${renderToolboxDiagram(kind)}<footer><p>${esc(d.socialFooter)}</p><p class="url">${esc(d.url)}</p></footer></main></body></html>`;
}
