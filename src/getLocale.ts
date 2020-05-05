import Cookies from 'js-cookie';
import { getLangFromUrl } from './urlValidation';
import { hasNavigator } from './generic';
import { IPrismicCultures } from './typings';

export const getInitialLocale = (defaultLocale: string, locales: string[]): string => {
    const isLocale = (tested: string): boolean => locales.some(locale => locale === tested);
    const urlHasLocale = !!getLangFromUrl(locales).length;

    if (!hasNavigator) {
        return defaultLocale;
    }

    if (urlHasLocale) {
        const locale = getLangFromUrl(locales)[0];

        Cookies.set('lang', locale, { expires: 60 });

        return locale;
    }

    const localSetting = Cookies.get('lang');

    if (localSetting && isLocale(localSetting)) {

        return localSetting;
    }

    const [browserLanguage] = navigator.language.split('-');

    if (isLocale(browserLanguage)) {
        return browserLanguage;
    }

    return defaultLocale;
};

export const getPrismicLocale = (language: string | string[], prismicCultures: IPrismicCultures[]): string => {
    const prismicLocale = prismicCultures.find(({ culture }) => culture === language);

    return prismicLocale?.locale || 'en-gb';
};
