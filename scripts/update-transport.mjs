import { parse, parseFragment } from 'parse5';
import { writeFile, rename } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const origin = 'https://ulasim.muttas.com.tr';
const district = origin + '/hatlar/datca';
const airport = origin + '/hat/48-26-marmaris-otogar-dalaman-havalimani-440';
const ferry = origin + '/hat/48-48-bodrum-datca-371';
const havasUrl = 'https://havas.net/otobus-hizmetleri#bus-service-2';
const clock = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

const attr = (node, name) => node?.attrs?.find(entry => entry.name === name)?.value;
const has = (node, name) => (attr(node, 'class') || '').split(/\s+/).includes(name);
function find(node, test) {
  if (!node) return [];
  const results = test(node) ? [node] : [];
  return results.concat((node.childNodes || []).flatMap(child => find(child, test)));
}
const byClass = (node, name) => find(node, child => has(child, name));
const byTag = (node, name) => find(node, child => child.tagName === name);
function contents(node) {
  return node?.nodeName === '#text' ? node.value : (node?.childNodes || []).map(contents).join('');
}
const clean = node => contents(node).replace(/\s+/g, ' ').trim();
const htmlText = value => clean(parseFragment(String(value || ''))).replaceAll('\u200b', '');
const dateInIstanbul = date => new Intl.DateTimeFormat('sv-SE', {timeZone: 'Europe/Istanbul'}).format(date);

export function districtRoutes(html) {
  const urls = byTag(parse(html), 'a').map(link => attr(link, 'href'))
    .filter(url => url?.startsWith(origin + '/hat/') && /^\/hat\/[\da-z-]+$/.test(new URL(url).pathname));
  if (!urls.includes(origin + '/hat/48-16-datca-marmaris-432') || urls.length < 2) {
    throw new Error('Datça district route directory unavailable');
  }
  return [...new Set([...urls, airport, ferry])];
}

export function parseRoute(html, source, checked) {
  const doc = parse(html);
  const line = byClass(doc, 'line-detail')[0];
  const code = attr(line, 'data-line-code');
  const officialSlug = attr(line, 'data-line-slug');
  const title = clean(byTag(line, 'h1')[0]);
  const timetable = byClass(line, 'timetable')[0];
  if (!code || !title || !officialSlug || new URL(source).pathname !== '/hat/' + officialSlug || !timetable) {
    throw new Error('Missing or unexpected MUTTAŞ timetable at ' + source);
  }
  const notes = new Map();
  for (const info of byClass(line, 'information-item')) {
    const symbol = attr(find(info, child => attr(child, 'data-symbol'))[0], 'data-symbol');
    if (symbol) notes.set(symbol, clean(byTag(info, 'p')[0]));
  }
  const days = [];
  for (const dayNode of byClass(timetable, 'schedule-day')) {
    const label = clean(byTag(dayNode, 'h3')[0]);
    const dated = label.match(/(\d{2})\.(\d{2})\.(\d{4})/);
    const date = dated ? [dated[3],dated[2],dated[1]].join('-') : null;
    const directions = byClass(dayNode, 'direction-panel').map(panel => {
      const from = clean(byTag(panel, 'h4')[0]);
      const timed = byClass(panel, 'departure');
      const times = timed.map(departure => attr(departure,'data-time'));
      if (!from || times.some(time => !time || !clock.test(time))) throw new Error('Invalid departure at ' + source);
      const annotations = {};
      for (const departure of timed) {
        const suffix = byClass(departure, 'time-suffix')[0];
        const symbols = find(suffix, node => attr(node,'data-symbol'));
        const descriptions = symbols.map(node => notes.get(attr(node,'data-symbol')) || attr(node,'aria-label'));
        const specific = attr(find(departure, node => attr(node,'data-note'))[0],'data-note');
        if (specific) descriptions.push(specific);
        if (descriptions.length) annotations[attr(departure,'data-time')] = descriptions.join(' ');
      }
      const flight = has(panel, 'variable-direction');
      if (!times.length && !flight && !clean(panel).match(/bulun|yok|yapılm/i)) throw new Error('Unknown empty direction at ' + source);
      return {from, times, ...(flight && {flight:true}), ...(Object.keys(annotations).length && {annotations})};
    });
    if (!label || !directions.length) throw new Error('Unrecognized schedule day at ' + source);
    const day = {label, date, directions};
    if (!days.some(existing => JSON.stringify(existing) === JSON.stringify(day))) days.push(day);
  }
  if (!days.length && !clean(timetable).includes('Güncel sefer saati bulunamadı')) throw new Error('Unrecognized empty timetable at ' + source);
  const modified = byTag(doc,'meta').find(node => attr(node,'name') === 'last-modified');
  const stops = find(line, node => attr(node, 'id') === 'section-stops')[0];
  const routeText = clean(byClass(stops, 'notranslate')[0]);
  return {
    slug: officialSlug.slice(code.length + 1).replace(/-\d+$/, '') + '-' + code,
    code, title,
    kind: source === ferry ? 'ferry' : source === airport ? 'airport' : code.startsWith('48-') || code === '9-6' ? 'intercity' : 'local',
    source, sourceUpdated: attr(modified,'content') || null, checked, via:routeText, days
  };
}

export function parseHavasDirection(info, from) {
  if (typeof info?.statusCode !== 'string') throw new Error('Missing Havaş service status');
  if (info.statusCode !== 'HizmetVeriyor') {
    const note = htmlText(info.statusNote);
    if (!note) throw new Error('Unrecognized Havaş status');
    return {from,times:[],note};
  }
  if (info.timeDataEntryTypeCode === 'Saatlik') {
    if (!Array.isArray(info.timeList) || info.timeList.some(time => !clock.test(time))) throw new Error('Invalid Havaş scheduled times');
    return {from, times:[...new Set(info.timeList)]};
  }
  const note = htmlText(info.informationNote);
  if (!note) throw new Error('Missing Havaş schedule condition');
  return {from, times:[], note};
}

async function request(url, options={}) {
  let failure;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, {...options, headers:{'User-Agent':'datca.day transport guide (https://datca.day/ulasim)', ...options.headers}, signal:AbortSignal.timeout(20000)});
      if (!response.ok) throw new Error('HTTP ' + response.status + ' at ' + url);
      return response;
    } catch (error) {
      failure = error;
      if (attempt < 2) await new Promise(resolve => setTimeout(resolve, 1200 * (attempt + 1)));
    }
  }
  throw failure;
}

async function fetchHavas(checked) {
  const days = [];
  for (let offset = 0; offset < 7; offset++) {
    const date = new Date(Date.parse(checked + 'T12:00:00Z') + offset * 86400000).toISOString().slice(0,10);
    const directions = [];
    // Station IDs from the departure/destination selectors of Havaş's public bus service form.
    for (const [startStationId, stopStationId, from] of [[17,16,'Marmaris'],[16,17,'Dalaman Havalimanı']]) {
      const response = await request('https://busrouteapi.havas.net/api/web/bus-route/get-bus-route-detail', {
        method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({lang:'tr', startStationId, stopStationId, date})
      });
      const {result, resultData} = await response.json();
      if (!result) throw new Error('Havaş did not return a service for ' + date);
      directions.push(parseHavasDirection(resultData, from));
    }
    days.push({label:date, date, directions});
  }
  return {slug:'marmaris-dalaman-havas',code:'Havaş',title:'Marmaris - Dalaman Havalimanı',kind:'airport',source:havasUrl,sourceUpdated:null,checked,via:'Marmaris - Gökova - Köyceğiz - Ortaca - Dalaman - Dalaman Havalimanı',days};
}

async function update() {
  const checked = dateInIstanbul(new Date());
  const urls = districtRoutes(await (await request(district)).text());
  const routes = [];
  for (const source of urls) routes.push(parseRoute(await (await request(source)).text(),source,checked));
  routes.push(await fetchHavas(checked));
  if (new Set(routes.map(route => route.slug)).size !== routes.length) throw new Error('Duplicate transport route slug');
  // Replace only after every source has validated, so a partial response cannot erase the last snapshot.
  const target = new URL('../src/lib/transport-data.json', import.meta.url);
  const temp = new URL('./transport-data.' + process.pid + '.tmp', target);
  await writeFile(temp, JSON.stringify({routes}, null, 2) + '\n');
  await rename(temp, target);
  console.info('Verified ' + routes.length + ' official routes for ' + checked);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await update();
}
