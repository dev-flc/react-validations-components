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

    const [ numValue, setNumValue ]                                          = useState( 0 );
    const [ checValue, setChecValue ]                                        = useState( { 1 : true } );
    const [ textValue, setTextValue ]                                        = useState( 'Hola Mundo' );
    const [ textValueNumberValidate, setTextNumberValidate ]                 = useState( "ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ" )
    const [ rfcValueValidate, setRfcValueValidate ]                          = useState( "XXXX920804XX1" )
    const [ rfcValueValidateClave, setRfcValidateClave ]                     = useState( "XXXX920807" )
    const [ emailValueValidate, setEmailValidate ]                           = useState( "fer.l.c@gmail.com" )
    const [ requiredDataValue, setRequiredData ]                             = useState( "aabc" )
    const [ comboValidateValue, setComboValidate ]                           = useState( "1" )
    const [ radioButtonValidateValue, setRadioButtonValidate ]               = useState( true )
    const [ validationDateRFCValue, setValidationDateRFC ]                   = useState( 'XXXX920804LFP', '04-08-1992', 'R.F.C.', 'Fecha de nacimiento', 'errorRFC', 'errorFecha', 'focusRFC', 'focusDate' )
    const [ dateValidateFormatValue, setSateValidateFormat ]                 = useState( '31/02/1991' )
    const [ commonValidateValue, setCommonValidate ]                         = useState( "hyukjhg", /^([a-zA-Z ñáéíóúÑÁÉÍÓÚ .,]{0,100})$/ )
    const [ textAreSpecialValidateValue, setTextAreSpecialValidate ]         = useState( ":;#/()&\-_*,." )
    const [ specialCharacterInValidateValue, setSpecialCharacterInValidate ] = useState( ":;#/()&\-_*,." )

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
        {
            nombreFuncion : `validationCheckBox({ 1 : true })`,
            value         : checValue,
            funcion       : validationCheckBox,
            hook          : setChecValue,
            aplyParse     : false,
            htmlCheckBox  : true,
        },
        {
            nombreFuncion : `textValidate('sdsdsd')`,
            value         : textValue,
            funcion       : textValidate,
            hook          : setTextValue,
            aplyParse     : false
        },
        {
            nombreFuncion : `textNumberValidate( "ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ" )`,
            value         : textValueNumberValidate,
            funcion       : textNumberValidate,
            hook          : setTextNumberValidate,
            aplyParse     : false
        },
        {
            nombreFuncion : `rfcValidate( "XXXX920804XX1" )`,
            value         : rfcValueValidate,
            funcion       : rfcValidate,
            hook          : setRfcValueValidate,
            aplyParse     : false
        },
        {
            nombreFuncion : `rfcValidateClave( "XXXX920804" )`,
            value         : rfcValueValidateClave,
            funcion       : rfcValidateClave,
            hook          : setRfcValidateClave,
            aplyParse     : false
        },
        {
            nombreFuncion : `emailValidate( "fer.l.c@gmail.com" )`,
            value         : emailValueValidate,
            funcion       : emailValidate,
            hook          : setEmailValidate,
            aplyParse     : false
        },
        {
            nombreFuncion : `requiredData( "aabc" )`,
            value         : requiredDataValue,
            funcion       : requiredData,
            hook          : setRequiredData,
            aplyParse     : false
        },
        {
            nombreFuncion : `comboValidate( "1" )`,
            value         : comboValidateValue,
            funcion       : comboValidate,
            hook          : setComboValidate,
            aplyParse     : false
        },
        {
            nombreFuncion : `radioButtonValidate( true )`,
            value         : radioButtonValidateValue,
            funcion       : radioButtonValidate,
            hook          : setRadioButtonValidate,
            aplyParse     : false,
            htmlRadio     : true
        },
        { /* FIXME: Revisar como mandarle diferentes hooks */
            nombreFuncion : `validationDateRFC( 'XXXX920804LFP', '04-08-1992', 'R.F.C.', 'Fecha de nacimiento', 'errorRFC', 'errorFecha', 'focusRFC', 'focusDate' )`,
            value         : validationDateRFCValue,
            funcion       : validationDateRFC,
            hook          : setValidationDateRFC,
            aplyParse     : false
        },
        {
            nombreFuncion : `dateValidateFormat( '31/02/1991' ) || ( '31-02-1991' ) || ( '31.02.1991' ) `,
            value         : dateValidateFormatValue,
            funcion       : dateValidateFormat,
            hook          : setSateValidateFormat,
            aplyParse     : false
        },
        {
            nombreFuncion : `commonValidate( "hyukjhg", /^([a-zA-Z ñáéíóúÑÁÉÍÓÚ .,]{0,100})$/ )  `,
            value         : commonValidateValue,
            funcion       : commonValidate,
            hook          : setCommonValidate,
            aplyParse     : false
        },
        {
            nombreFuncion : `textAreSpecialValidate( ":;#/()&\-_*,." )  `,
            value         : textAreSpecialValidateValue,
            funcion       : textAreSpecialValidate,
            hook          : setTextAreSpecialValidate,
            aplyParse     : false
        },
        {
            nombreFuncion : `specialCharacterInValidate( ":;#/()&\-_*,." )  `,
            value         : specialCharacterInValidateValue,
            funcion       : specialCharacterInValidate,
            hook          : setSpecialCharacterInValidate,
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
            nombreFuncion : `singleValidation()`,
            value         : singleValue,
            funcion       : singleValidation,
            hook          : setSingleValue,
            aplyParse     : true
        }
    ]

    const pruebaSwitch = data => {
        let { value, hook, aplyParse, htmlCheckBox, htmlRadio } = data;
        let newComponent = {}
        switch ( true ) {
            case aplyParse    :
                newComponent = (
                    <textarea
                        value    = { JSON.stringify( value ) }
                        onChange = { e => hook( JSON.parse( e.target.value ) ) }
                    />
                )
            break;
            case htmlCheckBox :
                newComponent = (
                    <input
                        checked  = { value[ 1 ] }
                        type     = "checkbox"
                        value    = { !value[ 1 ] }
                        onChange = { e => hook( { 1 : JSON.parse( e.target.value ) } ) }
                    />
                )
            break;
            case htmlRadio    :
                newComponent = (
                    <div>
                        <input
                            checked  = { JSON.parse( value ) }
                            name     = "radio_id"
                            type     = "radio"
                            value    = { value }
                            onChange = { () => hook( true ) }
                        />
                        <label> { 'Activa true' } </label>

                        <input
                            name     = "radio_id"
                            type     = "radio"
                            value    = { !value }
                            onChange = { e => hook( e.target.value ) }
                        />
                        <label> { 'Activa false' } </label>
                    </div>
                )
            break;
            default:
                newComponent = (
                    <input
                        value    = { value }
                        onChange = { e => hook( e.target.value ) }
                    />
                )
            break;
        }

        console.log("singleValidation", singleValidation( DATA[ 0 ] ));
        //console.log("multiValidation", multiValidation( DATA ));

        return newComponent
    }

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

                        let { funcion, value, nombreFuncion } = data;

                        return(
                            <tr key = {index}>
                                <td className ="content-td-nombre"> { nombreFuncion } </td>
                                <td className ="content-td-parametro">
                                    {
                                        pruebaSwitch( data )
                                    }
                                </td>
                                <td className ={`content-td-funcion-${ funcion( value ).status }` }><div>{ JSON.stringify( funcion( value ) ) } </div></td>
                            </tr>
                        )
                    } )

                }
            </tbody>
        </table>
    )
};

