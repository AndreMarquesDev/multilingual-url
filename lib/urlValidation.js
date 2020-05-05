"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = require("./generic");
exports.getLangFromUrl = (locales) => generic_1.isClientSide ? locales.filter(lang => generic_1.localePathRegex(lang).test(window.location.pathname)) : [];
exports.getRemainingLang = (locales) => generic_1.isClientSide ? locales.filter(lang => !generic_1.localePathRegex(lang).test(window.location.pathname)) : [];
