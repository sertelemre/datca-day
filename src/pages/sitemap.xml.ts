import { getContent, locales, localePath, alternatePaths } from '../lib/i18n';
import type { APIRoute } from 'astro';
import transport from '../lib/transport-data.json';
import { transportPath } from '../lib/paths';
import { eventRoutes } from '../lib/search';
export const GET: APIRoute = ({site}) => {
 const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

 const urls=locales.flatMap(locale=>{
  const {articles,categories}=getContent(locale);
  const paths=[...['/','/rehber','/etkinlikler','/ulasim','/datca-hava-durumu','/iletisim','/hakkimizda','/fotograf-galerisi','/fotograf-kaynaklari','/site-haritasi','/gizlilik'].map(path=>localePath(path,locale)),...articles.filter(a=>!a.noindex&&!a.canonicalPath).map(a=>a.path),...categories.filter(c=>!c.noindex).map(c=>c.path)];
  paths.push(...transport.routes.map(route=>transportPath(route.slug,locale)));
  paths.push(...eventRoutes(locale).map(entry => entry.path));
  return [...new Set(paths)].map(path=>{
   const date=articles.find(a=>a.path===path)?.updatedDate;
   const alternates=alternatePaths(path);
   const links=[...alternates.map(variant=>`<xhtml:link rel="alternate" hreflang="${variant.locale}" href="${escape(new URL(variant.path,site).href)}"/>`),`<xhtml:link rel="alternate" hreflang="x-default" href="${escape(new URL(alternates.find(v=>v.locale==='tr')!.path,site).href)}"/>`].join('');
   return `<url><loc>${escape(new URL(path,site).href)}</loc>${date?`<lastmod>${date}</lastmod>`:''}${links}</url>`;
  });
 });
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
