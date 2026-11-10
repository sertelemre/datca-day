import { getContent,getLocale,type Locale } from './i18n';
import type { Article,Category } from './types';
import { topics } from './topics';

export function categoryImage(category:Category) { return '/images/'+(topics.find(topic=>topic.slug===category.slug)?.cover ?? 'hero-datca')+'.webp'; }
export function findArticle(slug:string,locale:Locale='tr') { return getContent(locale).articles.find(a=>a.slug===slug); }
export function findCategory(slug:string,locale:Locale='tr') { return getContent(locale).categories.find(c=>c.slug===slug); }
export function inCategory(article:Article, category:Category) { return article.categories.includes(category.id); }
export function categoryArticles(category:Category) { return getContent(getLocale(category.path)).articles.filter(a=>inCategory(a,category)); }
export function primaryCategory(article:Article) { return getContent(getLocale(article.path)).categories.find(c=>c.id===article.categories[0]); }
export function getRelated(article:Article) {
  return getContent(getLocale(article.path)).articles.filter(a=>a.id!==article.id)
    .map(item=>({item,score:item.categories.filter(id=>article.categories.includes(id)).length}))
    .filter(match=>match.score>0).sort((a,b)=>b.score-a.score).slice(0,3).map(match=>match.item);
}
export const navigation = [
  {name:'Keşfet',path:'/kategori/datca-cevresi'}, {name:'Turlar & Aktiviteler',path:'/kategori/gunluk-turlar'},
  {name:'Koylar & Plajlar',path:'/kategori/datca-koylari'}, {name:'Konaklama',path:'/datcada-nerede-kalinir'},
  {name:'Etkinlikler',path:'/etkinlikler'},
  {name:'Ulaşım',children:[
    {name:'Sefer saatleri',path:'/ulasim'},
    {name:'Taksi durakları',path:'/datca-taksi-duraklari'},
  ]},
  {name:'Sağlık ve eczaneler',children:[
    {name:'Tüm eczaneler',path:'/kategori/eczane-ve-saglik#pharmacy'},
    {name:'Nöbetçi eczane',path:'/kategori/eczane-ve-saglik#nobet-listesi'},
    {name:'Sağlık haritası',path:'/datca-saglik-rehberi'},
    {name:'Hastane ve poliklinikler',path:'/datca-saglik-rehberi#outpatient'},
    {name:'Aile sağlığı merkezleri',path:'/datca-saglik-rehberi#family'},
    {name:'Özel klinikler',path:'/datca-saglik-rehberi#private'},
  ]},
  {name:'Tatil Rehberi',path:'/rehber'},
];
