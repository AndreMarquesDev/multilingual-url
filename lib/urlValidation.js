"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var generic_1 = require("./generic");
exports.getLangFromUrl = generic_1.isClientSide ? config_1.locales.filter(function (lang) { return generic_1.localePathRegex(lang).test(window.location.pathname); }) : [];
exports.getRemainingLang = generic_1.isClientSide ? config_1.locales.filter(function (lang) { return !generic_1.localePathRegex(lang).test(window.location.pathname); }) : [];
exports.urlHasLocale = !!exports.getLangFromUrl.length;
