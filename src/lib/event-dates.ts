export function todayInDatca(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone:'Europe/Istanbul', year:'numeric', month:'2-digit', day:'2-digit' }).format(date);
}
export function offsetDay(day: string, offset: number) {
  const date = new Date(day + 'T12:00:00Z');
  date.setUTCDate(date.getUTCDate() + offset);
  return date.toISOString().slice(0,10);
}
export function fallsWithin(start: string, end: string, schedule: string | undefined, from: string, to: string) {
  const first = from > start ? from : start;
  const last = to < end ? to : end;
  if (first > last) return false;
  if (schedule !== 'friday') return true;
  const weekday = new Date(first + 'T12:00:00Z').getUTCDay();
  return offsetDay(first,(5 - weekday + 7) % 7) <= last;
}
export function dateLabel(day: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Istanbul'}).format(new Date(day + 'T12:00:00Z'));
}

export function hasEnded(event: {end:string; closeTime?:string}, now = new Date()) {
  return event.closeTime ? Date.parse(event.end + 'T' + event.closeTime + ':00+03:00') <= now.valueOf() : event.end < todayInDatca(now);
}
