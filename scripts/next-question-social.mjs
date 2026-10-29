import { nextQuestionDiagram } from '../src/lib/next-question-diagram.mjs';

export function renderNextQuestion({ fontCss, diagramCss }) {
  return `<!doctype html><html lang="en" data-theme="warm"><head><meta charset="utf-8"><style>${fontCss}</style><link rel="stylesheet" href="/tokens.css"><style>
    *{box-sizing:border-box}body{margin:0;width:1080px;height:1350px;background:var(--paper);color:var(--ink);font-family:var(--font-sans)}
    ${diagramCss}
    .card{width:1080px;height:1350px;padding:56px 72px;display:flex;flex-direction:column}
    .brand{display:flex;justify-content:space-between;align-items:baseline;padding-bottom:26px;border-bottom:1px solid var(--rule);font-size:24px}
    .brand-name{font:400 36px var(--font-display)}.brand span:last-child{color:var(--ink-muted)}
    .main{flex:1;min-height:0}.title{display:contents}
    .next-question{margin:0;padding:42px 0 0;border:0}
    .next-question .nq-title{font-size:68px;max-width:22ch;line-height:1.06}
    .next-question .nq-example{font-size:22px;margin:18px 0 38px}
    .next-question .nq-steps{grid-template-columns:1fr;gap:46px}
    .next-question .nq-steps li{padding-left:64px}
    .next-question .nq-label{font-size:22px;line-height:30px;margin-bottom:10px}
    .next-question .nq-number{position:absolute;left:0}
    .next-question .nq-steps li+li::before{content:'↓';left:4px;top:-38px;font-size:30px}
    .next-question .nq-finding{font-size:34px;line-height:1.25;max-width:39ch;margin-bottom:10px}
    .next-question .nq-question{font-size:26px;line-height:1.4;max-width:48ch}
    .next-question .nq-takeaway{font-size:36px;line-height:1.2;margin-top:38px;padding-top:28px;max-width:100%}
    .foot{border-top:1px solid var(--rule);padding-top:22px;font-size:23px;display:flex;justify-content:space-between;color:var(--ink-muted)}
  </style></head><body><div class="card"><div class="brand"><span class="brand-name">Rob Saric.</span><span>Building useful software</span></div><main class="main"><div class="title">${nextQuestionDiagram()}</div></main><footer class="foot"><span>Help me know what to ask next.</span><span>robsaric.com</span></footer></div></body></html>`;
}
