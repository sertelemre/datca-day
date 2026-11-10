import type {Article,Category} from './types';
import {getLocale, languageTags, localePath} from './i18n';
import {ui} from './ui';
import {categoryImage} from './content';
export function articleSchema(article:Article,site:URL,category?:Category){
 const locale=getLocale(article.path);const t=ui(locale);const url=new URL(article.path,site).href;
 const crumbs=[{name:'datca.day',item:new URL(localePath('/',locale),site).href},...(category?[{name:category.name,item:new URL(category.path,site).href}]:[]),{name:article.title,item:url}];
 return {'@context':'https://schema.org','@graph':[
  {'@type':'Article','@id':`${url}#article`,mainEntityOfPage:url,headline:article.title,description:article.excerpt,image:new URL(article.image,site).href,inLanguage:languageTags[locale],datePublished:article.date,dateModified:article.updatedDate,author:{'@type':'Organization',name:t('datca.day editör ekibi'),url:new URL(localePath('/hakkimizda',locale),site).href},publisher:{'@type':'Organization','@id':`${site}#organization`,name:'datca.day',url:site.href}},
  {'@type':'BreadcrumbList',itemListElement:crumbs.map((crumb,index)=>({'@type':'ListItem',position:index+1,...crumb}))},
  ...(article.faqs?.length?[{'@type':'FAQPage',inLanguage:languageTags[locale],mainEntity:article.faqs.map(faq=>({'@type':'Question',name:faq.question,acceptedAnswer:{'@type':'Answer',text:faq.answer}}))}]:[])
 ]};
}
export function collectionSchema(category:Category,items:Article[],site:URL){return {'@context':'https://schema.org','@type':'CollectionPage',name:category.name,description:category.description,image:new URL(categoryImage(category),site).href,url:new URL(category.path,site).href,inLanguage:languageTags[getLocale(category.path)],mainEntity:{'@type':'ItemList',itemListElement:items.map((article,index)=>({'@type':'ListItem',position:index+1,url:new URL(article.path,site).href,name:article.title}))}};}
