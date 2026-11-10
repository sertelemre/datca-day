import { eventSlug, type events } from './events';

export const locales = ['tr','en','ru'] as const;
export type Locale = typeof locales[number];
export function eventPath(event: (typeof events)[number], locale: Locale) {
  const section = { tr: '/etkinlik', en: '/en/event', ru: '/ru/sobytie' }[locale];
  return section + '/' + eventSlug(event);
}
export const transportPath = (slug: string, locale: Locale) =>
  ({ tr:'/ulasim/', en:'/en/transport/', ru:'/ru/transport/' })[locale] + slug;
