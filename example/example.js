import React, { Component } from 'react';

/*  Development */
import {
    rfcValidate, emailValidate, textValidate, numValidate, singleValidation, multiValidation,
    textNumberValidate, requiredData, comboValidate, radioButtonValidate, validationDateRFC
} from './../src/index.js'

/* Production */
// import {
//     rfcValidate, emailValidate, textValidate, numValidate, singleValidation, multiValidation,
//     textNumberValidate, requiredData, comboValidate, radioButtonValidate, validationDateRFC
// } from './../dist/index.js'


export default () => {

    let DATA = [
        { type : [ "R","N" ],   value : "1212",          title : "example1" , varError : "fer",  focus: "errorrorooror" },
        { type : [ "R","T" ],   value : 'we',            title : "example2" , varError : "fer",  focus: "errorrorooror" },
        { type : [ "R","RFC" ], value : 'XXXX920804XX1', title : "R.F.C." ,      varError : "rfc1", focus: "rfc1" },
        { type : [ "R","RFC" ], value : 'XXXX920804XX1', title : "R.F.C." ,      varError : "rfc2", focus: "rfc2" },
        { type : "T",           value : 'q',             title : "example3" , varError : "fer",  focus: "errorrorooror" },
        { type : "T",           value : 'example',       title : "example4" , varError : "fer",  focus: "errorrorooror" },
        {
            type         : [ 'R', 'RFC', 'RFC_DATE' ],
            value        : 'XXXX920804XX1',       // value rfc
            valueDate    : '2092-08-04',
            title        : 'R.F.C.',               // title rfc
            titleDate    : 'Fecha de nacimiento',
            varError     : 'varErrorRFC',         // varError rfc
            varErrorDate : 'varErrorDate',
            focus        : 'focusRFC',            //focusRFC
            focusDate    : 'focusDate',
        }
    ];

    console.log("NUM >>> ",      numValidate( 1 ) )
    console.log("TEXT >>> ",     textValidate( "forever" ) )
    console.log("TEXT_NUM >>> ", textNumberValidate( "sdsd77" ) )
    console.log("RFC >>> ",      rfcValidate( "XXXX920804XX1" ) )
    console.log("EMAIL >>> ",    emailValidate( "fer.l.c@gmail.com" ) )
    console.log("REQUIRED >>> ", requiredData( "df" ) )
    console.log("COMBO >>> ",    comboValidate( "1" ) )
    console.log("RADIO >>> ",    radioButtonValidate( false ) );
    console.log("DATE_TO_RFC",   validationDateRFC( 'XXXX920804XX1', '2092-08-04', 'R.F.C.', 'Fecha de nacimiento', 'errorRFC', 'errorFecha', 'focusRFC', 'focusDate' ) );

    console.log("SINGLE_VALIDATION >>> ", singleValidation(  {
        type         : [ 'R', 'RFC', 'RFC_DATE' ],
        value        : 'XXXX920804XX1',
        valueDate    : '2092-08-04',
        title        : 'R.F.C.',
        titleDate    : 'Fecha de nacimiento',
        varError     : 'varErrorRFC',
        varErrorDate : 'varErrorDate',
        focus        : 'focusRFC',
        focusDate    : 'focusDate',
    } ) );

    console.log("MULTI_VALIDATION >>> ", multiValidation( DATA ) )

    return <h1> Example Validations</h1>
};

