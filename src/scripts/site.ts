import { clientUI } from '../lib/ui';
import type { EventSearchEntry } from '../lib/search';
const t = clientUI();
interface Entry { path: string; basePath?:string; title: string; image: string; excerpt?: string; imageAlt?:string; searchable?:boolean; }
const key = 'datca.day:saved';
const index: Entry[] = JSON.parse(document.getElementById('search-index')?.textContent || '[]');
const eventSearchIndex: EventSearchEntry[] = JSON.parse(document.getElementById('event-search-index')?.textContent || '[]');
const matchEntry = (item:Entry) => index.find(a=>a.path===item.path || (a.basePath || a.path)===(item.basePath || item.path));
export const loadSaved = (): Entry[] => { try { const items = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(items) ? items.flatMap(x=>{const entry=x && typeof x.path==='string' ? matchEntry(x) : undefined;return entry ? [entry] : [];}) : []; } catch { return []; } };
const escape = (value: string) => value.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const safePath = (value: string) => value.startsWith('/') && !value.startsWith('//') ? value : '/';
const safeImage = (value: string) => value.startsWith('/images/') ? value : '/images/hero-datca.webp';
let toastTimer: ReturnType<typeof setTimeout>;
function notify(message:string) { const toast=document.getElementById('save-toast'); if(!toast)return; toast.textContent=message; toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),2800); }
function updateSaved() {
 const saved=loadSaved();
 document.querySelectorAll<HTMLButtonElement>('[data-save]').forEach(button=>{const active=saved.some(item=>item.path===button.dataset.save);button.setAttribute('aria-pressed',String(active));button.setAttribute('aria-label',t(active?'{title} kaydı kaldır':'{title} kaydet',{title:button.dataset.title || ''}))});
 document.querySelectorAll<HTMLElement>('[data-saved-count]').forEach(el=>{el.textContent=String(saved.length);el.hidden=!saved.length});
 const grid=document.getElementById('saved-grid');
 if(grid){grid.innerHTML=saved.map(item=>`<article class="travel-card"><div class="card-photo"><a href="${escape(safePath(item.path))}"><img src="${escape(safeImage(item.image))}" alt="${escape(item.imageAlt||item.title)}" loading="lazy" width="640" height="450"></a><button class="save-button" data-save="${escape(item.path)}" data-title="${escape(item.title)}" data-image="${escape(item.image)}" aria-label="${escape(t('{title} kaydı kaldır',{title:item.title}))}" aria-pressed="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg></button></div><div class="card-copy"><span class="eyebrow">${t('SENİN KEŞFİN')}</span><h3><a href="${escape(safePath(item.path))}">${escape(item.title)}</a></h3><a class="card-link" href="${escape(safePath(item.path))}">${t('Keşfet →')}</a></div></article>`).join('');const empty=document.getElementById('saved-empty');if(empty)empty.hidden=!!saved.length;const count=document.getElementById('saved-count');if(count)count.textContent=String(saved.length);const countLabel=document.getElementById('saved-count-label');if(countLabel)countLabel.textContent=t('kaydedilmiş rehber',{n:saved.length});const clear=document.getElementById('saved-clear');if(clear)clear.hidden=!saved.length;}
 document.dispatchEvent(new CustomEvent('saved-updated'));
}
document.addEventListener('click',event=>{
 const target=(event.target as Element).closest<HTMLButtonElement>('[data-save]');if(!target)return;
 const saved=loadSaved(),path=target.dataset.save!;const existing=saved.findIndex(item=>item.path===path);
 if(existing>=0){saved.splice(existing,1);notify(t('Kaydedilen yerlerden kaldırıldı.'));}else{const entry=index.find(a=>a.path===path);if(!entry)return;saved.push(entry);notify(t('Kaydedildi. Tatil planına bir adım daha yakın.'));}
 try{localStorage.setItem(key,JSON.stringify(saved.map(item=>({...item,path:item.basePath || item.path}))));updateSaved();}catch{notify(t('Tarayıcı depolaması kapalı. Kaydetme kullanılamıyor.'));}
});
document.getElementById('saved-clear')?.addEventListener('click',()=>{try{localStorage.setItem(key,'[]');updateSaved();notify(t('Kaydedilen yerler temizlendi.'));}catch{}});
window.addEventListener('storage',updateSaved);updateSaved();
const menu=document.querySelector<HTMLButtonElement>('.mobile-menu-button');menu?.addEventListener('click',()=>{const panel=document.getElementById('mobile-menu');if(panel){panel.hidden=!panel.hidden;menu.setAttribute('aria-expanded',String(!panel.hidden));menu.setAttribute('aria-label',t(panel.hidden?'Menüyü aç':'Menüyü kapat'))}});
const dialog=document.getElementById('search-dialog') as HTMLDialogElement;
const input=document.getElementById('modal-search-input') as HTMLInputElement;
const results=document.getElementById('search-results')!;
const fold=(text:string)=>text.toLocaleLowerCase(document.documentElement.lang).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i');
const currentEventEntry = (entry: EventSearchEntry) => {
 if (entry.kind !== 'event') return true;
 const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Istanbul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
 return !!entry.endDay && entry.endDay >= today && (!entry.endTimestamp || Date.parse(entry.endTimestamp) > Date.now());
};
const calendarIcon = '<span class="search-entry-icon" aria-hidden="true"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2ZM7 2v4M17 2v4M3 10h18"/></svg></span>';
const eventResult = (entry:EventSearchEntry) => `<a class="search-result search-event-result" href="${escape(safePath(entry.path))}">${calendarIcon}<span><small class="search-kind">${t(entry.kind==='transport'?'Sefer saatleri':'Etkinlikler')}</small><strong>${escape(entry.title)}</strong><small>${escape(entry.excerpt)}</small></span><span aria-hidden="true">→</span></a>`;
type SearchEntry = Entry | EventSearchEntry;
const score = (entry:SearchEntry, needle:string) => {const title=fold(entry.title);return title.startsWith(needle)?200:title.includes(needle)?100:10;};
function search(){const query=input.value.trim();if(!query){results.innerHTML='';return;}const needle=fold(query);const available:SearchEntry[]=[...index,...eventSearchIndex.filter(currentEventEntry)];const match=available.filter(a=>a.searchable!==false&&fold(a.title+' '+(a.excerpt||'')).includes(needle)).sort((a,b)=>score(b,needle)-score(a,needle)).slice(0,7);results.innerHTML=match.length?match.map(a=>'kind' in a?eventResult(a):`<a class="search-result" href="${escape(safePath(a.path))}"><img src="${escape(safeImage(a.image))}" alt="" width="63" height="55"><span><strong>${escape(a.title)}</strong><small>${escape(a.excerpt||'')}</small></span><span aria-hidden="true">→</span></a>`).join(''):`<p class="search-empty">${t('Bu aramada bir yer bulamadık. Başka bir kelime dene.')}</p>`;}
const eventSearchPage = document.querySelector<HTMLElement>('[data-event-search-page]');
const guideSearchInput = document.querySelector<HTMLInputElement>('#category-search');
function updateEventPageSearch() {
 if (!eventSearchPage || !guideSearchInput) return;
 const query=guideSearchInput.value.trim(), needle=fold(query);
 eventSearchPage.hidden=!query;
 const matches=query?eventSearchIndex.filter(entry=>currentEventEntry(entry)&&fold(`${entry.title} ${entry.excerpt}`).includes(needle)).sort((a,b)=>score(b,needle)-score(a,needle)):[];
 const list=eventSearchPage.querySelector<HTMLElement>('[data-event-search-results]');
 if(list)list.innerHTML=matches.slice(0,6).map(eventResult).join('');
 const summary=eventSearchPage.querySelector<HTMLElement>('[data-event-search-summary]');
 if(summary){summary.hidden=matches.length<=6;summary.textContent=t('{n} eşleşme; ilk {shown} sonuç gösteriliyor.',{n:matches.length,shown:6});}
 const empty=eventSearchPage.querySelector<HTMLElement>('[data-event-search-empty]');
 if(empty)empty.hidden=matches.length>0;
}
if(eventSearchPage&&guideSearchInput){
 document.querySelector('.category-toolbar')?.insertAdjacentElement('afterend',eventSearchPage);
 const query=new URLSearchParams(window.location.search).get('q');
 if(query&&!guideSearchInput.value)guideSearchInput.value=query;
 guideSearchInput.addEventListener('input',updateEventPageSearch);
 document.querySelector('#category-search-clear')?.addEventListener('click',()=>queueMicrotask(updateEventPageSearch));
 document.querySelector('#category-reset')?.addEventListener('click',()=>queueMicrotask(updateEventPageSearch));
 updateEventPageSearch();
}
const refreshSearch=()=>{if(dialog?.open&&input?.value.trim())search();updateEventPageSearch();};
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshSearch();});
window.setInterval(()=>{if(!document.hidden)refreshSearch();},60_000);
document.querySelectorAll('[data-open-search]').forEach(button=>button.addEventListener('click',()=>{dialog.showModal();input.focus()}));
document.querySelector('[data-close-search]')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close()}});
input?.addEventListener('input',search);
document.querySelectorAll<HTMLButtonElement>('[data-search-suggestion]').forEach(button=>button.addEventListener('click',()=>{input.value=button.dataset.searchSuggestion!;search();input.focus()}));
document.addEventListener('keydown',event=>{if((event.metaKey||event.ctrlKey)&&event.key==='k'){event.preventDefault();dialog.showModal();input.focus()}});
