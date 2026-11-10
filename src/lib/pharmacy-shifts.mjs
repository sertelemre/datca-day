/** @typedef {{ id: string, start: string, end: string }} Shift */
/** @param {Shift[]} shifts @param {number} now */
export function visibleShifts(shifts, now) {
  const active = shifts.filter(s => Date.parse(s.start) <= now && now < Date.parse(s.end));
  if (active.length) return { status: 'active', shifts: active };
  const day = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Istanbul' }).format(now);
  return { status: 'scheduled', shifts: shifts.filter(s =>
    s.start.startsWith(day + 'T') && Date.parse(s.start) > now && Date.parse(s.end) > Date.parse(s.start)) };
}
