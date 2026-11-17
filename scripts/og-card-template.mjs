import { REVIEW_LOOP as R } from '../src/data/review-loop.mjs';
import { INTERVIEW_METHOD as I } from '../src/data/interview-method.mjs';
import { readFileSync } from 'node:fs';
const wordmarkCss = readFileSync(new URL('../src/styles/wordmark.css', import.meta.url), 'utf8');
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const shell = (fontCss, styles, body) => `<!doctype html><html lang="en" data-theme="warm"><head><meta charset="utf-8"><style>${fontCss}</style><link rel="stylesheet" href="/tokens.css"><style>
*{box-sizing:border-box;margin:0}body{width:1200px;height:630px;overflow:hidden;font-family:var(--font-sans);background:var(--paper);color:var(--ink)}
.card{width:1200px;height:630px;padding:48px 64px;display:flex;flex-direction:column}
.brand{display:flex;justify-content:space-between;align-items:center;font-size:22px;padding-bottom:24px;border-bottom:1px solid var(--rule)}
${wordmarkCss}
.section{color:var(--ink-muted)}
.main{flex:1;display:flex;align-items:center;gap:48px;min-height:0;padding:28px 0}
.title{font:400 76px/1.08 var(--font-display);letter-spacing:-.025em;text-wrap:balance}
.foot{padding-top:20px;border-top:1px solid var(--rule);display:flex;justify-content:space-between;align-items:center;font-size:22px;color:var(--ink-muted)}
.site{color:var(--blue)}.photo{width:300px;height:350px;object-fit:cover;object-position:center 25%;border-radius:6px;flex:none}
${styles}</style></head><body>${body}</body></html>`;
const frame = ({author,site,section,title,aside='',foot='',styles='',fontCss}) => shell(fontCss,styles,
`<div class="card"><div class="brand"><span class="site-wordmark">${esc(author)}<span class="site-wordmark__dot">.</span></span><span class="section">${esc(section)}</span></div><div class="main"><div class="title">${esc(title)}</div>${aside}</div><div class="foot"><span>${esc(foot)}</span><span class="site">${esc(site)}</span></div></div>`);

export function renderSiteCard({heading,author,site,fontCss}) {
 return shell(fontCss,'.title{font-size:94px;max-width:20ch}.site-identity{display:flex;align-items:center;gap:18px}.avatar{width:64px;height:64px;object-fit:cover;object-position:50% 25%;border-radius:50%}',`<div class="card"><div class="brand"><div class="site-identity"><img class="avatar" src="/site-photo.png" alt=""><span class="site-wordmark">${esc(author)}<span class="site-wordmark__dot">.</span></span></div></div><div class="main"><div class="title">${esc(heading)}</div></div><div class="foot"><span class="site">${esc(site)}</span></div></div>`);
}
export function renderCard({title,section,author,site,fontCss,kind,year}) {
 let aside='', styles='';
 if(kind==='dashboard'){
  aside=`<div class="sketch"><ol>${R.steps.map((step,i)=>`<li><span>${i+1}</span>${esc(step.question)}</li>`).join('')}</ol><span class="return" aria-hidden="true"></span></div>`;
  styles='.title{font-size:61px;flex:1}.sketch{width:425px;flex:none;padding:26px 38px 26px 26px;background:var(--white);border:1px solid var(--rule);border-radius:10px;position:relative}.sketch ol{list-style:none;padding:0}.sketch li{display:flex;align-items:center;gap:16px;padding:17px 0;border-bottom:1px solid var(--rule);font:500 27px/1.3 var(--font-sans);letter-spacing:-.02em}.sketch li:last-child{border:0}.sketch li span{display:grid;place-items:center;flex:none;width:32px;height:32px;border:1px solid var(--ink-muted);border-radius:50%;font:600 18px var(--font-sans);color:var(--blue)}.sketch li span{color:var(--ink-muted)}.return{position:absolute;top:60px;bottom:60px;right:17px;width:12px;border:1px solid var(--ink-muted);border-left:0;border-radius:0 10px 10px 0}.return:before{content:"";position:absolute;left:0;top:-4px;width:6px;height:6px;border-left:1px solid var(--ink-muted);border-bottom:1px solid var(--ink-muted);transform:rotate(45deg)}';
 }
 if(kind==='analog'||kind==='about'){
  aside=`<img class="photo" src="/${kind==='analog'?'hiking-photo':'site-photo'}.png" alt="">`;
  styles='.title{flex:1;font-size:72px}';
 }
 return frame({title,section,author,site,fontCss,aside,styles,foot:year??''});
}

const flowArrow='<svg aria-hidden="true" viewBox="0 0 20 12"><path d="M1 6h17M13 1l5 5-5 5"/></svg>';
const TOOLBOX_CARD_CSS=`
.title{font-size:60px;flex:1}
.sample{width:452px;flex:none;margin:0;padding:26px 30px 28px;background:var(--white);border:1px solid var(--rule);border-radius:10px}
.sample figcaption{font:400 16px/1.4 var(--font-sans);color:var(--ink-muted);margin-bottom:12px}
.sample-title{font:600 22px/1.35 var(--font-sans);letter-spacing:-.01em;margin-bottom:18px}
.original{font:400 30px/1.22 var(--font-display)}
.annotation{font:italic 400 22px/1.4 var(--font-display);color:var(--ink-muted);margin:12px 0}
.revision{font:400 20px/1.45 var(--font-sans);padding-top:14px;border-top:1px solid var(--rule)}
.sample dl div{display:grid;grid-template-columns:86px 1fr;gap:12px;padding:13px 0;border-top:1px solid var(--rule)}
.sample dt{font:600 18px/1.45 var(--font-sans)}
.sample dd{font:400 20px/1.45 var(--font-sans)}
.map{display:flex;align-items:center;list-style:none;padding:22px 0 26px}
.map li{display:flex;align-items:center;gap:10px;flex:1;font:500 22px/1.3 var(--font-sans)}
.map li:last-child{flex:0}
.map span{border-bottom:1px solid var(--ink-muted);padding-block:10px}
.map svg{flex:1;min-width:18px;height:14px;stroke:var(--ink-muted);fill:none;stroke-width:1.2;margin-right:10px}
.map-note{font:400 20px/1.45 var(--font-sans);padding-top:16px;border-top:1px solid var(--rule)}
.guides{list-style:none;padding:0}
.guides li{padding:14px 0;border-top:1px solid var(--rule);font:500 25px/1.3 var(--font-sans);letter-spacing:-.015em}
`;

/**
 * A Toolbox link preview: the page's promise, a glimpse of what the skill
 * produces, and that it is free. `sample` is the guide's COLLECTION entry;
 * the Toolbox index passes `guides` (the guide names) instead.
 */
export function renderToolboxCard({promise,name,section,availability,separator,kind,sample,sampleLabel,guides,listLabel,author,site,fontCss}) {
 let panel;
 if(guides) panel=`<p class="sample-title">${esc(listLabel)}</p><ul class="guides">${guides.map(guide=>`<li>${esc(guide)}</li>`).join('')}</ul>`;
 else if(kind==='interview') panel=`<figcaption>${esc(sampleLabel)}</figcaption><p class="sample-title">${esc(sample.label)}</p><p class="original">${esc(sample.before)}</p><p class="annotation">${esc(sample.annotation)}</p><p class="revision">${esc(sample.after)}</p>`;
 else if(kind==='dashboard') panel=`<figcaption>${esc(sampleLabel)}</figcaption><p class="sample-title">${esc(sample.label)}</p><dl>${[[sample.verdictLabel,sample.verdict],[sample.changeLabel,sample.change],[sample.checkLabel,sample.check]].map(([label,text])=>`<div><dt>${esc(label)}</dt><dd>${esc(text)}</dd></div>`).join('')}</dl>`;
 else if(sample?.steps) panel=`<figcaption>${esc(sampleLabel)}</figcaption><p class="sample-title">${esc(sample.label)}</p><ol class="map">${sample.steps.map((step,i)=>`<li><span>${esc(step)}</span>${i<sample.steps.length-1?flowArrow:''}</li>`).join('')}</ol><p class="map-note">${esc(sample.note)}</p>`;
 else throw new Error('No Toolbox card panel for '+name);
 return frame({author,site,fontCss,title:promise,section,foot:[name,availability].filter(Boolean).join(separator),
  aside:`<figure class="sample">${panel}</figure>`,styles:TOOLBOX_CARD_CSS});
}

export function renderInterviewMethodCard({author,site,fontCss}) {
 return shell(fontCss,`
 body,.card{width:1080px;height:1350px}
 .card{padding:52px 64px}
 .brand{font-size:24px;padding-bottom:24px}
 .main{display:block;padding:34px 0 0}
 .title{font-size:68px;max-width:24ch;line-height:1.04;text-wrap:balance}
 .method{list-style:none;margin-top:30px}
 .method li{display:grid;grid-template-columns:42px 1fr;gap:22px;position:relative;padding:20px 0 22px;border-bottom:1px solid var(--rule)}
 .method li:last-child{border-bottom:0}
 .number{font:400 25px/1.4 var(--font-sans);color:var(--ink-muted);padding-top:4px}
 .step-title{font:500 36px/1.2 var(--font-sans);letter-spacing:-.025em}
 .ai .step-title{color:var(--blue)}
 .detail{font:400 25px/1.45 var(--font-sans);margin-top:8px}
 .note{margin-top:22px;font:400 32px/1.25 var(--font-display)}
 .foot{font-size:21px;padding-top:24px}
 `,`<div class="card"><div class="brand"><span class="site-wordmark">${esc(author)}<span class="site-wordmark__dot">.</span></span><span class="section">${esc(I.name)}</span></div>
 <div class="main"><h1 class="title">${esc(I.socialHeading)}</h1>
 <ol class="method">${I.steps.map((step,i)=>`<li class="${step.role}"><span class="number">${i+1}</span><div><h2 class="step-title">${esc(step.title)}</h2><p class="detail">${esc(step.detail)}</p></div></li>`).join('')}</ol>
 <p class="note">${esc(I.note)}</p></div>
 <div class="foot"><span>${esc(I.label)}</span><span class="site">${esc(site)}</span></div></div>`);
}

/** Portrait social edition: the same questions, example, type and colours as the site. */
export function renderReviewLoopCard({fontCss,loopCss}) {
 const styles=`
 ${loopCss}
 body,.card{width:1080px;height:1350px}
 .card{padding:56px 64px}
 .brand{font-size:24px;padding-bottom:24px}
 .main{display:block;padding:36px 0 24px}
 .review-loop{--loop-space:0px;--loop-heading:64px;--loop-label:27px;--loop-question:36px;--loop-body:28px;--loop-row:24px;--loop-number:44px;background:transparent;border:0;border-radius:0}
 .loop-heading{max-width:25ch;font-weight:500;line-height:1.12;text-wrap:initial}
 .loop-example{margin:22px 0 36px}
 .loop-track{padding-right:40px}
 .loop-steps li{gap:24px}
 .loop-steps p{margin-top:8px;max-width:42ch;line-height:1.4}
 .loop-number{font-size:22px}
 .loop-return{top:46px;bottom:62px;width:22px;border-width:2px;border-radius:0 18px 18px 0}
 .loop-return:before{top:-6px;width:10px;height:10px;border-width:2px}
 .loop-note{margin-top:24px;padding-top:24px;line-height:1.45;max-width:55ch;color:var(--ink)}
 .foot{font-size:24px;padding-top:20px}
 `;
 return shell(fontCss,styles,`<div class="card">
 <div class="brand"><span class="site-wordmark">${esc(R.author)}<span class="site-wordmark__dot">.</span></span><span class="section">${esc(R.collection)}</span></div>
 <div class="main"><figure class="review-loop">
 <h1 class="title loop-heading">${esc(R.heading)}</h1><p class="loop-example">${esc(R.example)}</p>
 <div class="loop-track"><ol class="loop-steps">${R.steps.map((step,i)=>`<li><span class="loop-number" aria-hidden="true">${i+1}</span><div><strong>${esc(step.question)}</strong><p>${esc(step.detail)}</p></div></li>`).join('')}</ol><span class="loop-return" aria-hidden="true"></span></div>
 <figcaption class="loop-note">${esc(R.note)}</figcaption></figure></div>
 <div class="foot"><span class="site">${esc(R.site)}</span></div></div>`);
}
