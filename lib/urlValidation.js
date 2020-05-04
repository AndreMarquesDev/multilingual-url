"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const generic_1 = require("./generic");
exports.getLangFromUrl = generic_1.isClientSide ? config_1.locales.filter(lang => generic_1.localePathRegex(lang).test(window.location.pathname)) : [];
exports.getRemainingLang = generic_1.isClientSide ? config_1.locales.filter(lang => !generic_1.localePathRegex(lang).test(window.location.pathname)) : [];
exports.urlHasLocale = !!exports.getLangFromUrl.length;
