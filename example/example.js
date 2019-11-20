import React, { Component } from 'react';

/*  Development */
import {
    rfcValidate, emailValidate, textValidate, numValidate, singleValidation, multiValidation,
    textNumberValidate, requiredData, comboValidate, radioButtonValidate, validationDateRFC, dateValidateFormat, validationCheckBox
} from './../src/index.js'

/* Production */
// import {
//     rfcValidate, emailValidate, textValidate, numValidate, singleValidation, multiValidation,
//     textNumberValidate, requiredData, comboValidate, radioButtonValidate, validationDateRFC, dateValidateFormat, validationCheckBox
// } from './../dist/index.js'


export default () => {

    let DATA = [
        { type : [ "CHECK" ],    value : { 1 : true, 2 : true }, title : "example1" , varError : "fer",    focus: "errorrorooror" },
        { type : [ "R","N"    ], value : '3434',                 title : "example2" , varError : "fer",    focus: "errorrorooror" },
        { type : [ "R","RFC"  ], value : 'XXXX920804LP2',        title : "R.F.C." ,   varError : "rfc1",   focus: "rfc1" },
        { type : [ "R","DATE" ], value : '09-12-1992',           title : "Fecha1" ,   varError : "fecha1", focus: "fecha 1" },
        { type : [ "R","DATE" ], value : '09/12/1992',           title : "Fecha2" ,   varError : "fecha2", focus: "fecha 2" },
        { type : [ "R","DATE" ], value : '09.12.1992',           title : "Fecha3" ,   varError : "fecha3", focus: "fecha 3" },
        { type : [ "R","RFC"  ], value : 'XXXX920804XX1',        title : "R.F.C." ,   varError : "rfc2",   focus: "rfc2" },
        { type : "T",            value : 'q',                    title : "example3" , varError : "fer",    focus: "errorrorooror" },
        { type : "T",            value : 'example',              title : "example4" , varError : "fer",    focus: "errorrorooror" },
        {
            type         : [ 'R', 'RFC', 'RFC_DATE' ],
            value        : 'XXXX920804XX1',       // value rfc
            valueDate    : '04-08-1992',
            title        : 'R.F.C.',               // title rfc
            titleDate    : 'Fecha de nacimiento',
            varError     : 'varErrorRFC',         // varError rfc
            varErrorDate : 'varErrorDate',
            focus        : 'focusRFC',            //focusRFC
            focusDate    : 'focusDate',
        }
    ];

    console.log( "NUM >>>",         numValidate( 1 ) )
    console.log( "CHECKBOX >>>",    validationCheckBox( { 1 : false } ) )
    console.log( "TEXT >>>",        textValidate( "forever" ) )
    console.log( "TEXT_NUM >>>",    textNumberValidate( "sdsd77" ) )
    console.log( "RFC >>>",         rfcValidate( "XXXX920804XX1" ) )
    console.log( "EMAIL >>>",       emailValidate( "fer.l.c@gmail.com" ) )
    console.log( "REQUIRED >>>",    requiredData( "df" ) )
    console.log( "COMBO >>>",       comboValidate( "1" ) )
    console.log( "RADIO >>>",       radioButtonValidate( false ) );
    console.log( "DATE_TO_RFC >>>", validationDateRFC( 'XXXX920804XX1', '04-08-1992', 'R.F.C.', 'Fecha de nacimiento', 'errorRFC', 'errorFecha', 'focusRFC', 'focusDate' ) );
    console.log( "DATE >>>",        dateValidateFormat( '31/02/1991' ) );
    console.log( "DATE >>>",        dateValidateFormat( '31-02-1991' ) );
    console.log( "DATE >>>",        dateValidateFormat( '31.02.1991' ) );
    console.log( "<<<================================================>>>" );
    console.log( "MULTI_VALIDATION >>>",  multiValidation( DATA ) )
    console.log( "SINGLE_VALIDATION >>>", singleValidation(  DATA[ 0 ] ) );

    return <h1> Example Validations</h1>

};

