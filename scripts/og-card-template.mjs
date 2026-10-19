const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const shell = (fontCss, styles, body) => `<!doctype html><html lang="en" data-theme="warm"><head><meta charset="utf-8"><style>${fontCss}</style><link rel="stylesheet" href="/tokens.css"><style>
*{box-sizing:border-box;margin:0}body{width:1200px;height:630px;overflow:hidden;font-family:var(--font-sans);background:var(--paper);color:var(--ink)}
.card{width:1200px;height:630px;padding:48px 64px;display:flex;flex-direction:column}
.brand{display:flex;justify-content:space-between;align-items:center;font-size:22px;padding-bottom:24px;border-bottom:1px solid var(--rule)}
.author{font:800 30px var(--font-display);letter-spacing:-.035em}.dot{color:var(--blue)}.section{color:var(--ink-muted)}
.main{flex:1;display:flex;align-items:center;gap:48px;min-height:0;padding:28px 0}
.title{font:800 76px/1.08 var(--font-display);letter-spacing:-.035em;text-wrap:balance}
.foot{padding-top:20px;border-top:1px solid var(--rule);display:flex;justify-content:space-between;align-items:center;font-size:22px;color:var(--ink-muted)}
.site{color:var(--blue)}.photo{width:300px;height:350px;object-fit:cover;object-position:center 25%;border-radius:6px;flex:none}
${styles}</style></head><body>${body}</body></html>`;
const frame = ({author,site,section,title,aside='',foot='',styles='',fontCss}) => shell(fontCss,styles,
`<div class="card"><div class="brand"><span class="author">${esc(author)}<span class="dot">.</span></span><span class="section">${esc(section)}</span></div><div class="main"><div class="title">${esc(title)}</div>${aside}</div><div class="foot"><span>${esc(foot)}</span><span class="site">${esc(site)}</span></div></div>`);

export function renderSiteCard({heading,author,site,fontCss}) {
 return frame({author,site,title:heading,section:'',fontCss,aside:'<img class="photo" src="/site-photo.png" alt="">',styles:'.title{font-size:69px;flex:1}',foot:''});
}
export function renderCard({title,section,author,site,fontCss,kind,copy,year}) {
 let aside='', styles='';
 if(kind==='dashboard'){
  aside=`<div class="sketch"><div class="report">${esc(copy.report)}</div><div class="arrow" aria-hidden="true"><svg width="24" height="42" viewBox="0 0 24 42"><path d="M12 4v30m-8-8 8 8 8-8" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="outcome">${esc(copy.outcome)}<div class="evidence">${esc(copy.evidence)}</div></div></div>`;
  styles='.title{font-size:61px;flex:1}.sketch{width:370px;flex:none;font:700 29px/1.2 var(--font-display);letter-spacing:-.02em}.report{background:var(--yellow);padding:22px 24px}.arrow{height:48px;color:var(--ink-muted);padding-left:24px;font:400 38px/48px var(--font-sans)}.outcome{border:2px solid var(--blue);color:var(--blue);padding:22px 24px}.evidence{border-top:1px solid var(--rule);margin-top:18px;padding-top:15px;font:400 19px/1.4 var(--font-sans);letter-spacing:0;color:var(--ink)}';
 }
 if(kind==='analog'||kind==='about'){
  aside=`<img class="photo" src="/${kind==='analog'?'hiking-photo':'site-photo'}.png" alt="">`;
  styles='.title{flex:1;font-size:72px}';
 }
 return frame({title,section,author,site,fontCss,aside,styles,foot:year??''});
}
