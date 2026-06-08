export const locales = ["br", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "br";

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
