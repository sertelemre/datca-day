import { clientUI } from '../lib/ui';
import { loadSaved } from './site';

interface Place {
  path: string;
  basePath: string;
  title: string;
  image: string;
  excerpt?: string;
  searchable?: boolean;
}
interface Day { id: string; items: Place[]; notes: string }

const t = clientUI();
const byId = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const places: Place[] = JSON.parse(byId('search-index').textContent || '[]').filter((p: Place) => p.searchable !== false);
const byPath = new Map(places.flatMap(place => [[place.path, place], [place.basePath, place]] as const));
const planKey = 'datca.day:plan';
const activeKey = 'datca.day:plan:active';
const maxDays = 14;
const pageSize = 10;
const newDay = (): Day => ({ id: crypto.randomUUID(), items: [], notes: '' });
const dayLabel = (number: number) => t('{n}. Gün', { n: number });
const search = byId<HTMLInputElement>('trip-search');
const tabs = byId('trip-days');
const route = byId('trip-route');
const note = byId<HTMLDetailsElement>('trip-note');
const noteInput = byId<HTMLTextAreaElement>('trip-note-input');
const candidates = byId('trip-candidates');
const results = byId('trip-results');
const picker = byId('trip-picker');
const sheet = byId<HTMLDialogElement>('trip-sheet');
const confirm = byId<HTMLDialogElement>('trip-confirm');
const options = byId<HTMLDetailsElement>('trip-day-options');
const openPicker = byId<HTMLButtonElement>('trip-open-picker');
const compact = matchMedia('(max-width: 760px), (pointer: coarse) and (max-width: 1000px)');

function readPlan(): Day[] {
  try {
    const stored = JSON.parse(localStorage.getItem(planKey) || 'null');
    const seen = new Set<string>();
    if (Array.isArray(stored)) {
      const restored: Day[] = [];
      for (const day of stored) {
        if (!day || typeof day.id !== 'string' || !Array.isArray(day.items)) continue;
        const id = seen.has(day.id) ? newDay().id : day.id;
        seen.add(id);
        const items = day.items.map((entry: Partial<Place> | null) => byPath.get(entry?.basePath || entry?.path || '')).filter(Boolean);
        restored.push({ id, notes: typeof day.notes === 'string' ? day.notes : '', items: [...new Set<Place>(items)] });
      }
      if (restored.length) return restored;
    }
  } catch { /* A new plan also works when storage is unavailable. */ }
  return [newDay(), newDay(), newDay()];
}
let days = readPlan();
let active = days[0];
try { active = days.find(day => day.id === sessionStorage.getItem(activeKey)) || active; } catch { /* Session storage is optional. */ }
let source: 'saved' | 'all' = 'all';
let limit = pageSize;

function announce(message: string) {
  byId(sheet.open ? 'trip-picker-status' : 'trip-status').textContent = message;
}
function save() {
  const state = byId('trip-save-state');
  try {
    localStorage.setItem(planKey, JSON.stringify(days.map(day => ({
      ...day, items: day.items.map(place => ({ path: place.basePath || place.path }))
    }))));
    state.textContent = t('Planın bu tarayıcıda otomatik kaydedilir.');
  } catch {
    state.textContent = t('Tarayıcı depolaması kapalı; planın kaydedilemedi.');
    announce(state.textContent);
  }
}
function clone<T extends HTMLElement>(name: string) {
  return byId<HTMLTemplateElement>('trip-' + name + '-template').content.firstElementChild!.cloneNode(true) as T;
}
function placeName(place: Place) {
  const separator = place.title.indexOf(':');
  return separator === -1 ? [place.title, ''] : [place.title.slice(0, separator), place.title.slice(separator + 1).trim()];
}
function setPhoto(element: HTMLElement, place: Place) {
  const file = place.image || '/images/hero-datca.webp';
  element.querySelector('img')!.src = file.replace(/^(\/images\/[\w-]+)\.webp$/, '$1-640.webp');
}
function fillPlace(row: HTMLElement, place: Place) {
  const [name, detail] = placeName(place);
  row.querySelector('a')!.href = place.path;
  row.querySelector('strong')!.textContent = name;
  row.querySelector('small')!.textContent = detail;
  setPhoto(row, place);
}
function renderTabs() {
  tabs.replaceChildren(...days.map((day, index) => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.dataset.day = day.id;
    tab.setAttribute('aria-pressed', String(day === active));
    tab.textContent = dayLabel(index + 1);
    if (day.items.length) {
      const count = document.createElement('span');
      count.textContent = String(day.items.length);
      tab.append(count);
      tab.setAttribute('aria-label', dayLabel(index + 1) + ', ' + t('{n} durak', { n: day.items.length }));
    }
    return tab;
  }));
  const current = tabs.querySelector<HTMLElement>('[aria-pressed=true]')!;
  const delta = current.getBoundingClientRect().right - tabs.getBoundingClientRect().right;
  if (delta > 0) tabs.scrollLeft += delta + 3;
  if (current.getBoundingClientRect().left < tabs.getBoundingClientRect().left) tabs.scrollLeft += current.getBoundingClientRect().left - tabs.getBoundingClientRect().left - 3;
}
const ideasByDay = [
  [{ path: '/palamutbuku', name: 'Palamutbükü' }, { path: '/eski-datca', name: 'Eski Datça' }],
  [{ path: '/knidos-antik-kenti', name: 'Knidos' }, { path: '/ovabuku', name: 'Ovabükü' }],
  [{ path: '/kargi-koyu', name: 'Kargı Koyu' }, { path: '/datca-limani', name: 'Datça Limanı' }]
];
function renderDay() {
  const index = days.indexOf(active);
  byId('trip-day-total').textContent = t('{n} gün', { n: days.length });
  byId('trip-stop-total').textContent = t('{n} durak', { n: days.reduce((sum, day) => sum + day.items.length, 0) });
  byId('trip-day-title').textContent = dayLabel(index + 1);
  byId('trip-destination').textContent = t('Seçtiğin yerler {n}. güne eklenir.', { n: index + 1 });
  byId<HTMLButtonElement>('trip-earlier').disabled = index === 0;
  byId<HTMLButtonElement>('trip-later').disabled = index === days.length - 1;
  byId<HTMLButtonElement>('trip-delete-day').disabled = days.length === 1;
  const addDay = byId<HTMLButtonElement>('trip-add-day');
  addDay.disabled = days.length >= maxDays;
  addDay.title = addDay.disabled ? t('Planına en fazla 14 gün ekleyebilirsin.') : '';
  byId('trip-suggestions').hidden = active.items.length !== 0;
  const ideas = byId('trip-ideas');
  ideas.replaceChildren();
  if (!active.items.length) {
    for (const { path, name } of ideasByDay[index % ideasByDay.length]) {
      const place = byPath.get(path);
      if (!place) continue;
      const button = clone<HTMLButtonElement>('idea');
      button.dataset.place = place.path;
      button.setAttribute('aria-label', t('{title} seçili güne ekle', { title: place.title }));
      button.querySelector('strong')!.textContent = t(name);
      setPhoto(button, place);
      ideas.append(button);
    }
  }
  route.replaceChildren(...active.items.map((place, i) => {
    const row = clone<HTMLLIElement>('stop');
    row.dataset.place = place.path;
    fillPlace(row, place);
    row.querySelector('.trip-order')!.textContent = String(i + 1).padStart(2, '0');
    row.querySelector('summary')!.setAttribute('aria-label', t('{title} için durak seçenekleri', { title: place.title }));
    row.querySelector<HTMLButtonElement>('[data-action=earlier]')!.disabled = i === 0;
    row.querySelector<HTMLButtonElement>('[data-action=later]')!.disabled = i === active.items.length - 1;
    return row;
  }));
  noteInput.value = active.notes;
  renderTabs();
  updateAddButtons();
}
function selectDay(day: Day) {
  active = day;
  try { sessionStorage.setItem(activeKey, day.id); } catch { /* The selection remains in memory. */ }
  options.open = false;
  note.open = Boolean(day.notes);
  renderDay();
  tabs.querySelector<HTMLButtonElement>('[aria-pressed=true]')!.focus({ preventScroll: true });
}
function updateAddButtons() {
  const selected = new Set(active.items.map(place => place.path));
  candidates.querySelectorAll<HTMLButtonElement>('[data-place]').forEach(button => {
    const place = byPath.get(button.dataset.place!)!;
    const added = selected.has(place.path);
    button.setAttribute('aria-disabled', String(added));
    button.setAttribute('aria-label', t(added ? '{title} bu güne eklendi' : '{title} seçili güne ekle', { title: place.title }));
  });
}
const fold = (value: string) => value.toLocaleLowerCase(document.documentElement.lang).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i');
function renderCandidates() {
  const collection = source === 'saved' ? loadSaved().map(entry => byPath.get(entry.path)).filter((p): p is Place => !!p) : places;
  const query = fold(search.value.trim());
  const matches = collection.filter(p => fold([p.title, p.excerpt, p.basePath].join(' ')).includes(query));
  candidates.replaceChildren(...matches.slice(0, limit).map(place => {
    const row = clone<HTMLLIElement>('place');
    fillPlace(row, place);
    row.querySelector('button')!.dataset.place = place.path;
    return row;
  }));
  updateAddButtons();
  const empty = byId('trip-no-results');
  empty.hidden = matches.length > 0;
  empty.textContent = source === 'saved' && !collection.length
    ? t('Önce sevdiğin yerlerdeki kalbe dokun. Kaydettiklerin burada görünecek.')
    : t('Bu aramada bir yer bulunamadı.');
  byId('trip-more').hidden = matches.length <= limit;
}
function resetResults() {
  limit = pageSize;
  results.scrollTop = 0;
  renderCandidates();
}
function addPlace(place: Place) {
  if (active.items.includes(place)) return;
  active.items.push(place);
  renderDay();
  announce(t('{title}, {n}. güne eklendi.', { title: placeName(place)[0], n: days.indexOf(active) + 1 }));
  save();
}
byId('trip-ideas').addEventListener('click', event => {
  const button = (event.target as Element).closest<HTMLElement>('[data-place]');
  if (!button) return;
  addPlace(byPath.get(button.dataset.place!)!);
  openPicker.focus({ preventScroll: true });
});
candidates.addEventListener('click', event => {
  const button = (event.target as Element).closest<HTMLButtonElement>('[data-place]');
  if (button) addPlace(byPath.get(button.dataset.place!)!);
});
search.addEventListener('input', resetResults);
picker.querySelectorAll<HTMLButtonElement>('[data-source]').forEach(button => {
  button.addEventListener('click', () => {
    source = button.dataset.source as typeof source;
    picker.querySelectorAll('[data-source]').forEach(el => el.setAttribute('aria-pressed', String(el === button)));
    resetResults();
  });
});
byId('trip-more').addEventListener('click', () => {
  const firstNew = candidates.children.length;
  limit += pageSize;
  renderCandidates();
  candidates.children[firstNew]?.querySelector('a')?.focus();
});
document.addEventListener('saved-updated', () => { if (source === 'saved') renderCandidates(); });
tabs.addEventListener('click', event => {
  const tab = (event.target as Element).closest<HTMLButtonElement>('[data-day]');
  if (tab) selectDay(days.find(day => day.id === tab.dataset.day)!);
});
byId('trip-add-day').addEventListener('click', () => {
  if (days.length >= maxDays) return;
  const day = newDay();
  days.push(day);
  selectDay(day);
  save();
});
function moveDay(offset: number) {
  const i = days.indexOf(active);
  days.splice(i, 1);
  days.splice(i + offset, 0, active);
  selectDay(active);
  save();
}
byId('trip-earlier').addEventListener('click', () => moveDay(-1));
byId('trip-later').addEventListener('click', () => moveDay(1));
let pendingDelete: Day | undefined;
function removeDay(day: Day) {
  if (days.length === 1 || !days.includes(day)) return;
  const i = days.indexOf(day);
  days.splice(i, 1);
  selectDay(days[Math.min(i, days.length - 1)]);
  save();
}
byId('trip-delete-day').addEventListener('click', () => {
  options.open = false;
  if (!active.items.length && !active.notes) { removeDay(active); return; }
  pendingDelete = active;
  byId('trip-confirm-title').textContent = t('{n}. gün silinsin mi?', { n: days.indexOf(active) + 1 });
  confirm.returnValue = 'cancel';
  confirm.showModal();
});
confirm.addEventListener('close', () => {
  if (confirm.returnValue === 'delete' && pendingDelete) removeDay(pendingDelete);
  else options.querySelector('summary')!.focus();
  pendingDelete = undefined;
});
document.addEventListener('click', event => {
  document.querySelectorAll<HTMLDetailsElement>('.trip-options[open]').forEach(el => {
    if (!el.contains(event.target as Node)) el.open = false;
  });
});
document.addEventListener('keydown', event => {
  const menu = (event.target as Element).closest<HTMLDetailsElement>('.trip-options[open]');
  if (event.key === 'Escape' && menu) { menu.open = false; menu.querySelector('summary')!.focus(); }
});
route.addEventListener('click', event => {
  const button = (event.target as Element).closest<HTMLButtonElement>('[data-action]');
  if (!button) return;
  const row = button.closest<HTMLElement>('[data-place]')!;
  const i = active.items.indexOf(byPath.get(row.dataset.place!)!);
  const [place] = active.items.splice(i, 1);
  const action = button.dataset.action;
  if (action !== 'remove') active.items.splice(action === 'earlier' ? i - 1 : i + 1, 0, place);
  renderDay();
  const next = action === 'remove' ? Math.min(i, active.items.length - 1) : active.items.indexOf(place);
  (route.children[next]?.querySelector('summary') || openPicker).focus();
  save();
});
noteInput.addEventListener('input', () => { active.notes = noteInput.value; save(); });

function sizeSheet() {
  if (!sheet.open || !window.visualViewport) return;
  const { height, offsetTop } = window.visualViewport;
  sheet.style.setProperty('--trip-visible', height + 'px');
  sheet.style.setProperty('--trip-keyboard', Math.max(0, window.innerHeight - height - offsetTop) + 'px');
}
openPicker.addEventListener('click', () => {
  if (compact.matches) {
    sheet.append(picker);
    sheet.showModal();
    sizeSheet();
    picker.querySelector<HTMLButtonElement>('.trip-close')!.focus({ preventScroll: true });
  } else search.focus();
});
// Keep the software keyboard in place while a touch selects a result.
// Otherwise Safari can move the sheet between successive taps.
picker.addEventListener('pointerdown', event => {
  if (sheet.open && event.pointerType === 'touch' && document.activeElement === search && (event.target as Element).closest('button')) {
    event.preventDefault();
  }
});
sheet.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    event.preventDefault();
    sheet.close();
  }
});
sheet.addEventListener('close', () => {
  byId('trip-dock').append(picker);
  openPicker.focus({ preventScroll: true });
});
sheet.addEventListener('click', event => { if (event.target === sheet) sheet.close(); });
picker.querySelectorAll('.trip-close, .trip-done').forEach(button => button.addEventListener('click', () => sheet.close()));
compact.addEventListener('change', () => { if (sheet.open && !compact.matches) sheet.close(); });
window.visualViewport?.addEventListener('resize', sizeSheet);
window.visualViewport?.addEventListener('scroll', sizeSheet);

function renderPrint() {
  byId('trip-print-days').replaceChildren(...days.map((day, i) => {
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    heading.textContent = dayLabel(i + 1);
    section.append(heading);
    const list = document.createElement('ol');
    for (const place of day.items) { const li = document.createElement('li'); li.textContent = place.title; list.append(li); }
    const notes = document.createElement('p');
    notes.textContent = day.notes;
    section.append(list, notes);
    return section;
  }));
}
window.addEventListener('beforeprint', renderPrint);
byId('trip-print').addEventListener('click', () => window.print());
window.addEventListener('storage', event => {
  if (event.key !== planKey && event.key !== null) return;
  days = readPlan();
  active = days.find(day => day.id === active.id) || days[0];
  note.open = Boolean(active.notes) || document.activeElement === noteInput;
  renderDay();
});
note.open = Boolean(active.notes);
renderDay();
renderCandidates();
