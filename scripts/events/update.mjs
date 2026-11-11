import {readFile, writeFile, rename} from 'node:fs/promises';
import {readSource, normalize, localDay} from './adapters.mjs';

import {reconcileEvents} from './archive.mjs';

const output = new URL('../../src/lib/events-data.json', import.meta.url);
const sources = JSON.parse(await readFile(new URL('../../src/lib/event-sources.json',import.meta.url),'utf8'));
const announcements = JSON.parse(await readFile(new URL('../../src/lib/event-announcements.json',import.meta.url),'utf8'));
const previous = JSON.parse(await readFile(output,'utf8'));
const day = localDay();
const cutoff = localDay(new Date(Date.parse(day + 'T12:00:00Z') - 7 * 86400000));

async function getPage(url) {
  const response = await fetch(url, {headers:{'User-Agent':'Mozilla/5.0 (compatible; DatcaDay/1.0; +https://datca.day)'}, signal:AbortSignal.timeout(20000)});
  if (!response.ok || !response.headers.get('content-type')?.includes('text/html') || new URL(response.url).hostname !== new URL(url).hostname) throw Error('Unexpected source response ' + response.status);
  return response.text();
}
const feeds = sources.filter(item => item.adapter);
const batches = await Promise.all(feeds.map(async source => {
  try {
    const rows = (await readSource(source,getPage,cutoff)).map(row => normalize(row,source,day));
    console.log(source.id + ' · ' + rows.length);
    return {rows, check:{id:source.id, status:'ok', checked:day}};
  } catch(error) {
    console.error(source.id + ' · ' + error.message);
    const prior = previous.checks.find(item => item.id === source.id);
    return {rows:previous.events.filter(item => item.sourceId === source.id), check:{id:source.id,status:'error',checked:prior?.checked || null}};
  }
}));
if (!batches.some(item => item.check.status === 'ok')) throw Error('All sources failed; unchanged snapshot.');
const reviewed = announcements.flatMap(({sourceId, dates, checked, ...event}) => {
  const source = sources.find(item => item.id === sourceId);
  return dates.map(start => normalize({...event,start,end:start},source,checked));
});
const {events, archive} = reconcileEvents(previous, [...batches.flatMap(item => item.rows), ...reviewed], day, cutoff);
const snapshot = {attempted:day, checks:batches.map(item => item.check), events, archive};
const temp = new URL(output.href + '.' + process.pid + '.tmp');
await writeFile(temp,JSON.stringify(snapshot,null,2) + '\n');
await rename(temp,output);
console.log(events.length + ' dated listings retained.');
