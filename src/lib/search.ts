import { transportRoutes,placeName } from './transport';
import { transportPath } from './paths';
import { events, calendarEvents } from './events';
import { eventPath, type Locale } from './paths';
import { localePath } from './i18n';
import { ui } from './ui';
export interface EventSearchEntry {kind:'calendar'|'event'|'transport';path:string;title:string;excerpt:string;endDay?:string;endTimestamp?:string;searchable:true}
export const eventRoutes = (locale:Locale) => events.map(event=>({event,path:eventPath(event,locale)}));
export function getEventSearchEntries(locale:Locale):EventSearchEntry[] {
  const t=ui(locale);
  return [
    {kind:'calendar',path:localePath('/etkinlikler',locale),title:t('Datça etkinlik takvimi'),excerpt:t('Konser, tiyatro, sinema ve yerel etkinlikler. Duyuruları kaynaklarıyla birlikte keşfet.'),searchable:true},
    ...transportRoutes.map(route=>({kind:'transport' as const,path:transportPath(route.slug,locale),title:route.code+' · '+placeName(route.title,locale),excerpt:t('Sefer saatleri')+' · '+route.via,searchable:true as const})),
    ...calendarEvents.map(event=>({kind:'event' as const,path:eventPath(event,locale),title:event.title,excerpt:[event.start,event.time,event.venue].filter(Boolean).join(' · '),endDay:event.end || event.start,endTimestamp:event.closeTime ? (event.end || event.start)+'T'+event.closeTime+':00+03:00' : undefined,searchable:true as const})),
  ];
}
