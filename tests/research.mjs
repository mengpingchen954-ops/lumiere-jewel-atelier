import {chromium} from '@playwright/test';
import fs from 'node:fs';
fs.mkdirSync('docs',{recursive:true});fs.mkdirSync('artifacts',{recursive:true});
const apps={};for(const id of ['3494290','3964040']) apps[id]=(await (await fetch(`https://store.steampowered.com/api/appdetails?appids=${id}&l=english`)).json())[id].data;
fs.writeFileSync('docs/steam-official.json',JSON.stringify({checkedAt:new Date().toISOString(),apps},null,2));
const browser=await chromium.launch({channel:'chrome',headless:true});const p=await browser.newPage({viewport:{width:1600,height:1200}});
await p.setContent(`<body style="margin:0;background:#eee;font:18px sans-serif"><h1>Official screenshots · Master of Jewelry · 20 Oct 2026</h1><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">${apps['3964040'].screenshots.map((s,i)=>`<div><div>Demo ${i}</div><img style="width:100%" src="${s.path_full}"></div>`).join('')}</div></body>`);await p.waitForTimeout(4500);await p.screenshot({path:'artifacts/research-screenshots.jpg',fullPage:true});
const videos=[...apps['3964040'].detailed_description.matchAll(/<source src="([^"]+\.mp4[^\"]*)"/g)].map(x=>x[1]);
await p.setContent(`<body style="background:#eee;font:20px sans-serif"><h2>Official inline demonstrations (video playback)</h2>${videos.map((v,i)=>`<div style="display:inline-block;width:48%">${i}<video controls muted style="width:100%" src="${v}"></video></div>`).join('')}</body>`);
await p.waitForTimeout(3500);console.log(await p.locator('video').evaluateAll(vs=>vs.map(v=>({ready:v.readyState,duration:v.duration,error:v.error?.message}))));
for (const t of [1,3,6]){await p.locator('video').evaluateAll((vs,t)=>vs.forEach(v=>{v.currentTime=Math.min(t,v.duration-0.1)}),t);await p.waitForTimeout(1000);await p.screenshot({path:`artifacts/research-video-${t}.jpg`,fullPage:true});}
await p.goto('https://store.steampowered.com/app/3964040/?l=english',{waitUntil:'domcontentloaded'});console.log((await p.locator('body').innerText()).slice(-8000));await browser.close();
