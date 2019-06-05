import { EMAIL, TEXT, TEXT_NUMBER, NUMBER, RFC, FORMAT_DATE }  from "./../util/expressions.js"

export let textValidate = ( value = "", title = "", varError = "", focus = "" ) => {
    return RegExp(TEXT).test(value.trim())
    ? { status : true }
    : { status : false, error : `El dato ${title} no es válido, ingresa solo letras.`, varError, focus }
}

export let numValidate = ( value = "", title = "", varError = "", focus = ""  ) => {
    return RegExp(NUMBER).test(value)
    ? { status : true }
    : { status : false, error : `El dato ${title} no es válido, ingresa solo números.`, varError, focus }
}

export let textNumberValidate = ( value = "", title = "", varError = "", focus = "" ) => {
    return RegExp(TEXT_NUMBER).test(value)
    ? { status: true }
    : { status: false, error : `El dato ${title} no es válido, ingresa solo letras y números.`, varError, focus }
}

export let rfcValidate = ( value = "", title = "", varError = "", focus = "" ) => {
    return RegExp(RFC).test(value)
    ? { status: true }
    : { status: false, error : `El dato ${title} no es válido`, varError, focus }
}

export let emailValidate = ( value = "", title = "", varError = "", focus = "" ) => {
    return RegExp(EMAIL).test(value)
    ? { status: true }
    : { status: false, error : `El dato ${title} no es válido`, varError, focus }
}

export let commonValidate = ( value = "", expRegular = "", varError = "", message = "",  ) => {
    return RegExp(expRegular).test(value)
    ? { status: true }
    : { status: false, error : message, varError, focus }
}

export const requiredData = ( value = "", title = "", varError = "", focus = "" ) => {
    let result = { status : true }
    if( value === null || value === ""  ) {
        result = { status : false, error : `El dato ${title} es requerido.`, varError, focus };
    }
    return result;
};

export let comboValidate = ( value = "", title = "", varError = "", focus = "" ) => {
    if(value !== null && value !== -1 && (value !== "" && value !== undefined )){
        return  { status: true }
    }else{
        return { status : false, error : `El dato ${title} es requerido.`, varError, focus }
    }
}

export let radioButtonValidate = ( value = "", title = "", varError = "", focus = "" ) => {
    if(value === true || value === false){
        return { status : true }
    }else{
        return { status : false, error : `El dato ${title} es requerido.`, varError, focus }
    }
}

export let dateValidateFormat = ( value = "", title = "", varError = "", focus = "" ) => {
    return RegExp(FORMAT_DATE).test(value)
    ? { status: true }
    : { status: false, error : `El dato ${title} no es válido`, varError, focus }
}

let formatDateToRFC = date => {

    date = new Date( date );

    let year  = date.getFullYear().toString().substr(-2);
    let month = date.getMonth() + 1;
    let day   = date.getDate() + 1;

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
        result = { status : false, error :`La fecha del ${ titleRFC } no coincide con la ${ titleDate.toLowerCase() }.` , varError : varErrorRFC, focus : focusRFC }
    }

    return result;

}
