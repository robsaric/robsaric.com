import { NEXT_QUESTION as Q } from '../data/next-question.mjs';
const esc = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

// Static editorial data shared by the accessible article and the image export.
export function nextQuestionDiagram() {
  return `<figure id="next-question" class="next-question" aria-label="${esc(Q.title)}">
    <header><p class="nq-title">${esc(Q.title)}</p><p class="nq-example">${esc(Q.example)}</p></header>
    <ol class="nq-steps">${Q.steps.map((step, i) => `<li>
      <div class="nq-label"><span class="nq-number">0${i + 1}</span>${esc(step.label)}</div>
      <p class="nq-finding">${esc(step.finding)}</p>
      <p class="nq-question">${esc(step.question)}</p>
    </li>`).join('')}</ol>
    <figcaption class="nq-takeaway">${esc(Q.takeaway)}</figcaption>
  </figure>`;
}
