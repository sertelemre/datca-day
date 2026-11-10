import { guides as travelGuides } from './guides';
import { practicalGuides } from './practical-guides';
import { visitNotes } from './visit-notes';
import articleRoutes from './article-routes.json';
import { experienceGuides } from './experience-guides';
import { peninsulaGuides } from './peninsula-guides';
import { photoCaption } from './photo-caption';
import { topics } from './topics';
import { events } from './events';
import transport from './transport-data.json';
import { locales, eventPath, transportPath, type Locale } from './paths';
import type { SiteContent } from './types';
const guides = [...travelGuides, ...practicalGuides, ...peninsulaGuides, ...experienceGuides];
export { locales, type Locale };
export const languageNames = { tr: 'Türkçe', en: 'English', ru: 'Русский' };
export const languageTags = { tr: 'tr-TR', en: 'en', ru: 'ru' };
export const ogLocales = { tr: 'tr_TR', en: 'en_GB', ru: 'ru_RU' };
export const staticPaths: Record<string,[string,string]> = {
  '/':['/en','/ru'], '/rehber':['/en/travel-guide','/ru/putevoditel'],
  '/etkinlikler':['/en/events','/ru/sobytiya'], '/ulasim':['/en/transport','/ru/transport'],
  '/fotograf-galerisi':['/en/photo-gallery','/ru/fotogalereya'], '/datca-hava-durumu':['/en/weather','/ru/pogoda'], '/iletisim':['/en/contact','/ru/kontakty'],
  '/hakkimizda':['/en/about','/ru/o-proekte'], '/fotograf-kaynaklari':['/en/photo-credits','/ru/istochniki-fotografiy'],
  '/site-haritasi':['/en/sitemap','/ru/karta-sayta'], '/gizlilik':['/en/privacy','/ru/konfidentsialnost'],
  '/kaydedilenler':['/en/saved','/ru/izbrannoe'], '/tatil-planim':['/en/trip-planner','/ru/plan-poezdki'],
  '/arama':['/en/search','/ru/poisk'], '/kesfet':['/en/explore','/ru/otkryt'], '/404':['/en/404','/ru/404'],
};
type Variants = Record<Locale,string>;
const byPath = new Map<string,Variants>();
function register(tr:string,en:string,ru:string) {
  const variants = {tr,en,ru};
  for (const path of Object.values(variants)) {
    if (byPath.has(path)) throw new Error('Duplicate route: '+path);
    byPath.set(path,variants);
  }
}
for (const [base, translations] of Object.entries(staticPaths)) register(base,...translations);
for (const guide of guides) {
  const names = (articleRoutes as Record<string,string[]>)[guide.slug];
  if (!names) throw new Error('Localized URL missing: '+guide.slug);
  register('/'+guide.slug, '/en/'+names[0], '/ru/'+names[1]);
}
for (const topic of topics) register('/kategori/'+topic.slug,'/en/category/'+topic.key,'/ru/kategoriya/'+topic.key);
for (const event of events) register(eventPath(event,'tr'),eventPath(event,'en'),eventPath(event,'ru'));
for (const route of transport.routes) register(transportPath(route.slug,'tr'),transportPath(route.slug,'en'),transportPath(route.slug,'ru'));

export function pagePath(path:string) { return path.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/\/+$/, '') || '/'; }
export function getLocale(path:string):Locale {
  const root = pagePath(path).split('/')[1];
  return root === 'en' || root === 'ru' ? root : 'tr';
}
export function localePath(path:string, locale:Locale) {
  const [,pathname,suffix] = path.match(/^([^?#]*)(.*)$/)!;
  return (byPath.get(pagePath(pathname))?.[locale] || pathname) + suffix;
}
export function alternatePaths(path:string) {
  const variants = byPath.get(pagePath(path));
  return variants ? locales.map(locale=>({locale,path:variants[locale]})) : [];
}
const escape = (s:string) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const cache = new Map<Locale,SiteContent>();
export function getContent(locale:Locale = 'tr'):SiteContent {
  const cached = cache.get(locale);
  if (cached) return cached;
  const lang = locales.indexOf(locale);
  const categories = topics.map((group,index)=>({
    id:index+1, slug:group.slug, path:localePath('/kategori/'+group.slug,locale),
    name:group.name[lang], description:group.description[lang], parent:0,
    count:guides.filter(guide=>guide.groups.includes(group.key)).length,
  }));
  const articles = guides.map((guide,index)=>{
    const copy = guide[locale];
    const key = guide.photo === 'datca-limani' ? 'datca-liman' : guide.photo;
    return {
      id:index+1, slug:guide.slug, basePath:'/'+guide.slug, path:localePath('/'+guide.slug,locale),
      title:copy.title,excerpt:copy.summary, content:copy.sections.map(({heading,text})=>'<h2>'+escape(heading)+'</h2><p>'+escape(text)+'</p>').join(''),
      image:'/images/'+key+'.webp', imageAlt:photoCaption('/images/'+key+'.webp',locale), date:'2026-11-10', updatedDate:'2026-11-10',
      sources:[{title:guide.source.label,url:guide.source.url}],
      visitStops:visitNotes[guide.slug]?.[locale]?.stops, faqs:visitNotes[guide.slug]?.[locale]?.faqs,
      categories:guide.groups.map(id=>topics.findIndex(topic=>topic.key===id)+1),
    };
  });
  const content = {articles,categories}; cache.set(locale,content); return content;
}
