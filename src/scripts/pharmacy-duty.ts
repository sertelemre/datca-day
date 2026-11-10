import { watchDuty, formatDutyHours } from './watch-pharmacy-duty';

export function showDuty(root: HTMLElement, panel: HTMLElement) {
  const list = panel.querySelector<HTMLElement>('[data-duty-list]')!;
  const notice = panel.querySelector<HTMLElement>('[data-duty-notice]')!;
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-pharmacy]'));
  watchDuty(view => {
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
      interval.textContent = label + ' · ' + formatDutyHours(shift, document.documentElement.lang);
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
  });
}
