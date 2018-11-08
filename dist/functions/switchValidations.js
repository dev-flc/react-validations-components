"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SWITCH_VALIDATIONS = undefined;

var _functions = require("./functions.js");

var SWITCH_VALIDATIONS = exports.SWITCH_VALIDATIONS = function SWITCH_VALIDATIONS(value, type, title, varError, expRegular, message, focus) {

    var newResult = { status: false, error: "error" };

    switch (type) {
        case "T":
            newResult = (0, _functions.textValidate)(value, title, varError);
            break;

        case "N":
            newResult = (0, _functions.numValidate)(value, title, varError);
            break;

        case "TN":
            newResult = (0, _functions.textNumberValidate)(value, title, varError);
            break;

        case "R":
            newResult = (0, _functions.requiredData)(value, title, varError);
            break;

        case "RFC":
            newResult = (0, _functions.rfcValidate)(value, title, varError);
            break;

        case "EMAIL":
            newResult = (0, _functions.emailValidate)(value, title, varError);
            break;

        case "COMMON":
            newResult = (0, _functions.commonValidate)(value, expRegular, varError, message);
            break;

        case "C":
            newResult = (0, _functions.comboValidate)(value, title, varError);
            break;

        case "RB":
            newResult = (0, _functions.radioButtonValidate)(value, title, varError);
            break;

        case "RTN":
            newResult = (0, _functions.requiredDataTextNumberValidate)(value, title, varError);
            break;

        default:
            break;
    }
    return newResult;
};