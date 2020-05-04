export type { Locale, IPrismicCultures } from './typings/index';
export { defaultLocale, locales, prismicCultures } from './config';
export { isClientSide, hasNavigator, localePathRegex } from './generic';
export { getInitialLocale, getPrismicLocale } from './getLocale';
export { getLangFromUrl, getRemainingLang, urlHasLocale } from './urlValidation';
export declare const dummyLog: (param: string) => void;
