"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_cookie_1 = __importDefault(require("js-cookie"));
const urlValidation_1 = require("./urlValidation");
const config_1 = require("./config");
const generic_1 = require("./generic");
const isLocale = (tested) => config_1.locales.some(locale => locale === tested);
exports.getInitialLocale = () => {
    if (!generic_1.hasNavigator) {
        console.log('Read lang from default locale (no navigator)');
        return config_1.defaultLocale;
    }
    if (urlValidation_1.urlHasLocale) {
        const locale = urlValidation_1.getLangFromUrl[0];
        console.log('Read lang from url, will set cookie', locale);
        js_cookie_1.default.set('lang', locale, { expires: 60 });
        return locale;
    }
    const localSetting = js_cookie_1.default.get('lang');
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
    return config_1.defaultLocale;
};
exports.getPrismicLocale = (language) => {
    const prismicLocale = config_1.prismicCultures.find(({ culture }) => culture === language);
    return (prismicLocale === null || prismicLocale === void 0 ? void 0 : prismicLocale.locale) || 'en-gb';
};
