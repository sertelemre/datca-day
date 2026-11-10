import { visibleShifts, type Shift } from '../lib/pharmacy-shifts.mjs';

export function formatDutyHours(shift: Shift, locale: string) {
  const dates = new Intl.DateTimeFormat(locale, {
    timeZone: 'Europe/Istanbul', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  });
  return dates.format(Date.parse(shift.start)) + ' – ' + dates.format(Date.parse(shift.end));
}

export function watchDuty(onChange: (view: ReturnType<typeof visibleShifts>) => void, shifts: Shift[] = []) {
  let lastView: string | undefined;
  const pollPeriod = 5 * 60_000;
  let timer = 0;
  let lastRequest = 0;
  let pending = false;

  function render() {
    const view = visibleShifts(shifts, Date.now());
    const key = JSON.stringify(view);
    if (key === lastView) return;
    lastView = key;
    onChange(view);
  }

  function scheduleRefresh() {
    window.clearTimeout(timer);
    const now = Date.now();
    const changes = shifts.flatMap(s => [s.start.slice(0, 10) + 'T00:00:00+03:00', s.start, s.end])
      .map(Date.parse).filter(at => at > now);
    const next = Math.min(lastRequest + pollPeriod, ...changes);
    timer = window.setTimeout(refresh, Math.max(1, next - now));
  }

  async function refresh() {
    if (document.hidden) return;
    render();
    if (pending) return;
    if (Date.now() - lastRequest < pollPeriod) {
      scheduleRefresh();
      return;
    }
    pending = true;
    lastRequest = Date.now();
    try {
      const response = await fetch('/data/pharmacy-duty.json', { cache: 'no-cache', signal: AbortSignal.timeout(12000) });
      if (!response.ok) throw new Error('Roster unavailable');
      const data = await response.json();
      if (Array.isArray(data.shifts)) shifts = data.shifts;
    } catch {
      // A previously fetched interval remains usable until its published end.
    } finally {
      pending = false;
      render();
      scheduleRefresh();
    }
  }
  void refresh();
  document.addEventListener('visibilitychange', refresh);
  window.addEventListener('pageshow', refresh);
}
