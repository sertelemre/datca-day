// Check the HTML that Pages actually serves, including pages added by the feed refreshes.
import {readFile,readdir} from 'node:fs/promises';
import {resolve,relative} from 'node:path';
import {parse} from 'parse5';

const out=resolve('dist'), origin='https://datca.day';
async function files(dir) {
 const entries=await readdir(dir,{withFileTypes:true});
 return (await Promise.all(entries.map(entry=>entry.isDirectory()?files(resolve(dir,entry.name)):resolve(dir,entry.name)))).flat();
}
const all=new Set(await files(out));
const pages=new Map(),errors=[],anchors=[];
function collect(node,rows=[]) {
 if(node.tagName)rows.push(node);
 for(const child of node.childNodes || [])collect(child,rows);
 return rows;
}
const attr=(node,key)=>node?.attrs?.find(a=>a.name===key)?.value || '';
const text=node=>node.nodeName==='#text'?node.value:(node.childNodes || []).map(text).join('');
const pathOf=file=>'/'+relative(out,file).replace(/(?:^|\/)index\.html$/,'').replace(/\.html$/,'');
for(const file of all) {
 if(!file.endsWith('.html'))continue;
 const path=pathOf(file),nodes=collect(parse(await readFile(file,'utf8')));
 const matches=(tag,field,value)=>nodes.filter(n=>n.tagName===tag&&(!field||attr(n,field)===value));
 const link=rel=>matches('link','rel',rel), meta=name=>attr(matches('meta','name',name)[0],'content');
 const problems=message=>errors.push(path+' '+message);
 const canonical=attr(link('canonical')[0],'href');
 const title=matches('title').find(n=>n.namespaceURI?.includes('xhtml'));
 const h1=matches('h1'),robots=meta('robots'),indexable=!robots.includes('noindex'),lang=attr(matches('html')[0],'lang');
 if(!title||!text(title).includes('datca.day'))problems('missing branded title');
 if(!meta('description').trim())problems('empty description');
 if(h1.length!==1||!text(h1[0]).trim())problems('expected one nonempty h1');
 if(lang!==(path.startsWith('/en/')||path==='/en'?'en':path.startsWith('/ru/')||path==='/ru'?'ru':'tr'))problems('wrong language');
 if(indexable&&canonical!==origin+path)problems('incorrect canonical '+canonical);
 const variants=Object.fromEntries(link('alternate').map(n=>[attr(n,'hreflang'),attr(n,'href')]));
 if(indexable&&['tr','en','ru','x-default'].some(k=>!variants[k]))problems('missing hreflang');
 for(const node of matches('script','type','application/ld+json')) {try{JSON.parse(text(node))}catch{problems('invalid schema')}}
 const resource=(href,key)=>{
   if(!href||href.startsWith('data:')||href.startsWith('mailto:')||href.startsWith('tel:'))return;
   const url=new URL(href,origin+path);
   if(url.origin!==origin)return;
   if(key==='href' && url.hash && !url.hash.startsWith('#:~:'))anchors.push([path,url.pathname.replace(/\/+$/,'') || '/',decodeURIComponent(url.hash.slice(1))]);
   const target=resolve(out,'.'+decodeURI(url.pathname));
   if(!all.has(target)&&!all.has(target+'.html')&&!all.has(resolve(target,'index.html')))problems('missing '+key+' '+href);
 };
 for(const n of nodes){
   if(n.tagName==='img'&&!n.attrs.some(a=>a.name==='alt'))problems('image without alt');
   for(const key of ['src','href','action'])if(attr(n,key))resource(attr(n,key),key);
   if(attr(n,'srcset'))for(const source of attr(n,'srcset').split(','))resource(source.trim().split(/\s+/)[0],'srcset');
   if(attr(n,'property')==='og:image')resource(attr(n,'content'),'og:image');
 }
 pages.set(path,{ids:new Set(nodes.map(n=>attr(n,'id')).filter(Boolean)),lang,indexable,variants,title:title?text(title):'',description:meta('description')});
}
const sitemap=await readFile(resolve(out,'sitemap.xml'),'utf8');
const indexed=new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname));
for(const [path,target,id] of anchors)if(pages.has(target)&&!pages.get(target).ids.has(id))errors.push(path+' invalid fragment '+target+'#'+id);
const seen=new Map(), descriptions=new Map();
for(const [path,page] of pages) {
 if(indexed.has(path)!==page.indexable)errors.push(path+' sitemap/robots mismatch');
 if(!page.indexable)continue;
 if(seen.has(page.title))errors.push(path+' title duplicated on '+seen.get(page.title));
 seen.set(page.title,path);
 const descriptionKey=page.lang+page.description;
 if(descriptions.has(descriptionKey))errors.push(path+' description duplicated on '+descriptions.get(descriptionKey));
 descriptions.set(descriptionKey,path);
 for(const lang of ['tr','en','ru']){
   const other=page.variants[lang]&&pages.get(new URL(page.variants[lang]).pathname);
   if(!other||other.variants[page.lang]!==origin+path)errors.push(path+' nonreciprocal hreflang '+lang);
 }
}
for(const path of indexed)if(!pages.has(path))errors.push('Sitemap route missing: '+path);
if(errors.length){console.error([...new Set(errors)].slice(0,70).join('\n'));process.exit(1)}
console.log(pages.size+' HTML pages, '+indexed.size+' indexable. Canonicals, reciprocal hreflang, titles, descriptions, headings, local links and fragments, images and JSON-LD verified.');
