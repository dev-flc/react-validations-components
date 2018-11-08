"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requiredDataTextNumberValidate = exports.radioButtonValidate = exports.comboValidate = exports.requiredData = exports.commonValidate = exports.emailValidate = exports.rfcValidate = exports.textNumberValidate = exports.numValidate = exports.textValidate = undefined;

var _expressions = require("./../utilities/expressions.js");

var isString = function isString(str) {
    return typeof str === 'string';
};
var isBoolean = function isBoolean(bool) {
    return typeof bool === "boolean";
};
var isInt = function isInt(num) {
    return Number(num) === num && num % 1 === 0;
};
var isFloa = function isFloa(num) {
    return Number(num) === num && num % 1 !== 0;
};
/* Validation Text */
var textValidate = exports.textValidate = function textValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "varError";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "focus";

    var result = { status: false, error: "El valor de \"Value\", no es de tipo string." };
    if (isString(value)) {
        result = RegExp(_expressions.TEXT).test(value.trim()) ? { status: true } : { status: false, error: "El dato " + name + " no es v\xE1lido, ingresa solo letras.", varError: varError, focus: focus };
    }
    return result;
};
/* Validation Number */
var numValidate = exports.numValidate = function numValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "varError";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "focus";

    var result = { status: false, error: "El valor de \"Value\", no es de tipo number." };
    if (isInt(value) || isFloa(value)) {
        result = RegExp(_expressions.NUMBER).test(value) ? { status: true } : { status: false, error: "El dato " + name + " no es v\xE1lido, ingresa solo n\xFAmeros.", varError: varError, focus: focus };
    }
    return result;
};
/* Validation Text and Number */
var textNumberValidate = exports.textNumberValidate = function textNumberValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "varError";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "focus";

    var result = { status: false, error: "El valor de \"Value\", no es de tipo strings." };
    if (isString(value)) {
        result = RegExp(_expressions.TEXT_NUMBER).test(value) ? { status: true } : { status: false, error: "El dato " + name + " no es v\xE1lido, ingresa solo letras y n\xFAmeros.", varError: varError, focus: focus };
    }
    return result;
};
/* Validate RFC */
var rfcValidate = exports.rfcValidate = function rfcValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "varError";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "focus";

    var result = { status: false, error: "El valor de \"Value\", no es de tipo strings." };
    if (isString(value)) {
        result = RegExp(_expressions.RFC).test(value) ? { status: true } : { status: false, error: "El dato " + name + " no es v\xE1lido", varError: varError, focus: focus };
    }
    return result;
};
/* Validate Email */
var emailValidate = exports.emailValidate = function emailValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "varError";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "focus";

    var result = { status: false, error: "El valor de \"Value\", no es de tipo strings." };
    if (isString(value)) {
        result = RegExp(_expressions.EMAIL).test(value) ? { status: true } : { status: false, error: "El dato " + name + " no es v\xE1lido", varError: varError, focus: focus };
    }
    return result;
};
/* Validation Custom */
var commonValidate = exports.commonValidate = function commonValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var expRegular = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _expressions.TEXT;
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "varError";
    var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "message";
    var focus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "focus";

    var result = RegExp(expRegular).test(value) ? { status: true } : { status: false, error: message, varError: varError, focus: focus };
    return result;
};
/* Validation Data Required */
var requiredData = exports.requiredData = function requiredData() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "varError";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "focus";

    var result = { status: true };
    if (value == null || value == "" || value == undefined) {
        result = { status: false, error: "El dato " + name + " es requerido.", varError: varError, focus: focus };
    }
    return result;
};
/* Validation Combo */

var comboValidate = exports.comboValidate = function comboValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "varError";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "focus";

    var result = { status: true };
    if (value != null && value !== -1 && value !== "-1" && value !== "" && value !== undefined) {
        result = { status: true };
    } else {
        result = { status: false, error: "El dato " + name + " es requerido.", varError: varError, focus: focus };
    }
    return result;
};
/* Validation Redio */
var radioButtonValidate = exports.radioButtonValidate = function radioButtonValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "varError";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "focus";

    var result = { status: true };
    if (!isBoolean(value)) {
        result = { status: false, error: "El valor de \"Value\", no es de tipo Boolean." };
    }
    return result;
};
/* Validation Required data number and text */
var requiredDataTextNumberValidate = exports.requiredDataTextNumberValidate = function requiredDataTextNumberValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "varError";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "focus";

    var result = requiredData(value, name, varError);
    if (result.status) {
        result = textNumberValidate(value, name, varError);
        if (result.status === false) {
            {
                result.error = "El dato " + name + " no es v\xE1lido, ingresa solo letras y n\xFAmeros.", varError;
            };
        }
    } else {
        {
            result.error = "El dato " + name + " es requerido.", varError, focus;
        };
    }
    return result;
};