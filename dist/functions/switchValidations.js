"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SWITCH_VALIDATIONS = undefined;

var _functions = require("./functions.js");

var SWITCH_VALIDATIONS = exports.SWITCH_VALIDATIONS = function SWITCH_VALIDATIONS(data) {
    var value = data.value,
        type = data.type,
        varError = data.varError,
        expRegular = data.expRegular,
        message = data.message,
        id = data.id,
        valueDate = data.valueDate,
        titleDate = data.titleDate,
        varErrorDate = data.varErrorDate,
        focusDate = data.focusDate,
        titleRFC = data.titleRFC;


    var result = { status: false, error: "error" };

    switch (type) {

        case "R":
            // Requerido
            result = (0, _functions.requiredData)(value, varError, id);
            break;

        case "T":
            // Texto
            result = (0, _functions.textValidate)(value, varError, id);
            break;

        case "N":
            // Numero
            result = (0, _functions.numValidate)(value, varError, id);
            break;

        case "TN":
            // Texto y Numero
            result = (0, _functions.textNumberValidate)(value, varError, id);
            break;

        case "RFC":
            // RFC
            result = (0, _functions.rfcValidate)(value, varError, id);
            break;

        case "RFC_DATE":
            // RFC VS Fecha de nacimiento
            result = (0, _functions.validationDateRFC)(value, valueDate, titleRFC, titleDate, varError, varErrorDate, id, focusDate);
            break;

        case "EMAIL":
            // Email
            result = (0, _functions.emailValidate)(value, varError, id);
            break;

        case "COMMON":
            // Comun
            result = (0, _functions.commonValidate)(value, expRegular, varError, message, id);
            break;

        case "C":
            // Combos
            result = (0, _functions.comboValidate)(value, varError, id);
            break;

        case "RB":
            // Redio Buntons
            result = (0, _functions.radioButtonValidate)(value, varError, id);
            break;

        case "DATE":
            // Formato de fecha
            result = (0, _functions.dateValidateFormat)(value, varError, id);
            break;

        case "CHECK":
            // Checkbox
            result = (0, _functions.validationCheckBox)(value, varError, id);
            break;

        default:
            console.log("El tipo de validación no existe :(", type);
            break;
    }
    return result;
};