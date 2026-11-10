import { visibleShifts, type Shift } from '../lib/pharmacy-shifts.mjs';

export function showDuty(root: HTMLElement, panel: HTMLElement) {
  const list = panel.querySelector<HTMLElement>('[data-duty-list]')!;
  const notice = panel.querySelector<HTMLElement>('[data-duty-notice]')!;
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-pharmacy]'));
  const dates = new Intl.DateTimeFormat(document.documentElement.lang, {
    timeZone: 'Europe/Istanbul', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  });
  let shifts: Shift[] = [];
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
    list.replaceChildren();
    for (const card of cards) {
      const shift = view.shifts.find(item => item.id === card.id);
      const badge = card.querySelector<HTMLElement>('[data-duty-badge]')!;
      badge.hidden = !shift;
      if (!shift) {
        delete card.dataset.duty;
        continue;
      }
      const label = (view.status === 'active' ? panel.dataset.active : panel.dataset.scheduled)!;
      card.dataset.duty = label;
      badge.textContent = label;
      const entry = document.createElement('div');
      entry.className = 'duty-entry';
      const title = document.createElement('strong');
      title.textContent = card.querySelector('h3')!.textContent;
      const interval = document.createElement('p');
      interval.textContent = label + ' · ' + dates.format(Date.parse(shift.start)) + ' – ' + dates.format(Date.parse(shift.end));
      const mapLink = card.querySelector<HTMLAnchorElement>('[data-show-place]')!;
      const link = mapLink.cloneNode(true) as HTMLAnchorElement;
      link.removeAttribute('data-show-place');
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        mapLink.click();
      });
      const actions = document.createElement('div');
      actions.className = 'duty-actions';
      actions.append(card.querySelector('.phone')!.cloneNode(true), link);
      entry.append(title, interval, card.querySelector('address')!.cloneNode(true), actions);
      list.append(entry);
    }
    notice.hidden = list.childElementCount > 0 && list.childElementCount === view.shifts.length;
    root.dispatchEvent(new Event('pharmacy-duty-change'));
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
