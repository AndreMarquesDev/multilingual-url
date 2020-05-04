import Cookies from 'js-cookie';
import { getLangFromUrl, urlHasLocale } from './urlValidation';
import { defaultLocale, prismicCultures, locales } from './config';
import { hasNavigator } from './generic';
const isLocale = (tested) => locales.some(locale => locale === tested);
export const getInitialLocale = () => {
    if (!hasNavigator) {
        console.log('Read lang from default locale (no navigator)');
        return defaultLocale;
    }
    if (urlHasLocale) {
        const locale = getLangFromUrl[0];
        console.log('Read lang from url, will set cookie', locale);
        Cookies.set('lang', locale, { expires: 60 });
        return locale;
    }
    const localSetting = Cookies.get('lang');
    if (localSetting && isLocale(localSetting)) {
        console.log('Read lang from cookie');
        return localSetting;
    }
    const [browserLanguage] = navigator.language.split('-');
    if (isLocale(browserLanguage)) {
        console.log('Read lang from browser language');
        return browserLanguage;
    }
    console.log('Read lang from default locale');
    return defaultLocale;
};
export const getPrismicLocale = (language) => {
    const prismicLocale = prismicCultures.find(({ culture }) => culture === language);
    return prismicLocale?.locale || 'en-gb';
};
