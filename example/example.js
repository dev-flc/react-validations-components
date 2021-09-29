import React,  { useState } from 'react';

/*  Development */
import {
    rfcValidate, rfcValidateClave, emailValidate, textValidate, numValidate, singleValidation, multiValidation, commonValidate,
    textNumberValidate, requiredData, comboValidate, radioButtonValidate, validationDateRFC, dateValidateFormat,
    validationCheckBox, textAreSpecialValidate, specialCharacterInValidate
 } from './../src/index.js';

 import { DATA } from './dumys.js'

/* Production */
/*
import {
    rfcValidate, emailValidate, textValidate, numValidate, singleValidation, multiValidation, commonValidate,
    textNumberValidate, requiredData, comboValidate, radioButtonValidate, validationDateRFC, dateValidateFormat,
    validationCheckBox, textAreSpecialValidate, specialCharacterInValidate
} from './../dist/index.js'*/

export default () => {
    console.log( "TEXT >>>",        textValidate( "forever" ) )
    console.log( "TEXT_NUM >>>",    textNumberValidate( "ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ" ) )
    console.log( "RFC >>>",         rfcValidate( "XXXX920804XX1" ) )
    console.log( "RFC_CLAVE >>>",   rfcValidateClave( "XXXX920807" ) )
    console.log( "EMAIL >>>",       emailValidate( "fer.l.c@gmail.com" ) )
    console.log( "REQUIRED >>>",    requiredData( "aabc" ) )
    console.log( "COMBO >>>",       comboValidate( "1" ) )
    console.log( "RADIO >>>",       radioButtonValidate( true ) );
    console.log( "DATE_TO_RFC >>>", validationDateRFC( 'XXXX920804LFP', '04-08-1992', 'R.F.C.', 'Fecha de nacimiento', 'errorRFC', 'errorFecha', 'focusRFC', 'focusDate' ) );
    console.log( "DATE >>>",        dateValidateFormat( '31/02/1991' ) );
    console.log( "DATE >>>",        dateValidateFormat( '31-02-1991' ) );
    console.log( "DATE >>>",        dateValidateFormat( '31.02.1991' ) );
    console.log( "COMMON >>>",      commonValidate( "hyukjhg", /^([a-zA-Z ñáéíóúÑÁÉÍÓÚ .,]{0,100})$/ ) );
    console.log( "SPECIAL_CHA >>>", textAreSpecialValidate( ":;#/()&\-_*,." ) );
    console.log( "SPECIAL_IN >>>",  specialCharacterInValidate( ":;#/()&\-_*,." ) );


    const [ numValue, setNumValue ]   = useState(12123);
    const [ checValue, setChecValue ] = useState( { 1 : true } );
    const [ textValue, setTextValue ] = useState( 'Hola Mundo' );


    const [ multiValue, setMultiValue ]   = useState( DATA );
    const [ singleValue, setSingleValue ] = useState( DATA[3] );


    const arreglodedatos = [
        {
            nombreFuncion : `numValidate(2332)`,
            value         : numValue,
            funcion       : numValidate,
            hook          : setNumValue,
            aplyParse     : false
        },
        { /* PENDIENTE HOOK FIXME: */
            nombreFuncion : `validationCheckBox({ 1 : true })`,
            value         : checValue,
            funcion       : validationCheckBox,
            hook          : setChecValue,
            aplyParse     : true
        },
        {
            nombreFuncion : `textValidate('sdsdsd')`,
            value         : textValue,
            funcion       : textValidate,
            hook          : setTextValue,
            aplyParse     : false
        },
        {
            nombreFuncion : `multiValidation()`,
            value         : multiValue,
            funcion       : multiValidation,
            hook          : setMultiValue,
            aplyParse     : true
        },
        {
            nombreFuncion : `multiValidation()`,
            value         : singleValue,
            funcion       : singleValidation,
            hook          : setSingleValue,
            aplyParse     : true
        }
    ]

    return (
        <table>
            <thead>
            <tr>
                <th>Funcion</th>
                <th>Parametros</th>
                <th>Resultado</th>
            </tr>
            </thead>
            <tbody>
                {
                    arreglodedatos.map( (data, index) =>{
                        let { funcion, value, nombreFuncion, hook, aplyParse } = data;
                        return(
                            <tr key = {index}>
                                <td className ="content-td-nombre"> { nombreFuncion } </td>
                                <td className ="content-td-parametro">
                                    {
                                        aplyParse ?
                                        <textarea value = { JSON.stringify( value ) } onChange = { e => hook(JSON.parse(e.target.value))} />
                                        :
                                        <input value = {  value } onChange = { e => hook( e.target.value ) } />
                                    }
                                </td>
                                <td className ={`content-td-funcion-${ funcion( value ).status}`}><div>{ JSON.stringify( funcion( value ) ) } </div></td>
                            </tr>
                        )
                    } )

                }

            </tbody>
        </table>
    )
};

