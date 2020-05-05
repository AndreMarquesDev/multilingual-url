"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_cookie_1 = __importDefault(require("js-cookie"));
const urlValidation_1 = require("./urlValidation");
const generic_1 = require("./generic");
exports.getInitialLocale = (defaultLocale, locales) => {
    const isLocale = (tested) => locales.some(locale => locale === tested);
    const urlHasLocale = !!urlValidation_1.getLangFromUrl(locales).length;
    if (!generic_1.hasNavigator) {
        return defaultLocale;
    }
    if (urlHasLocale) {
        const locale = urlValidation_1.getLangFromUrl(locales)[0];
        js_cookie_1.default.set('lang', locale, { expires: 60 });
        return locale;
    }
    const localSetting = js_cookie_1.default.get('lang');
    if (localSetting && isLocale(localSetting)) {
        return localSetting;
    }
    const [browserLanguage] = navigator.language.split('-');
    if (isLocale(browserLanguage)) {
        return browserLanguage;
    }
    return defaultLocale;
};
exports.getPrismicLocale = (language, prismicCultures) => {
    const prismicLocale = prismicCultures.find(({ culture }) => culture === language);
    return (prismicLocale === null || prismicLocale === void 0 ? void 0 : prismicLocale.locale) || 'en-gb';
};
