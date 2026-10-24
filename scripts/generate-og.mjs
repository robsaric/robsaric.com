#!/usr/bin/env node
/**
 * Render a warm, page-specific 1200x630 share card for every indexable route.
 * Build first to supply canonical routes, real headings and self-hosted fonts.
 * Commit the generated PNGs, then rebuild so dist contains the fresh images.
 */
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, join, extname, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { MIME, launchChrome } from './lib/chrome.mjs';
import { renderCard, renderSiteCard, renderReviewLoopCard, renderInterviewCard, renderInterviewMethodCard } from './og-card-template.mjs';
import { INTERVIEW_METHOD } from '../src/data/interview-method.mjs';
import { OG_CARD, OG_SITE_CARD, OG_EDITORIAL } from '../src/data/og-card.mjs';
import { socialImagePath } from '../src/lib/social.mjs';

const ROOT=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const DIST=join(ROOT,'dist/client');
const built=readFileSync(join(DIST,'index.html'),'utf8');
const fontCss=[...(built.match(/@font-face\{[^}]*\}/gu)??[]),...(built.match(/:root\{--font-[^}]*\}/gu)??[])].join('');
if(!fontCss)throw new Error('Build first: self-hosted font CSS is missing.');
const decode=(s)=>s.replace(/<[^>]*>/g,' ').replace(/&#(?:x([0-9a-f]+)|(\d+));/gi,(_,hex,n)=>String.fromCodePoint(parseInt(hex??n,hex?16:10))).replace(/&(amp|quot|apos|lt|gt|nbsp|rsquo|lsquo|rdquo|ldquo|ndash|mdash);/g,(_,e)=>({amp:'&',quot:'"',apos:"'",lt:'<',gt:'>',nbsp:' ',rsquo:'’',lsquo:'‘',rdquo:'”',ldquo:'“',ndash:'–',mdash:'—'}[e])).replace(/\s+/g,' ').trim();
const urls=[...readFileSync(join(DIST,'sitemap-0.xml'),'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
const selectedRoutes=process.argv.slice(2);
const cards=urls.filter(url=>!selectedRoutes.length||selectedRoutes.includes(new URL(url).pathname)).map(url=>{
 const path=new URL(url).pathname;
 const html=readFileSync(join(DIST,path,'index.html'),'utf8');
 const title=decode(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]??'');
 if(!title)throw new Error('No heading for '+path);
 const isArchive=path.startsWith('/archive/')&&path!='/archive/';
 const section=isArchive?OG_EDITORIAL.archiveSection:path.startsWith('/field-notes/')?OG_EDITORIAL.essaySection:'';
 const year=isArchive?html.match(/datetime="(\d{4})-/)?.[1]:undefined;
 const kind=path.includes(OG_EDITORIAL.dashboardSlug)?'dashboard':path.includes(OG_EDITORIAL.analogSlug)?'analog':path==='/about/'?'about':'type';
 return {path,out:join(ROOT,'public',socialImagePath(path)),html:path==='/'?renderSiteCard({...OG_SITE_CARD,fontCss}):path===INTERVIEW_METHOD.path?renderInterviewCard({...OG_CARD,fontCss}):renderCard({title,section: path==='/writing/'?OG_EDITORIAL.writingSection:section,...OG_CARD,fontCss,kind,year})};
});
if (!selectedRoutes.length) cards.push({
 path:'/social/dashboard-review-loop.png',
 out:join(ROOT,'public/social/dashboard-review-loop.png'),
 width:1080,height:1350,
 html:renderReviewLoopCard({fontCss,loopCss:readFileSync(join(ROOT,'src/styles/review-loop.css'),'utf8')}),
});
if (!selectedRoutes.length || selectedRoutes.includes(INTERVIEW_METHOD.path)) cards.push({
 path:'/social/interview-draft-edit.png',
 out:join(ROOT,'public/social/interview-draft-edit.png'),
 width:1080,height:1350,
 html:renderInterviewMethodCard({...OG_CARD,fontCss}),
});
const pages=new Map(cards.map((card,i)=>['/card/'+i,card.html]));
const special={'/tokens.css':'src/styles/tokens.css','/site-photo.png':'src/assets/images/rob-portrait.jpg','/hiking-photo.png':'src/assets/images/rob-hiking.jpg'};
const server=createServer((req,res)=>{
 const url=new URL(req.url,'http://localhost').pathname;
 if(pages.has(url)){res.writeHead(200,{'content-type':MIME['.html']}).end(pages.get(url));return;}
 const file=special[url]?resolve(ROOT,special[url]):resolve(DIST,'.'+decodeURIComponent(url));
 if(!special[url]&&file!==DIST&&!file.startsWith(DIST+sep)){res.writeHead(403).end();return;}
 try{res.writeHead(200,{'content-type':MIME[extname(file)]??'application/octet-stream'}).end(readFileSync(file));}catch{res.writeHead(404).end();}
});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
let browser;
try{
 browser=await launchChrome();const page=await browser.newPage();
 for(const [i,card] of cards.entries()){
  const width=card.width??1200,height=card.height??630;
  await page.send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
  const loaded=page.once('Page.loadEventFired');await page.send('Page.navigate',{url:'http://127.0.0.1:'+server.address().port+'/card/'+i});await loaded;
  const check=await page.send('Runtime.evaluate',{expression:`(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));const t=document.querySelector('.title'),m=document.querySelector('.main'),c=document.querySelector('.card');let size=parseFloat(getComputedStyle(t).fontSize);while(t.scrollHeight>m.clientHeight-56&&size>44){size-=2;t.style.fontSize=size+'px'}return {size,overflow:t.scrollHeight>m.clientHeight-56||c.scrollHeight>c.clientHeight||document.documentElement.scrollWidth>${width}||document.documentElement.scrollHeight>${height}}})()`,awaitPromise:true,returnByValue:true});
  if(check.result.value.overflow)throw new Error('Card overflow: '+card.path);
  const shot=await page.send('Page.captureScreenshot',{format:'png'});
  const png=await sharp(Buffer.from(shot.data,'base64')).png({compressionLevel:9}).toBuffer();
  mkdirSync(dirname(card.out),{recursive:true});writeFileSync(card.out,png);
 }
 await page.send('Page.close');page.close();
 console.log('generate-og: '+cards.length+' image(s); fonts/images loaded, no overflow');
}finally{browser?.close();server.close();}
