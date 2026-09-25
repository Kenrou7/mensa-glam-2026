import { locales, siteContent } from "@/content/site";
import { Locale } from "@/types/site";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}

export function getLanguageSwitches(current: Locale) {
  return locales.filter((locale) => locale !== current);
}
