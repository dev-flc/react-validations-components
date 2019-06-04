
import {
    requiredData,
    textValidate,
    numValidate,
    textNumberValidate,
    rfcValidate,
    emailValidate,
    commonValidate,
    comboValidate,
    radioButtonValidate } from './functions.js'


export const SWITCH_VALIDATIONS = data => {

    let { value, type, title, varError, expRegular, message, focus } = data;

    if ( type !== "RFC" ) {
        title = title.toLowerCase();
    }

    let result = { status: false, error: "error" };

    switch ( type ) {

        case "R":
            result = requiredData( value, title, varError, focus );
            break;

        case "T":
            result = textValidate( value, title, varError, focus )
            break;

        case "N":
            result = numValidate( value, title, varError, focus );
            break;

        case "TN":
            result = textNumberValidate( value, title, varError, focus );
            break;

        case "RFC":
            result = rfcValidate( value, title, varError, focus );
            break;

        case "EMAIL":
            result = emailValidate( value, title, varError, focus );
            break;

        case "COMMON":
            result = commonValidate( value, expRegular, varError, message, focus );
            break;

        case "C":
            result = comboValidate( value, title, varError, focus );
            break;

        case "RB":
            result = radioButtonValidate( value, title, varError, focus );
            break;

        default:
            console.log("El tipo de validación no existe :(", type)
            break;
    }
    return result;

}
