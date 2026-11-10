import snapshot from './events-data.json';
import directory from './event-sources.json';

export interface DatcaEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  time?: string;
  closeTime?: string;
  schedule?: string;
  venue: string;
  category: string;
  url: string;
  poster?: string;
  ticket?: string;
  sourceId: string;
  checked: string;
}
export const calendarEvents: DatcaEvent[] = snapshot.events;
const archive = (snapshot as {archive?: DatcaEvent[]}).archive || [];
export const events = [...calendarEvents,...archive];
export const archivedIds = new Set(archive.map(event => event.id));
export const eventSources = directory;
export const checks = snapshot.checks;
export const lastAttempt = snapshot.attempted;
export function eventSlug(event: DatcaEvent) {
  const name = event.title.toLocaleLowerCase('tr').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replaceAll('ı','i').replace(/[^a-z\d]+/g,'-').replace(/^-|-$/g,'');
  return [name,event.start,event.id].join('-');
}
