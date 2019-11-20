
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
    validationDateRFC } from './functions.js'


export const SWITCH_VALIDATIONS = data => {

    let { value, type, title, varError, expRegular, message, focus, valueDate,
        titleDate, varErrorDate, focusDate } = data;

    let result = { status: false, error: "error" };

    switch ( type ) {

        case "R": // Requerido
            if ( title !== "R.F.C." ) { title = title.toLowerCase() }
            result = requiredData( value, title, varError, focus );
            break;

        case "T": // Texto
            title  = title.toLowerCase();
            result = textValidate( value, title, varError, focus )
            break;

        case "N": // Numero
            title  = title.toLowerCase();
            result = numValidate( value, title, varError, focus );
            break;

        case "TN": // Texto y Numero
            title  = title.toLowerCase();
            result = textNumberValidate( value, title, varError, focus );
            break;

        case "RFC": // RFC
            result = rfcValidate( value, title, varError, focus );
            break;

        case "RFC_DATE": // RFC VS Fecha de nacimiento
            result = validationDateRFC( value, valueDate, title, titleDate, varError, varErrorDate, focus, focusDate );
            break;

        case "EMAIL": // Email
            title  = title.toLowerCase();
            result = emailValidate( value, title, varError, focus );
            break;

        case "COMMON": // Comun
            result = commonValidate( value, expRegular, varError, message, focus );
            break;

        case "C": // Combos
            title  = title.toLowerCase();
            result = comboValidate( value, title, varError, focus );
            break;

        case "RB": // Redio Buntons
            title  = title.toLowerCase();
            result = radioButtonValidate( value, title, varError, focus );
            break;

        case "DATE": // Formato de fecha
            title  = title.toLowerCase();
            result = dateValidateFormat( value, title, varError, focus );
            break;

        case "CHECK": // Checkbox
            title  = title.toLowerCase();
            result = validationCheckBox( value, title, varError, focus );
            break;

        default:
            console.log("El tipo de validación no existe :(", type)
            break;
    }
    return result;

}
