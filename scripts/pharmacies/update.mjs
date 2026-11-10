import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { parse } from 'parse5';

export const source = 'https://www.muglaeczaciodasi.org.tr/nobetci-eczaneler';
const rosterFile = new URL('../../public/data/pharmacy-duty.json', import.meta.url);
const directoryFile = new URL('../../src/lib/pharmacies.json', import.meta.url);

const attribute = (node, key) => node.attrs?.find(attr => attr.name === key)?.value ?? '';
const words = node => node?.value ?? (node?.childNodes ?? []).map(words).join('');
function* elements(node) {
  if (node.tagName) yield node;
  for (const child of node.childNodes ?? []) yield* elements(child);
}
const hasClass = (node, name) => attribute(node, 'class').split(/\s+/).includes(name);
const nameKey = name => name.toLocaleLowerCase('tr').replaceAll('ı', 'i').normalize('NFD')
  .replace(/\p{M}/gu, '').replace(/eczanesi$/u, '').replace(/[^a-z]/g, '');
const phoneKey = phone => phone.replace(/\D/g, '').slice(-10);
const turkeyDay = date => new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Istanbul' }).format(date);
function instant(day, time) {
  const [d, m, y] = day.split('.');
  const stamp = y + '-' + m + '-' + d + 'T' + time + ':00+03:00';
  if (!Number.isFinite(Date.parse(stamp)) || turkeyDay(new Date(stamp)) !== stamp.slice(0, 10)) {
    throw new Error('Invalid published shift date: ' + stamp);
  }
  return stamp;
}

export function readShifts(html, directory, now) {
  const shifts = [];
  for (const row of elements(parse(html))) {
    if (!hasClass(row, 'nobetci')) continue;
    const nodes = [...elements(row)];
    const heading = nodes.find(n => n.tagName === 'h4');
    if (!/\s[-–]\s*DATÇA\s*$/iu.test(words(heading))) continue;
    const name = words(heading.childNodes.find(n => n.tagName === 'strong')).trim();
    const phone = attribute(nodes.find(n => attribute(n, 'href').startsWith('tel:')) ?? {}, 'href');
    const byName = directory.find(place => nameKey(place.name) === nameKey(name));
    const byPhone = directory.find(place => phoneKey(place.phone) === phoneKey(phone));
    if (!byName || (byPhone && byPhone.id !== byName.id)) throw new Error('Unrecognised Datça pharmacy: ' + name);
    const interval = words(nodes.find(n => hasClass(n, 'text-danger'))).trim();
    const match = interval.match(/^(\d{2}\.\d{2}\.\d{4})\s+(\d{2}:\d{2})\s*[-–]\s*(\d{2}\.\d{2}\.\d{4})\s+(\d{2}:\d{2})$/);
    if (!match) throw new Error('Missing shift times for ' + name);
    const start = instant(match[1], match[2]), end = instant(match[3], match[4]);
    const duration = Date.parse(end) - Date.parse(start);
    if (duration <= 0 || duration > 48 * 3600_000) throw new Error('Invalid shift length for ' + name);
    shifts.push({ id: byName.id, start, end });
  }
  if (!shifts.some(s => s.start.slice(0, 10) === turkeyDay(now) ||
    (Date.parse(s.start) <= now.getTime() && now.getTime() < Date.parse(s.end)))) {
    throw new Error('No current Datça roster on the chamber page');
  }
  return shifts;
}

export function mergeShifts(previous, fresh, now) {
  // Replace complete source days, including cancellations. Keep yesterday's
  // overnight duty when the chamber has already switched to today's list.
  const reportedDays = new Set(fresh.map(s => s.start.slice(0, 10)));
  const prior = previous.filter(s => !reportedDays.has(s.start.slice(0, 10)) && s.end.slice(0, 10) >= turkeyDay(now));
  return [...new Map([...prior, ...fresh].map(s => [s.id + s.start, s])).values()]
    .sort((a, b) => a.start.localeCompare(b.start) || a.id.localeCompare(b.id));
}

async function update() {
  const directory = JSON.parse(await readFile(directoryFile, 'utf8'));
  const previous = JSON.parse(await readFile(rosterFile, 'utf8'));
  const response = await fetch(source, { signal: AbortSignal.timeout(25000) });
  if (!response.ok) throw new Error('Chamber roster HTTP ' + response.status);
  const now = new Date();
  const shifts = mergeShifts(previous.shifts, readShifts(await response.text(), directory, now), now);
  await writeFile(rosterFile, JSON.stringify({ source, shifts }, null, 2) + '\n');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await update();
