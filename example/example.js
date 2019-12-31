import React, { Component } from 'react';

/*  Development */
import {
    rfcValidate, emailValidate, textValidate, numValidate, singleValidation, multiValidation, commonValidate,
    textNumberValidate, requiredData, comboValidate, radioButtonValidate, validationDateRFC, dateValidateFormat, validationCheckBox
} from './../src/index.js'

/* Production */
// import {
//     rfcValidate, emailValidate, textValidate, numValidate, singleValidation, multiValidation, commonValidate,
//     textNumberValidate, requiredData, comboValidate, radioButtonValidate, validationDateRFC, dateValidateFormat, validationCheckBox
// } from './../dist/index.js'


export default () => {

    let DATA = [
        { type : [ "CHECK" ],    value : { 1 : true, 2 : true }, varError : "fer",    id: "errorrorooror" },
        { type : [ "R","N"    ], value : '3434',                 varError : "fer",    id: "errorrorooror" },
        { type : [ "R","RFC"  ], value : 'XXXX920804LP2',        varError : "rfc1",   id: "rfc1" },
        { type : [ "R","DATE" ], value : '09-12-1992',           varError : "fecha1", id: "fecha 1" },
        { type : [ "R","DATE" ], value : '09/12/1992',           varError : "fecha2", id: "fecha 2" },
        { type : [ "R","DATE" ], value : '09.12.1992',           varError : "fecha3", id: "fecha 3" },
        { type : "T",            value : 'example',              varError : "fer",    id: "errorrorooror" },
        {
            type         : [ 'R', 'RFC', 'RFC_DATE' ],
            value        : 'XXXX920804XX1',       // value rfc
            valueDate    : '04-08-1992',
            titleRFC     : 'R.F.C.',              // title rfc
            titleDate    : 'Fecha de nacimiento', // title Date
            varError     : 'varErrorRFC',         // varError rfc
            varErrorDate : 'varErrorDate',
            id           : 'focusRFC',            //focusRFC
            focusDate    : 'focusDate',
        },
        { type : "COMMON", value : 'sd', expRegular : /^([a-zA-Z ñáéíóúÑÁÉÍÓÚ .,]{0,100})$/, varError : "fer", id : "errorrorooror", message : 'wshbehfbwejf' }
    ];

    console.log( "NUM >>>",         numValidate( '134344' ) )
    console.log( "CHECKBOX >>>",    validationCheckBox( { 1 : true } ) )
    console.log( "TEXT >>>",        textValidate( "forever" ) )
    console.log( "TEXT_NUM >>>",    textNumberValidate( "ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ" ) )
    console.log( "RFC >>>",         rfcValidate( "XXXX920804XX1" ) )
    console.log( "EMAIL >>>",       emailValidate( "fer.l.c@gmail.com" ) )
    console.log( "REQUIRED >>>",    requiredData( "aabc" ) )
    console.log( "COMBO >>>",       comboValidate( "1" ) )
    console.log( "RADIO >>>",       radioButtonValidate( true ) );
    console.log( "DATE_TO_RFC >>>", validationDateRFC( 'XXXX920804LFP', '04-08-1992', 'R.F.C.', 'Fecha de nacimiento', 'errorRFC', 'errorFecha', 'focusRFC', 'focusDate' ) );
    console.log( "DATE >>>",        dateValidateFormat( '31/02/1991' ) );
    console.log( "DATE >>>",        dateValidateFormat( '31-02-1991' ) );
    console.log( "DATE >>>",        dateValidateFormat( '31.02.1991' ) );
    console.log( "COMMON >>>",      commonValidate( "hyukjhg", /^([a-zA-Z ñáéíóúÑÁÉÍÓÚ .,]{0,100})$/ ) );

    console.log( "<<<================================================>>>" );

    console.log( "MULTI_VALIDATION >>>",  multiValidation( DATA ) )
    console.log( "SINGLE_VALIDATION >>>", singleValidation(  DATA[ 8 ] ) );

    return <h1> Example Validations</h1>

};

