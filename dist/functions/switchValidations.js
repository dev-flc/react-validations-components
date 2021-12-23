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
        titleRFC = data.titleRFC,
        titleDate = data.titleDate,
        varErrorDate = data.varErrorDate,
        focusDate = data.focusDate,
        title = data.title;


    var result = { status: false, error: "error" };

    switch (type) {

        case "R":
            // Requerido
            result = (0, _functions.requiredData)(value, varError, id, title);
            break;

        case "T":
            // Texto
            result = (0, _functions.textValidate)(value, varError, id, title);
            break;

        case "N":
            // Numero
            result = (0, _functions.numValidate)(value, varError, id, title);
            break;

        case "TN":
            // Texto y Numero
            result = (0, _functions.textNumberValidate)(value, varError, id, title);
            break;

        case "RFC":
            // RFC
            result = (0, _functions.rfcValidate)(value, varError, id, title, title);
            break;

        case "RFC_CLAVE":
            // RFC sin cave
            result = (0, _functions.rfcValidateClave)(value, varError, id, title);
            break;

        case "RFC_DATE":
            // RFC VS Fecha de nacimiento
            result = (0, _functions.validationDateRFC)(value, valueDate, titleRFC, titleDate, varError, varErrorDate, id, focusDate);
            break;

        case "EMAIL":
            // Email
            result = (0, _functions.emailValidate)(value, varError, id, title);
            break;

        case "COMMON":
            // Comun
            result = (0, _functions.commonValidate)(value, expRegular, varError, message, id, title);
            break;

        case "C":
            // Combos
            result = (0, _functions.comboValidate)(value, varError, id, title);
            break;

        case "RB":
            // Redio Buntons
            result = (0, _functions.radioButtonValidate)(value, varError, id, title);
            break;

        case "DATE":
            // Formato de fecha
            result = (0, _functions.dateValidateFormat)(value, varError, id, title);
            break;

        case "CHECK":
            // Checkbox
            result = (0, _functions.validationCheckBox)(value, varError, id, title);
            break;

        case "TEXT_AREA_SPECIAL":
            // Carater especial multilinea
            result = (0, _functions.textAreSpecialValidate)(value, varError, id, title);
            break;

        case "SPECIAL_CHARACTER":
            // Carater especial
            result = (0, _functions.specialCharacterInValidate)(value, varError, id, title);
            break;

        case "CURP":
            // CURP
            result = (0, _functions.curpValidate)(value, varError, id, title);
            break;

        default:
            console.log("El tipo de validación no existe :(", type);
            break;
    }
    return result;
};