"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_cookie_1 = require("js-cookie");
var urlValidation_1 = require("./urlValidation");
var config_1 = require("./config");
var generic_1 = require("./generic");
var isLocale = function (tested) { return config_1.locales.some(function (locale) { return locale === tested; }); };
exports.getInitialLocale = function () {
    if (!generic_1.hasNavigator) {
        console.log('Read lang from default locale (no navigator)');
        return config_1.defaultLocale;
    }
    if (urlValidation_1.urlHasLocale) {
        var locale = urlValidation_1.getLangFromUrl[0];
        console.log('Read lang from url, will set cookie', locale);
        js_cookie_1.default.set('lang', locale, { expires: 60 });
        return locale;
    }
    var localSetting = js_cookie_1.default.get('lang');
    if (localSetting && isLocale(localSetting)) {
        console.log('Read lang from cookie');
        return localSetting;
    }
    var browserLanguage = navigator.language.split('-')[0];
    if (isLocale(browserLanguage)) {
        console.log('Read lang from browser language');
        return browserLanguage;
    }
    console.log('Read lang from default locale');
    return config_1.defaultLocale;
};
exports.getPrismicLocale = function (language) {
    var prismicLocale = config_1.prismicCultures.find(function (_a) {
        var culture = _a.culture;
        return culture === language;
    });
    return (prismicLocale === null || prismicLocale === void 0 ? void 0 : prismicLocale.locale) || 'en-gb';
};
