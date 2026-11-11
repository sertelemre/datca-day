import translations from './ui-translations.json';
import type { Locale } from './i18n';
const dictionary = translations as Record<string, string[]>;
const nouns: Partial<Record<Locale, Record<string, Record<string, string>>>> = {
  en: {
    '{n} gün': {one:'{n} day',other:'{n} days'},
    '{n} durak': {one:'{n} stop',other:'{n} stops'},
    rehber: {one:'guide',other:'guides'},
    'kaydedilmiş rehber': {one:'saved guide',other:'saved guides'},
  },
  ru: {
    '{n} gün': {one:'{n} день',few:'{n} дня',many:'{n} дней',other:'{n} дня'},
    '{n} durak': {one:'{n} место',few:'{n} места',many:'{n} мест',other:'{n} места'},
    rehber: {one:'путеводитель',few:'путеводителя',many:'путеводителей',other:'путеводителя'},
    'kaydedilmiş rehber': {one:'сохранённый путеводитель',few:'сохранённых путеводителя',many:'сохранённых путеводителей',other:'сохранённых путеводителя'},
  },
};
export function ui(locale: Locale) {
  return (key: string, values: Record<string, string | number> = {}) => {
    const forms = nouns[locale]?.[key];
    const plural = forms && typeof values.n === 'number' ? forms[new Intl.PluralRules(locale).select(values.n)] || forms.other : undefined;
    const value = plural || (locale === 'tr' ? key : dictionary[key]?.[locale === 'en' ? 0 : 1] || key);
    return value.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? `{${name}}`));
  };
}
export function clientUI() {
  return ui((document.documentElement.lang.split('-')[0] || 'tr') as Locale);
}
