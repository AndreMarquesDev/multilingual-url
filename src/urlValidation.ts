import { locales } from './config';
import { isClientSide, localePathRegex } from './generic';

export const getLangFromUrl = isClientSide ? locales.filter(lang => localePathRegex(lang).test(window.location.pathname)) : [];
export const getRemainingLang = isClientSide ? locales.filter(lang => !localePathRegex(lang).test(window.location.pathname)) : [];
export const urlHasLocale = !!getLangFromUrl.length;