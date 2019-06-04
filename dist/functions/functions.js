"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.radioButtonValidate = exports.comboValidate = exports.requiredData = exports.commonValidate = exports.emailValidate = exports.rfcValidate = exports.textNumberValidate = exports.numValidate = exports.textValidate = undefined;

var _expressions = require("./../util/expressions.js");

var textValidate = exports.textValidate = function textValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    return RegExp(_expressions.TEXT).test(value.trim()) ? { status: true } : { status: false, error: "El dato " + title + " no es v\xE1lido, ingresa solo letras.", varError: varError, focus: focus };
};

var numValidate = exports.numValidate = function numValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    return RegExp(_expressions.NUMBER).test(value) ? { status: true } : { status: false, error: "El dato " + title + " no es v\xE1lido, ingresa solo n\xFAmeros.", varError: varError, focus: focus };
};

var textNumberValidate = exports.textNumberValidate = function textNumberValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    return RegExp(_expressions.TEXT_NUMBER).test(value) ? { status: true } : { status: false, error: "El dato " + title + " no es v\xE1lido, ingresa solo letras y n\xFAmeros.", varError: varError, focus: focus };
};

var rfcValidate = exports.rfcValidate = function rfcValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    return RegExp(_expressions.RFC).test(value) ? { status: true } : { status: false, error: "El dato " + title + " no es v\xE1lido", varError: varError, focus: focus };
};

var emailValidate = exports.emailValidate = function emailValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    return RegExp(_expressions.EMAIL).test(value) ? { status: true } : { status: false, error: "El dato " + title + " no es v\xE1lido", varError: varError, focus: focus };
};

var commonValidate = exports.commonValidate = function commonValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var expRegular = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    return RegExp(expRegular).test(value) ? { status: true } : { status: false, error: message, varError: varError, focus: focus };
};

var requiredData = exports.requiredData = function requiredData() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    var result = { status: true };
    if (value === null || value === "") {
        result = { status: false, error: "El dato " + title + " es requerido.", varError: varError, focus: focus };
    }
    return result;
};

var comboValidate = exports.comboValidate = function comboValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    if (value !== null && value !== -1 && value !== "" && value !== undefined) {
        return { status: true };
    } else {
        return { status: false, error: "El dato " + title + " es requerido.", varError: varError, focus: focus };
    }
};

var radioButtonValidate = exports.radioButtonValidate = function radioButtonValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var focus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    if (value === true || value === false) {
        return { status: true };
    } else {
        return { status: false, error: "El dato " + title + " es requerido.", varError: varError, focus: focus };
    }
};