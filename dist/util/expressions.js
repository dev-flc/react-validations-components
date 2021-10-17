"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Expresiones Regulares
var RFC = exports.RFC = /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([a-zA-Z\d]{2})([A\d])$/;
var RFC_CLAVE = exports.RFC_CLAVE = /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))$/;
var EMAIL = exports.EMAIL = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var POSTALCODE = exports.POSTALCODE = /(^([0-9]{5,5})|^)$/;
var TEXT = exports.TEXT = /^([a-zA-Z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ .,]{0,100})$/;
var NUMBER = exports.NUMBER = /^([0-9])*$/;
var TEXT_NUMBER = exports.TEXT_NUMBER = /^[a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 .,]*$/;
var FORMAT_DATE = exports.FORMAT_DATE = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
var TEXT_AREA_SPECIAL = exports.TEXT_AREA_SPECIAL = /^([a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#\/()´¨&"_*.%¿?$¡!@+¨]*$)|(\n[a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#\/()´¨&"_*.%¿?$¡!@+¨]{1,}$)/;
var SPECIAL_CHARACTER = exports.SPECIAL_CHARACTER = /^([a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#\/()´¨&"\_*.%¿?$¡!@+¨]*$)/;