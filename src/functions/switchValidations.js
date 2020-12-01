
import {
    requiredData,
    textValidate,
    numValidate,
    textNumberValidate,
    rfcValidate,
    emailValidate,
    commonValidate,
    comboValidate,
    radioButtonValidate,
    dateValidateFormat,
    validationCheckBox,
    validationDateRFC,
    textAreSpecialValidate,
    specialCharacterInValidate } from './functions.js'


export const SWITCH_VALIDATIONS = data => {

    let { value, type, varError, expRegular, message, id, valueDate,
        titleDate, varErrorDate, focusDate, titleRFC } = data;

    let result = { status: false, error: "error" };

    switch ( type ) {

        case "R": // Requerido
            result = requiredData( value, varError, id );
            break;

        case "T": // Texto
            result = textValidate( value, varError, id )
            break;

        case "N": // Numero
            result = numValidate( value, varError, id );
            break;

        case "TN": // Texto y Numero
            result = textNumberValidate( value, varError, id );
            break;

        case "RFC": // RFC
            result = rfcValidate( value, varError, id );
            break;

        case "RFC_DATE": // RFC VS Fecha de nacimiento
            result = validationDateRFC( value, valueDate, titleRFC, titleDate, varError, varErrorDate, id, focusDate );
            break;

        case "EMAIL": // Email
            result = emailValidate( value, varError, id );
            break;

        case "COMMON": // Comun
            result = commonValidate( value, expRegular, varError, message, id );
            break;

        case "C": // Combos
            result = comboValidate( value, varError, id );
            break;

        case "RB": // Redio Buntons
            result = radioButtonValidate( value, varError, id );
            break;

        case "DATE": // Formato de fecha
            result = dateValidateFormat( value, varError, id );
            break;

        case "CHECK": // Checkbox
            result = validationCheckBox( value, varError, id );
            break;

        case "TEXT_AREA_SPECIAL": // Carater especial multilinea
            result = textAreSpecialValidate( value, varError, id );
            break;

        case "SPECIAL_CHARACTER": // Carater especial
            result = specialCharacterInValidate( value, varError, id );
            break;

        default:
            console.log("El tipo de validación no existe :(", type)
            break;
    }
    return result;

}
