import { REVIEW_LOOP as R } from '../src/data/review-loop.mjs';
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
