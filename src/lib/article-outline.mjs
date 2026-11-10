import { parseFragment, serialize } from 'parse5';

/** Server-rendered section links work before JavaScript runs, too.
 * @param {string} html
 * @param {{levelTwoOnly?: boolean}} options */
export function articleOutline(html, { levelTwoOnly = false } = {}) {
  const fragment = parseFragment(html);
  const ids = new Set();
  const headings = [];
  const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
  const visitIds = node => {
    for (const attr of node.attrs || []) if (attr.name === 'id') ids.add(attr.value);
    (node.childNodes || []).forEach(visitIds);
  };
  visitIds(fragment);
  let index = 0;
  const visit = node => {
    if (['h2', 'h3'].includes(node.tagName) && (!levelTwoOnly || node.tagName === 'h2')) {
      const label = text(node).replace(/\s+/g, ' ').trim();
      if (label) {
        index++;
        let id = node.attrs.find(attr => attr.name === 'id')?.value;
        if (!id) {
          id = `rehber-${index}`;
          while (ids.has(id)) id += '-section';
          node.attrs.push({ name: 'id', value: id });
          ids.add(id);
        }
        headings.push({ id, label, level: Number(node.tagName.slice(1)) });
      }
    }
    (node.childNodes || []).forEach(visit);
  };
  visit(fragment);
  return { html: serialize(fragment), headings };
}
