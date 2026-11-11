export const listBatchSize = 24;

export function mountInfiniteList(
  more: HTMLButtonElement,
  onChange?: (shown: number, total: number) => void,
) {
  let matches: HTMLElement[] = [];
  let shown = 0;

  function update() {
    more.hidden = shown >= matches.length;
    onChange?.(shown, matches.length);
  }

  function showMore() {
    const batch = matches.slice(shown, shown + listBatchSize);
    for (const item of batch) item.hidden = false;
    shown += batch.length;
    update();
    return batch[0];
  }

  more.addEventListener('click', () => {
    const first = showMore();
    const target = first?.matches('a[href], button') ? first : first?.querySelector<HTMLElement>('a[href], button:not([disabled])');
    target?.focus();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !more.hidden) showMore();
    }, { rootMargin: '300px 0px' }).observe(more);
  }

  return (items: HTMLElement[], initialCount = listBatchSize) => {
    for (const item of matches) item.hidden = true;
    matches = items;
    shown = Math.min(initialCount, matches.length);
    matches.forEach((item, index) => item.hidden = index >= shown);
    update();
  };
}
