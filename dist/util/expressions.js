"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Expresiones Regulares
var RFC = exports.RFC = /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([a-zA-Z\d]{2})([A\d])$/;
var EMAIL = exports.EMAIL = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var POSTALCODE = exports.POSTALCODE = /(^([0-9]{5,5})|^)$/;
var TEXT = exports.TEXT = /^([a-z ñáéíóú .,]{0,50})$/;
var NUMBER = exports.NUMBER = /^([0-9])*$/;
var TEXT_NUMBER = exports.TEXT_NUMBER = /^[a-z ñáéíóúÑÁÉÍÓÚ A-Z0-9 .,]*$/;