import { createHash } from 'node:crypto';
import { parse } from 'parse5';

function nodes(root, predicate, found = []) {
  if (predicate(root)) found.push(root);
  for (const child of root.childNodes || []) nodes(child, predicate, found);
  return found;
}
const attr = (node, key) => node.attrs?.find(item => item.name === key)?.value || '';
const content = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(content).join(' ');
const words = value => String(value || '').replace(/\s+/g, ' ').trim();
const label = node => words(content(node));
const fold = str => words(str).toLocaleLowerCase('tr').normalize('NFD').replace(/\p{M}/gu, '').replaceAll('ı', 'i');
const district = value => /\bdatca\b/.test(fold(value));
const months = 'ocak şubat mart nisan mayıs haziran temmuz ağustos eylül ekim kasım aralık'.split(' ');
const pad = n => String(n).padStart(2, '0');

export function validDay(day) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return false;
  const date = new Date(day + 'T12:00:00Z');
  return Number.isFinite(date.valueOf()) && date.toISOString().slice(0, 10) === day;
}
export function localDay(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {timeZone:'Europe/Istanbul', year:'numeric',month:'2-digit',day:'2-digit'}).format(date);
}
function fromTurkish(day, month, year) {
  return [year, pad(months.findIndex(name => fold(name) === fold(month)) + 1), pad(day)].join('-');
}
function allowedLink(raw, sourceUrl, host = new URL(sourceUrl).hostname) {
  const url = new URL(raw || sourceUrl, sourceUrl);
  if (url.protocol !== 'https:' || url.hostname !== host || url.username || url.password || url.port) throw Error('Unexpected event URL');
  return url.href;
}
function poster(image, base) {
  if (Array.isArray(image)) return image.map(item => poster(item,base)).find(Boolean);
  if (image && typeof image === 'object') return poster(image.contentUrl || image.url,base);
  if (!image || typeof image !== 'string') return undefined;
  try {
    const url = new URL(image,base);
    const hosts = new Set([new URL(base).hostname,'b6s54eznn8xq.merlincdn.net']);
    if (new URL(base).hostname === 'dancevents.net' && url.pathname.startsWith('/dancevents.net/events/')) hosts.add('s3.eu-west-1.amazonaws.com');
    if (url.protocol === 'https:' && hosts.has(url.hostname) && !url.username && !url.password && !url.port && !/og-kapak|sample-images|logo\.|\/avatar\/|placeholder/i.test(url.pathname)) return url.href;
  } catch {}
  return undefined;
}
function flatten(value, objects) {
  if (Array.isArray(value)) return value.forEach(child => flatten(child, objects));
  if (!value || typeof value !== 'object') return;
  if (value['@type']) objects.push(value);
  for (const child of Object.values(value)) flatten(child, objects);
}
function schemas(doc) {
  const objects = [];
  for (const el of nodes(doc,n => n.tagName === 'script' && attr(n,'type') === 'application/ld+json')) {
    flatten(JSON.parse(content(el)), objects);
  }
  return objects;
}
function category(value) {
  const name = fold(value);
  if (/tiyatro|theater|stand[ -]?up/.test(name)) return 'theatre';
  if (/yuzme|satranc|spor|kosu|sports/.test(name)) return 'sport';
  if (/festival/.test(name)) return 'festival';
  if (/atolye|sergi/.test(name)) return 'arts';
  if (/konser|muzik|music|orkestra|dinleti|\bdj\b|sarkilari/.test(name)) return 'music';
  if (/\bdans\b|dance/.test(name)) return 'dance';
  if (/sahne/.test(name)) return 'theatre';
  if (/sinema|film|screening/.test(name)) return 'cinema';
  if (/cocuk|aile/.test(name)) return 'family';
  return 'other';
}
function schemaEvents(objects, page, source, dateOnly = false) {
  const result = [];
  for (const row of objects) {
    if (![].concat(row['@type']).some(type => /Event$|^Festival$/.test(type))) continue;
    const location = Array.isArray(row.location) ? row.location[0] : row.location;
    const address = location?.address;
    const addressText = typeof address === 'string' ? address : [address?.streetAddress,address?.addressLocality].join(' ');
    if (!location?.name) continue;
    // Some Datça venue profiles report only the province in the address.
    const namedVenue = source.venueAliases?.some(name => fold(name) === fold(location.name)) &&
      fold(address?.addressLocality) === 'mugla' && row.organizer?.url === source.url;
    if (!namedVenue && !district(location.name + ' ' + addressText)) continue;
    if (/Cancelled|Postponed|MovedOnline/.test(row.eventStatus || '')) continue;
    const moment = row.startDate?.match(/^(\d{4}-\d{2}-\d{2})(?:T(\d{2}:\d{2}))?/);
    if (!moment) throw Error('Missing event date');
    const time = !dateOnly && moment[2] && /\+03:00$/.test(row.startDate) ? moment[2] : undefined;
    const title = words(row.name).replace(/\s*— Datça Karia Tiyatro Zamanı$/, '');
    const cat = source.adapter === 'karia' ? 'theatre' : category([row.name,row['@type'],row.url].join(' '));
    const raw = {title, start:moment[1], end:row.endDate?.slice(0,10) || moment[1], time, venue:words(location.name), category:cat, url:allowedLink(row.url || page,source.url)};
    const endClock = !dateOnly && row.endDate?.match(/T(\d{2}:\d{2}):\d{2}\+03:00$/);
    if (endClock) raw.closeTime = endClock[1];
    if (source.adapter !== 'karia') raw.poster = poster(row.image,page);
    if (source.adapter === 'karia' && row.offers?.url) {
      const ticket = new URL(allowedLink(row.offers.url,source.url,'biletino.com'));
      ticket.searchParams.delete('s');
      raw.ticket = ticket.href;
    }
    result.push(raw);
  }
  return result;
}

async function municipal(doc, source, get) {
  if (!nodes(doc,n => n.tagName === 'h1' && label(n) === 'Etkinlikler').length) throw Error('Municipal calendar missing');
  // The visible card shows only day/month. Always use the year from the detail page.
  const urls = nodes(doc,n => n.tagName === 'a' && attr(n,'class').split(/\s+/).includes('event-card-v2'))
    .filter(n => !attr(n,'class').includes('is-past')).map(n => allowedLink(attr(n,'href'),source.url));
  if (!urls.length && !/etkinlik bulunamad|etkinlik yok/i.test(label(doc))) throw Error('Municipal listing has changed');
  const output = [];
  for (const url of new Set(urls)) {
    const detail = parse(await get(url));
    const objects = schemas(detail);
    if (!objects.some(object => object['@type'] === 'Event')) throw Error('Missing municipal detail');
    for (const row of schemaEvents(objects,url,source,true)) {
      // Some municipal metadata includes the CMS publishing time. Course dates in the written notice take precedence.
      const body = nodes(detail,n => attr(n,'class').split(' ').includes('content-html'))[0];
      const text = body ? label(body) : '';
      const period = text.match(/Kurs Süresi\s*:\s*(\d+) (\p{L}+) (\d{4})\s*[-–]\s*(\d+) (\p{L}+) (\d{4})/iu);
      if (period) {
        row.start = fromTurkish(...period.slice(1,4));
        row.end = fromTurkish(...period.slice(4,7));
        const hours = text.match(/Her Cuma günü\s*[|:]?\s*(\d\d:\d\d)\s*[-–]\s*(\d\d:\d\d)/i);
        if (hours) {
          row.schedule = 'friday';
          row.time = hours[1];
          row.closeTime = hours[2];
        }
      }
      output.push(row);
    }
  }
  return output;
}
function chess(doc, source) {
  if (!nodes(doc,n => attr(n,'id').includes('ilce-datca')).length) throw Error('Datça district section missing');
  const result = [];
  for (const node of nodes(doc,n => n.tagName === 'div')) {
    const parts = (node.childNodes || []).filter(n => n.tagName === 'div');
    if (parts.length !== 2) continue;
    const when = label(parts[0]);
    const match = when.match(/^(\d+)(?:\s*[-–]\s*(\d+))?\s+(\p{L}+)\s+(\d{4})\s*·\s*Datça$/iu);
    if (!match) continue; // The federation also publishes months with no confirmed day.
    const title = label(parts[1]).toLocaleLowerCase('tr').replace(/(^|\s)(\p{L})/gu, (_,space,ch) => space + ch.toLocaleUpperCase('tr'));
    result.push({title, start:fromTurkish(match[1],match[3],match[4]), end:fromTurkish(match[2] || match[1],match[3],match[4]), venue:'Datça', category:'sport', url:source.url + '#tsf7-ilce-datca'});
  }
  return result;
}
function race(doc, source) {
  const text = label(doc);
  const date = text.match(/calendar_today\s*(\d\d)\.(\d\d)\.(\d{4})\s*[—–-]\s*(\d\d:\d\d)/);
  const heading = nodes(doc,n => n.tagName === 'h2')[0];
  if (!heading || !date || !/location_on\s+MUĞLA\s*-\s*DATÇA/i.test(text)) throw Error('Race details changed');
  const day = [date[3],date[2],date[1]].join('-');
  const image = nodes(doc,n => n.tagName === 'img' && attr(n,'alt') === label(heading))[0];
  return [{title:label(heading), poster:image && poster(attr(image,'src'),source.url), start:day, end:day, time:date[4], venue:/Yazı\s*-\s*Knidos/i.test(text) ? 'Yazı – Knidos, Datça' : 'Datça', category:'sport', url:source.url}];
}
function isLocalPlace(obj) {
  return ['Place','PerformingArtsTheater'].includes(obj['@type']) && district([obj.name,obj.address?.streetAddress,obj.address?.addressLocality].join(' '));
}
function performanceDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) throw Error('Invalid performance date');
  const day = localDay(date);
  const time = new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'Europe/Istanbul'}).format(date);
  return {start:day,end:day,time};
}
function performancesFromBiletix(data, place, source) {
  return data.performanceItems.flatMap(item => {
    if (item.status === 's04_canceled') return [];
    if (!['s01_onsale','s02_soldout'].includes(item.status)) throw Error('Unrecognized Biletix performance status');
    if (fold(item.venueCity) !== 'mugla' || fold(place.name) !== fold(item.venueName)) return [];
    if (!/^[A-Z0-9]{5}$/.test(item.eventCode) || !/^\d+$/.test(item.performanceCode) || !Number.isSafeInteger(item.performanceDate)) throw Error('Unrecognized Biletix performance');
    const path = ['/performance',item.eventCode,item.performanceCode,'TURKIYE/tr'].join('/');
    return [{title:words(item.eventName),...performanceDate(item.performanceDate),venue:place.name,category:category(item.eventName),url:allowedLink(path,source.url)}];
  });
}
function performancesFromBubilet(doc, place, source) {
  const slug = new URL(source.url).pathname.split('/').pop();
  const chunks = nodes(doc,n => n.tagName === 'script').flatMap(el => {
    const transfer = content(el).match(/^self\.__next_f\.push\((\[.*\])\)\s*;?$/s);
    if (!transfer) return [];
    const payload = JSON.parse(transfer[1]);
    return typeof payload[1] === 'string' ? [payload[1]] : [];
  }).join('');
  const records = [];
  function visit(obj) {
    if (Array.isArray(obj)) { obj.forEach(visit); return; }
    if (!obj || typeof obj !== 'object') return;
    if (Array.isArray(obj.sessions) && obj.slug && obj.name) {
      for (const session of obj.sessions) {
        if (session.hideSession || session.venueSlug !== slug || session.citySlug !== 'mugla') continue;
        if (!/^[a-z0-9-]+$/.test(obj.slug) || !/(Z|[+-]\d{2}:\d{2})$/.test(session.date)) throw Error('Ambiguous Bubilet session');
        records.push({title:words(obj.name),...performanceDate(session.date),venue:place.name,category:category((obj.tags || []).map(tag => tag.name).join(' ')),url:allowedLink('/mugla/etkinlik/' + obj.slug,source.url)});
      }
      return;
    }
    Object.values(obj).forEach(visit);
  }
  for (const line of chunks.split('\n')) {
    const json = line.replace(/^[a-f0-9]+:/i,'');
    if (!json.includes('"sessions"') || !/^[{[]/.test(json)) continue;
    visit(JSON.parse(json));
  }
  return records;
}
async function venue(doc, source, get) {
  const objects = schemas(doc);
  const places = objects.filter(isLocalPlace);
  if (!places.length) throw Error('Local venue identity missing');
  if (source.adapter === 'bubilet') {
    const rows = [...schemaEvents(objects,source.url,source), ...performancesFromBubilet(doc,places[0],source)];
    if (!rows.length && !/aktif etkinlik bulunmamaktadır/i.test(label(doc))) throw Error('Venue schedule requires review');
    return rows;
  }
  if (source.adapter === 'biletix') {
    const state = nodes(doc,n => n.tagName === 'script' && attr(n,'id') === 'ng-state')[0];
    const code = new URL(source.url).pathname.split('/')[2];
    const reply = state && Object.values(JSON.parse(content(state))).find(item => item?.u?.endsWith('/getAllEventsDetailByVenueCode/' + code + '/tr'));
    const data = reply?.b?.data;
    if (reply?.b?.status !== 'SUCCESS' || data?.venueId !== code || !Array.isArray(data.performanceItems)) throw Error('Biletix schedule unavailable');
    return performancesFromBiletix(data,places[0],source);
  }
  const place = places[0];
  // Ticket-site venue indexes shift some times by three hours. The show detail lists the local performance.
  const listed = place.event || [];
  if (!Array.isArray(listed)) throw Error('Venue event list changed');
  const output = [];
  for (const url of new Set(listed.map(row => allowedLink(row.url,source.url)))) {
    const objects = schemas(parse(await get(url)));
    if (!objects.some(row => /Event$/.test(row['@type']))) throw Error('Ticket detail missing');
    output.push(...schemaEvents(objects,url,source));
  }
  return output;
}
async function jollin(doc, source, get, cutoff) {
  const main = nodes(doc,n => n.tagName === 'main')[0];
  if (!main || !schemas(doc).some(row => row['@type'] === 'Organization' && row.url === source.url)) throw Error('Venue profile missing');
  const links = nodes(main,n => n.tagName === 'a' && /^\/etkinlik\/[^/]+\/$/.test(attr(n,'href')));
  if (!links.length && !/yaklaşan etkinlik yok/i.test(label(main))) throw Error('Venue programme missing');
  const output = [];
  const urls = new Set();
  for (const link of links) {
    if (source.kind === 'local' && !district(label(link))) continue;
    const pastDate = label(link).match(/\b(\d{1,2}) (\p{L}{3}) (\d{4})\b/u);
    if (pastDate && cutoff) {
      const month = months.find(name => fold(name.slice(0,3)) === fold(pastDate[2]));
      if (month && fromTurkish(pastDate[1],month,pastDate[3]) < cutoff) continue;
    }
    urls.add(allowedLink(attr(link,'href'),source.url));
  }
  for (const url of urls) {
    const detail = parse(await get(url));
    const announced = schemas(detail).filter(row => row['@type'] === 'Event' && row.url === url);
    if (!announced.length) throw Error('Event announcement missing');
    for (const event of announced.filter(row => row.organizer?.url === source.url)) {
      const address = event.location?.address;
      if (address?.addressRegion && fold(address.addressRegion) !== 'mugla') continue;
      const [row] = schemaEvents([event],url,source);
      if (!row) continue;
      if (row.category === 'other' || /sahne/i.test(row.title)) row.category = category([row.title,event.description].join(' '));
      // The regional programme sometimes appends the full street address to the venue name.
      if (event.location.name === event.location.address?.streetAddress) row.venue = words(row.venue.split(',')[0]);
      output.push(row);
    }
  }
  return output;
}

async function danceProgramme(doc, source, get) {
  const place = schemas(doc).find(row => [].concat(row['@type']).includes('DanceHall') && row.url === source.url && district(row.address?.addressLocality));
  if (!place) throw Error('Datça dance venue missing');
  const links = nodes(doc,n => n.tagName === 'a' && /^\/events\/[^/]+\/\d{4}-\d{2}-\d{2}$/.test(attr(n,'href')));
  if (!links.length && !/no upcoming events|upcoming events\s*\(\s*0\s*\)/i.test(label(doc))) throw Error('Dated dance programme missing');
  const rows = [];
  for (const url of new Set(links.map(link => allowedLink(attr(link,'href'),source.url)))) {
    const events = schemas(parse(await get(url)));
    const day = url.slice(-10);
    const event = events.find(row => row['@type'] === 'Event' && row.startDate?.slice(0,10) === day && row.location?.url === place.url);
    if (!event) throw Error('Dance performance does not match venue and date');
    const [row] = schemaEvents([event],url,source);
    if (!row) continue;
    // These venue-local times have no offset. The club's written hours take priority over calendar defaults.
    const written = event.description?.match(/her\s+(?:pazartesi|salı|çarşamba|perşembe|cuma(?:rtesi)?|pazar)(?!\p{L})[^\d\n]*(\d\d:\d\d)\s*[-–]\s*(\d\d:\d\d)/iu);
    row.time = written?.[1] || event.startDate.slice(11,16);
    row.closeTime = written?.[2] || event.endDate?.slice(11,16);
    if (written && row.closeTime < row.time) row.end = new Date(Date.parse(day + 'T12:00:00Z') + 86400000).toISOString().slice(0,10);
    rows.push({...row,url,category:'dance'});
  }
  return rows;
}

export async function readSource(source, get, cutoff) {
  const doc = parse(await get(source.url));
  if (source.adapter === 'jollin') return jollin(doc,source,get,cutoff);
  if (source.adapter === 'dance') return danceProgramme(doc,source,get);
  if (source.adapter === 'council') return municipal(doc,source,get);
  if (source.adapter === 'chess') return chess(doc,source);
  if (source.adapter === 'race') return race(doc,source);
  if (source.adapter === 'karia') {
    const objects = schemas(doc);
    if (!objects.some(row => row['@type'] === 'Organization' && district(row.name)) || !objects.some(row => row['@type'] === 'TheaterEvent')) throw Error('Theatre programme unavailable');
    const posters = nodes(doc,n => n.tagName === 'img');
    return schemaEvents(objects, source.url + '#program', source).map(row => {
      const image = posters.find(n => fold(attr(n,'alt')) === fold(row.title + ' afişi'));
      return image ? {...row,poster:poster(attr(image,'src'),source.url)} : row;
    });
  }
  return venue(doc,source,get);
}
export function normalize(row, source, day) {
  if (!row.title || !row.venue || !validDay(row.start) || !validDay(row.end) || row.end < row.start || [row.time, row.closeTime].some(value => value && !/^([01]\d|2[0-3]):[0-5]\d$/.test(value))) throw Error('Incomplete event data');
  const unique = [source.id,fold(row.title),row.start,row.time || '',fold(row.venue)].join('|');
  return {id:createHash('sha256').update(unique).digest('hex').slice(0,12), ...row, url:allowedLink(row.url,source.url), sourceId:source.id, checked:day};
}
export function mergeRows(rows, cutoff) {
  const found = new Map();
  for (const row of rows.filter(row => row.end >= cutoff)) {
    const title = words(fold(row.title).replace(/\p{P}/gu,' '));
    const signature = [title,row.start,row.time || '',fold(row.venue).replace(/\bdatca\b/g,'').replace(/\W/g,'')].join('|');
    const existing = found.get(signature);
    if (!existing) found.set(signature,row);
    else if (!existing.poster && row.poster) found.set(signature,{...existing,poster:row.poster});
  }
  return [...found.values()].sort((a,b) => a.start.localeCompare(b.start) || (a.time || '').localeCompare(b.time || '') || a.id.localeCompare(b.id));
}
