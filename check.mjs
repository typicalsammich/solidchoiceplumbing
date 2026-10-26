import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
const files=[];function walk(p){for(const e of fs.readdirSync(p,{withFileTypes:true})){const f=path.join(p,e.name);if(e.isDirectory())walk(f);else if(f.endsWith('.html'))files.push(f)}}walk('dist');
const titles=new Set();let links=0;for(const f of files){const s=fs.readFileSync(f,'utf8');assert.equal((s.match(/<h1>/g)||[]).length,1,f+' H1');const title=s.match(/<title>(.*?)<\/title>/)[1];if(!f.endsWith('404.html')){assert(!titles.has(title),'Duplicate title '+title);titles.add(title)}assert(!/951.?238|DLR Plumbing|1162406/.test(s),'Unrelated company detail');for(const m of s.matchAll(/href="([^"]+)"/g)){const u=m[1];if(u.startsWith('tel:'))assert.equal(u,'tel:+15626416364');if(u.startsWith('/')&&!u.startsWith('//')){const loc=u.split(/[?#]/)[0],dest=path.join('dist',loc);assert(fs.existsSync(dest)||fs.existsSync(path.join(dest,'index.html')),'Broken link '+u+' from '+f);links++}}for(const m of s.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g))JSON.parse(m[1]);}
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,25);for(const s of JSON.parse(fs.readFileSync('services.json','utf8')))assert(fs.existsSync('dist/services/'+s.slug+'/index.html'));
assert(fs.existsSync('dist/assets/bathroom-hero.webp'));console.log(JSON.stringify({htmlDocuments:files.length,contentPages:25,internalLinks:links,uniqueTitles:titles.size,servicePages:7,structuredData:'parsed',phoneLinks:'all matched',companyIdentity:'clean'},null,2));

// Regression checks for requested logo, navigation and distinct artwork.
const crypto=await import('node:crypto');
const serviceList=JSON.parse(fs.readFileSync('services.json','utf8'));
const illustrations=serviceList.map(s=>fs.readFileSync('dist/assets/services/'+s.slug+'.svg','utf8'));
assert.equal(new Set(illustrations.map(s=>crypto.createHash('sha256').update(s).digest('hex'))).size,7);
for(const f of files){const html=fs.readFileSync(f,'utf8');assert(!/[↗↘→↓←⇨]/.test(html),'Decorative arrow in '+f);for(const m of html.matchAll(/src="(\/[^"]+)"/g)){const src=m[1].split(/[?#]/)[0];assert(fs.existsSync(path.join('dist',src)),'Missing local asset '+src)}}
const regions=JSON.parse(fs.readFileSync('regions.json','utf8'));assert.deepEqual(regions.map(r=>r.cities.length),[52,88,34]);assert(fs.existsSync('dist/assets/solid-choice-logo-transparent.webp'));
console.log('Revision checks: seven distinct illustrations, 174 city entries, no decorative arrows, local assets present.');
