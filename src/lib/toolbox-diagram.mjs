import { TOOLBOX_DIAGRAMS } from '../data/toolbox-diagrams.mjs';

const escape = value => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow = '<svg class="toolbox-flow-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M3 12h17m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.25"/></svg>';

/** Only authored, escaped labels enter this static, accessible diagram. */
export function renderToolboxDiagram(kind) {
  const d = TOOLBOX_DIAGRAMS[kind];
  if (!d) throw new Error(`Unknown Toolbox diagram: ${kind}`);
  const content = kind === 'dashboard'
    ? `<div class="toolbox-review"><p class="toolbox-review-input">${escape(d.input)}</p>${arrow}<p class="toolbox-review-question">${escape(d.review)}</p>${arrow}<ul class="toolbox-review-outcomes">${d.outcomes.map(s => `<li>${escape(s)}</li>`).join('')}</ul></div>`
    : `<ol class="toolbox-writing">${d.steps.map((s,i) => `<li><span>${escape(s)}</span>${i < d.steps.length - 1 ? arrow : ''}</li>`).join('')}</ol>`;
  return `<figure class="toolbox-diagram toolbox-diagram--${kind}"><figcaption>${escape(d.caption)}</figcaption>${content}<p class="toolbox-diagram-note">${escape(d.note)}</p></figure>`;
}
