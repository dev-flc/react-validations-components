import { SWITCH_VALIDATIONS } from './switchValidations.js';

const isString = ( str ) => Object.prototype.toString.call( str ) === '[object String]';
const isArray  = ( data ) => Array.isArray( data );

export let singleValidation = data => {

    let { value, type, title, varError, expRegular, message, focus, valueDate,
        titleDate,  varErrorDate,  focusDate } = data;

    let result = { status : false, error : "El valor de type no es un array o un string", type };

    if ( isArray( type ) ) {

        for( let newType of type ) {

            let resultMulty = SWITCH_VALIDATIONS( { value, type : newType, title, varError, expRegular, message, focus, valueDate,
                titleDate, varErrorDate, focusDate  } );

            if ( resultMulty.status === false ) {
                result = resultMulty;
                break;
            }

            else { result = resultMulty }
        }
    }

    else if ( isString( type ) ) { result = SWITCH_VALIDATIONS( data ) }

    return result;

}



export let multiValidation = data => {

    let result = { status : true };

    for ( let newData of data ) {

        let { value, type, title, varError, expRegular, message, focus, valueDate,
            titleDate, varErrorDate, focusDate } = newData;

        let newResult = { status : false, error : "El valor de type no es un array o un string", type }

        if ( isArray( type ) ) {

            for( let newType of type ) {
                let resultMulty = SWITCH_VALIDATIONS( { value, type : newType, title, varError, expRegular, message, focus, valueDate,
                    titleDate, varErrorDate, focusDate } );

                if ( resultMulty.status === false ) {
                    newResult = resultMulty;
                    break;
                }

                else { newResult = resultMulty }
            }
        }

        else if ( isString( type ) ) { newResult = SWITCH_VALIDATIONS( newData ) }

        if ( !newResult.status ) { return newResult }

    }
    return result;
}

