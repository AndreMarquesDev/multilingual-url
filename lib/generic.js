"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isClientSide = typeof window !== 'undefined';
exports.hasNavigator = typeof navigator !== 'undefined';
exports.localePathRegex = function (lang) { return RegExp("^/" + lang); };
