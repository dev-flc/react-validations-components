
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
    validationDateRFC } from './functions.js'


export const SWITCH_VALIDATIONS = data => {

    let { value, type, title, varError, expRegular, message, focus, valueDate,
        titleDate, varErrorDate, focusDate } = data;

    let result = { status: false, error: "error" };

    switch ( type ) {

        case "R":
            if ( title !== "R.F.C." ) { title = title.toLowerCase() }
            result = requiredData( value, title, varError, focus );
            break;

        case "T":
            title = title.toLowerCase();
            result = textValidate( value, title, varError, focus )
            break;

        case "N":
            title = title.toLowerCase();
            result = numValidate( value, title, varError, focus );
            break;

        case "TN":
            title = title.toLowerCase();
            result = textNumberValidate( value, title, varError, focus );
            break;

        case "RFC":
            result = rfcValidate( value, title, varError, focus );
            break;

        case "RFC_DATE":
            result = validationDateRFC( value, valueDate, title, titleDate, varError, varErrorDate, focus, focusDate );
            break;

        case "EMAIL":
            title = title.toLowerCase();
            result = emailValidate( value, title, varError, focus );
            break;

        case "COMMON":
            result = commonValidate( value, expRegular, varError, message, focus );
            break;

        case "C":
            title = title.toLowerCase();
            result = comboValidate( value, title, varError, focus );
            break;

        case "RB":
            title = title.toLowerCase();
            result = radioButtonValidate( value, title, varError, focus );
            break;

        default:
            console.log("El tipo de validación no existe :(", type)
            break;
    }
    return result;

}
