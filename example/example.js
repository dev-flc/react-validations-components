import React, { Component } from 'react';

/*  Development */
import {
    rfcValidate, emailValidate, textValidate, numValidate, singleValidation, multiValidation,
    textNumberValidate, requiredData, comboValidate, radioButtonValidate
} from './../src/index.js'

/* Production */
// import {
//     rfcValidate, emailValidate, textValidate, numValidate, singleValidation, multiValidation,
//     textNumberValidate, requiredData, comboValidate, radioButtonValidate
// } from './../dist/index.js'


export default () => {

    let DATA = [
        { type : [ "R","N" ],   value : "1212",          title : "example1" , varError : "fer",  focus: "errorrorooror" },
        { type : [ "R","T" ],   value : 'we',            title : "example2" , varError : "fer",  focus: "errorrorooror" },
        { type : [ "R","RFC" ], value : 'LOGH920804LP8', title : "RFC" ,      varError : "rfc1", focus: "rfc1" },
        { type : [ "R","RFC" ], value : 'sdfr910223sf1', title : "RFC" ,      varError : "rfc2", focus: "rfc2" },
        { type : "T",           value : 'q',             title : "example3" , varError : "fer",  focus: "errorrorooror" },
        { type : "T",           value : 'example',       title : "example4" , varError : "fer",  focus: "errorrorooror" },
    ];

    console.log("NUM >>> ",      numValidate( 1 ) )
    console.log("TEXT >>> ",     textValidate( "forever" ) )
    console.log("TEXT_NUM >>> ", textNumberValidate( "sdsd77" ) )
    console.log("RFC >>> ",      rfcValidate( "LUCF920804LP8" ) )
    console.log("EMAIL >>> ",    emailValidate( "fer.l.c@gmail.com" ) )
    console.log("REQUIRED >>> ", requiredData( "df" ) )
    console.log("COMBO >>> ",    comboValidate( "1" ) )
    console.log("RADIO >>> ",    radioButtonValidate( false ) );

    console.log("SINGLE_VALIDATION >>> ", singleValidation( { type : [ "R", "T" ], value : "fer", title : "fer" , varError : "fer" } ) )
    console.log("SINGLE_VALIDATION >>> ", singleValidation( { type : "T",          value : "fer", title : "fer" , varError : "fer" } ) )

    console.log("MULTI_VALIDATION >>> ", multiValidation( DATA ) )

    return <h1> Example Validations</h1>
};

