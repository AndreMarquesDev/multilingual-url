import { isClientSide, localePathRegex } from './generic';

export const getLangFromUrl = (locales: string[]): string[] => isClientSide ? locales.filter(lang => localePathRegex(lang).test(window.location.pathname)) : [];
export const getRemainingLang = (locales: string[]): string[] => isClientSide ? locales.filter(lang => !localePathRegex(lang).test(window.location.pathname)) : [];
export const urlHasLocale = !!getLangFromUrl.length;
