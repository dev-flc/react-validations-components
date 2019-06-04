import { EMAIL, TEXT, TEXT_NUMBER, NUMBER, RFC }  from "./../util/expressions.js"

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
