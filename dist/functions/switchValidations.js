"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SWITCH_VALIDATIONS = undefined;

var _functions = require("./functions.js");

var SWITCH_VALIDATIONS = exports.SWITCH_VALIDATIONS = function SWITCH_VALIDATIONS(data) {
    var value = data.value,
        type = data.type,
        title = data.title,
        varError = data.varError,
        expRegular = data.expRegular,
        message = data.message,
        focus = data.focus;


    if (type !== "RFC") {
        title = title.toLowerCase();
    }

    var result = { status: false, error: "error" };

    switch (type) {

        case "R":
            result = (0, _functions.requiredData)(value, title, varError, focus);
            break;

        case "T":
            result = (0, _functions.textValidate)(value, title, varError, focus);
            break;

        case "N":
            result = (0, _functions.numValidate)(value, title, varError, focus);
            break;

        case "TN":
            result = (0, _functions.textNumberValidate)(value, title, varError, focus);
            break;

        case "RFC":
            result = (0, _functions.rfcValidate)(value, title, varError, focus);
            break;

        case "EMAIL":
            result = (0, _functions.emailValidate)(value, title, varError, focus);
            break;

        case "COMMON":
            result = (0, _functions.commonValidate)(value, expRegular, varError, message, focus);
            break;

        case "C":
            result = (0, _functions.comboValidate)(value, title, varError, focus);
            break;

        case "RB":
            result = (0, _functions.radioButtonValidate)(value, title, varError, focus);
            break;

        default:
            console.log("El tipo de validación no existe :(", type);
            break;
    }
    return result;
};