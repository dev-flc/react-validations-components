import { EMAIL, TEXT, TEXT_NUMBER, NUMBER, RFC, FORMAT_DATE }  from "./../util/expressions.js"

import map  from 'lodash/map';
import some from 'lodash/some';

export let textValidate = ( value = "", varError = "", id = "" ) => {
    return RegExp(TEXT).test(value.trim())
    ? { status : true }
    : { status : false, error : `El dato no es válido, ingresa solo letras.`, varError, id }
}

export let numValidate = ( value = "", varError = "", id = ""  ) => {
    return RegExp(NUMBER).test(value)
    ? { status : true }
    : { status : false, error : `El dato no es válido, ingresa solo números.`, varError, id }
}

export let textNumberValidate = ( value = "", varError = "", id = "" ) => {
    return RegExp(TEXT_NUMBER).test(value)
    ? { status: true }
    : { status: false, error : `El dato no es válido, ingresa solo letras y números.`, varError, id }
}

export let rfcValidate = ( value = "", varError = "", id = "" ) => {
    return RegExp(RFC).test(value)
    ? { status: true }
    : { status: false, error : `El dato no es válido`, varError, id }
}

export let emailValidate = ( value = "", varError = "", id = "" ) => {
    return RegExp(EMAIL).test(value)
    ? { status: true }
    : { status: false, error : `El dato no es válido`, varError, id }
}

export let commonValidate = ( value = "", expRegular = "", varError = "", message = "", id = "" ) => {
    return RegExp(expRegular).test(value)
    ? { status: true }
    : { status: false, error : message, varError, id }
}

export const requiredData = ( value = "", varError = "", id = "" ) => {
    let result = { status : true }
    if( value === null || value === ""  ) {
        result = { status : false, error : `El dato es requerido.`, varError, id };
    }
    return result;
};

export let comboValidate = ( value = "", varError = "", id = "" ) => {
    if(value !== null && value !== -1 && (value !== "" && value !== undefined )){
        return  { status: true }
    }else{
        return { status : false, error : `El dato es requerido.`, varError, id }
    }
}

export let radioButtonValidate = ( value = "", varError = "", id = "" ) => {
    if(value === true || value === false){
        return { status : true }
    }else{
        return { status : false, error : `El dato es requerido.`, varError, id }
    }
}

export let dateValidateFormat = ( value = "", varError = "", id = "" ) => {
    return RegExp(FORMAT_DATE).test(value)
    ? { status : true }
    : { status : false, error : `El dato no es válido`, varError, id }
}

let formatDateToRFC = date => {

    let newDate =  date.split( '-' )

    date = new Date( `${ newDate[ 2 ] }/${ newDate[1] }/${ newDate[0] }` );

    let year  = date.getFullYear().toString().substr(-2);
    let month = date.getMonth() + 1;
    let day   = date.getDate();

    month = month <= 9 ? 0+month.toString() : month;
    day   = day   <= 9 ? 0+day.toString()   : day;

    return `${year}${ month }${ day }`;

}

export let validationDateRFC = ( rfc, date, titleRFC = "", titleDate = "", varErrorRFC = "", varErrorDate = "", focusRFC = "", focusDate = "" ) => {

    let result = { status : true }

    // validation required date
    let resDateRequired = requiredData( date, titleDate.toLowerCase(), varErrorDate, focusDate );

    if ( resDateRequired.status === false ){
        return resDateRequired;
    }

    // validation format date
    let resDateaFormt = dateValidateFormat( date, titleDate.toLowerCase(), varErrorDate, focusDate );

    if ( resDateaFormt.status === false ){
        return resDateaFormt;
    }

    let resNewFormatDate = formatDateToRFC( date );

    if ( resNewFormatDate !== rfc.substr(4,6) ) {
        result = { status : false, error :`La fecha del ${ titleRFC } no coincide con la ${ titleDate.toLowerCase() }.` , varError : varErrorRFC, id : focusRFC }
    }

    return result;

}

export let validationCheckBox  = ( value = {}, varError = "", id = "" ) => {

    let newVal = val => ( { val } )

    if ( some( map( value, newVal ), { val : true } ) ) {

        return { status : true }

    } else {

        return { status : false, error : `El dato es requerido.`, varError, id }

    }
}
