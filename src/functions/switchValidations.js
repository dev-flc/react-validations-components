
import {
    requiredData,
    textValidate,
    numValidate,
    textNumberValidate,
    rfcValidate,
    rfcValidateGeneric,
    rfcValidateIsGeneric,
    rfcValidateClave,
    emailValidate,
    commonValidate,
    comboValidate,
    radioButtonValidate,
    dateValidateFormat,
    validationCheckBox,
    validationDateRFC,
    validationDateRFCGeneric,
    textAreSpecialValidate,
    specialCharacterInValidate,
    curpValidate } from './functions.js'


export const SWITCH_VALIDATIONS = data => {

    let { value, type, varError, expRegular, message, id, valueDate, titleRFC,
        titleDate, varErrorDate, focusDate, title } = data;

    let result = { status: false, error: "error" };

    switch ( type ) {

        case "R": // Requerido
            result = requiredData( value, varError, id, title );
            break;

        case "T": // Texto
            result = textValidate( value, varError, id, title )
            break;

        case "N": // Numero
            result = numValidate( value, varError, id, title );
            break;

        case "TN": // Texto y Numero
            result = textNumberValidate( value, varError, id, title );
            break;

        case "RFC": // RFC
            result = rfcValidate( value, varError, id, title, title );
            break;

        case "RFC_GENERIC": // RFC y validacion de RFC generico
            result = rfcValidateGeneric( value, varError, id, title, title );
            break;

        case "IS_RFC_GENERIC": // Regresa solo si es rfc generico
            result = rfcValidateIsGeneric( value );
            break;

        case "RFC_CLAVE": // RFC sin cave
            result = rfcValidateClave( value, varError, id, title );
            break;

        case "RFC_DATE": // RFC VS Fecha de nacimiento
            result = validationDateRFC( value, valueDate, titleRFC, titleDate, varError, varErrorDate, id, focusDate );
            break;

        case "RFC_DATE_GENERIC": // RFC VS Fecha de nacimiento y validacion de RFC generico
            result = validationDateRFCGeneric( value, valueDate, titleRFC, titleDate, varError, varErrorDate, id, focusDate );
            break;

        case "EMAIL": // Email
            result = emailValidate( value, varError, id, title );
            break;

        case "COMMON": // Comun
            result = commonValidate( value, expRegular, varError, message, id, title );
            break;

        case "C": // Combos
            result = comboValidate( value, varError, id, title );
            break;

        case "RB": // Redio Buntons
            result = radioButtonValidate( value, varError, id, title );
            break;

        case "DATE": // Formato de fecha
            result = dateValidateFormat( value, varError, id, title );
            break;

        case "CHECK": // Checkbox
            result = validationCheckBox( value, varError, id, title );
            break;

        case "TEXT_AREA_SPECIAL": // Carater especial multilinea
            result = textAreSpecialValidate( value, varError, id, title );
            break;

        case "SPECIAL_CHARACTER": // Carater especial
            result = specialCharacterInValidate( value, varError, id, title );
            break;

        case "CURP": // CURP
            result = curpValidate( value, varError, id, title );
            break;

        default:
            console.log("El tipo de validación no existe :(", type)
            break;
    }
    return result;

}
