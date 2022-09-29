import { EMAIL, TEXT, TEXT_NUMBER, NUMBER, RFC, RFC_CLAVE, FORMAT_DATE, TEXT_AREA_SPECIAL, SPECIAL_CHARACTER, CURP }  from "./../util/expressions.js"

import map     from 'lodash/map';
import some    from 'lodash/some';

const validaTitle = ( title, msgEmpty, msg ) => title === "" ? msgEmpty : msg

export const textValidate = ( value = "", varError = "", id = "", title = "" ) => {
    return RegExp(TEXT).test(value.trim())
    ? { status : true }
    : { status : false, error : validaTitle( title, `El dato no es válido, ingresa sólo letras.`,
    `El dato ${ title }, no es válido, ingresa sólo letras.` ), varError, id }
}

export let numValidate = ( value = "", varError = "", id = "", title = "" ) => {
    return RegExp(NUMBER).test(value)
    ? { status : true }
    : { status : false, error : validaTitle( title, `El dato no es válido, ingresa sólo números.`,
    `El dato ${ title } no es válido, ingresa sólo números.`), varError, id }
}

export const textNumberValidate = ( value = "", varError = "", id = "", title = "" ) => {
    return RegExp(TEXT_NUMBER).test(value)
    ? { status: true }
    : { status: false, error : validaTitle( title, `El dato no es válido, ingresa sólo letras y números.`,
    `El dato ${ title } no es válido, ingresa sólo letras y números.` ), varError, id }
}

export const rfcValidateGeneric = ( value = "", varError = "", id = "", title = "" ) => {
    let result = { status: true, isGeneric : true }
    if (isGenericRFC(value.toLowerCase())){
        result = rfcValidate(value, varError, id, title);
        result.isGeneric = false;
    }
    return result;
}

export const rfcValidate = ( value = "", varError = "", id = "", title = "" ) => {
    return RegExp(RFC).test(value)
    ? { status: true }
    : { status: false, error : validaTitle( title, `El dato no es válido.`,
    `El dato ${ title } no es válido.`), varError, id }
}

export const rfcValidateClave = ( value = "", varError = "", id = "", title = "" ) => {
    return RegExp(RFC_CLAVE).test(value)
    ? { status: true }
    : { status: false, error : validaTitle( title, `El dato no es válido.`,
    `El dato ${ title } no es válido.` ), varError, id }
}

export const emailValidate = ( value = "", varError = "", id = "", title = "" ) => {
    return RegExp(EMAIL).test(value)
    ? { status: true }
    : { status: false, error : validaTitle( title, `El dato no es válido.`,
    `El dato ${ title } no es válido.` ), varError, id }
}

export const commonValidate = ( value = "", expRegular = "", varError = "", message = "", id = "" ) => {
    return RegExp(expRegular).test(value)
    ? { status: true }
    : { status: false, error : message, varError, id }
}

export const textAreSpecialValidate = ( value = "", varError = "", id = "", title = "" ) => {
    return RegExp(TEXT_AREA_SPECIAL).test(value)
    ? { status: true }
    : { status: false, error : validaTitle( title, `El dato no es válido.`,
    `El dato ${ title } no es válido` ), varError, id }
}

export const specialCharacterInValidate = ( value = "", varError = "", id = "", title = "" ) => {
    return RegExp(SPECIAL_CHARACTER).test(value)
    ? { status: true }
    : { status: false, error : validaTitle( title, `El dato no es válido.`,
    `El dato ${ title } no es válido`), varError, id }
}

export const requiredData = ( value = "", varError = "", id = "", title = "" ) => {
    let result = { status : true }
    if( value === null || value === ""  ) {
        result = { status : false, error : validaTitle( title, `El dato es requerido.`,
        `El dato ${ title } es requerido.` ), varError, id };
    }
    return result;
};

export const comboValidate = ( value = "", varError = "", id = "", title = "" ) => {
    if(value !== null && value !== -1 && (value !== "" && value !== undefined )){
        return  { status: true }
    }else{
        return { status : false, error : validaTitle( title, `El dato es requerido.`,
        `El dato ${ title } es requerido.`), varError, id }
    }
}

export const radioButtonValidate = ( value = "", varError = "", id = "", title = "" ) => {
    if(value === true || value === false){
        return { status : true }
    }else{
        return { status : false, error : validaTitle( title, `El dato es requerido.`,
        `El dato ${ title } es requerido.`), varError, id }
    }
}

export const dateValidateFormat = ( value = "", varError = "", id = "", title = "" ) => {
    return RegExp(FORMAT_DATE).test(value)
    ? { status : true }
    : { status : false, error : validaTitle( title, `El dato no es válido`,
    `El dato ${ title } no es válido` ), varError, id }
}

const formatDateToRFC = date => {

    let newDate =  date.split( '-' )

    date = new Date( `${ newDate[ 2 ] }/${ newDate[1] }/${ newDate[0] }` );

    let year  = date.getFullYear().toString().substr(-2);
    let month = date.getMonth() + 1;
    let day   = date.getDate();

    month = month <= 9 ? 0+month.toString() : month;
    day   = day   <= 9 ? 0+day.toString()   : day;

    return `${year}${ month }${ day }`;

}

const isGenericRFC = rfc => {
    return  !(rfc === "xaxx010101000" || rfc === "xexx010101000" || rfc === "axaxx010101000" || rfc === "axexx010101000");
};

export const validationDateRFCGeneric = ( rfc, date, titleRFC = "", titleDate = "", varErrorRFC = "", varErrorDate = "", focusRFC = "", focusDate = "" ) => {
    let result = { status : true }
    if (isGenericRFC(rfc.toLowerCase())) {      
        result = validationDateRFC(rfc, date, titleRFC, titleDate, varErrorRFC, varErrorDate, focusRFC, focusDate )
    }
    return result
}

export const validationDateRFC = ( rfc, date, titleRFC = "", titleDate = "", varErrorRFC = "", varErrorDate = "", focusRFC = "", focusDate = "" ) => {

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

export const validationCheckBox  = ( value = {}, varError = "", id = "", title = "" ) => {

    let newVal = val => ( { val } )

    if ( some( map( value, newVal ), { val : true } ) ) {

        return { status : true }

    } else {

        return { status : false, error : validaTitle( title, `El dato es requerido.`,
        `El dato ${ title } es requerido.`), varError, id }

    }
}

export const curpValidate = ( value = {}, varError = "", id = "", title = "" ) =>{
    return RegExp(CURP).test(value)
    ? { status: true }
    : { status: false, error : validaTitle( title, `El dato no es válido.`,
    `El dato ${ title } no es válido.`), varError, id }
}
