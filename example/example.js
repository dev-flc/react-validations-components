import React, { Component } from 'react';

import {
    rfcValidate, emailValidate, textValidate, numValidate, singleValidation, multiValidation,
    textNumberValidate, requiredData, comboValidate, radioButtonValidate
} from './../dist/index.js'

class Example extends Component {

    componentWillMount() {
        let DATA = [
            { type : [ "R","T" ], value : 'example', title : "example" , varError : "fer", focus: "errorrorooror" }
        ];
        console.log("NUM >>> ", numValidate( 1 ) )
        console.log("TEXT_NUM >>> ", textNumberValidate( "sdsd77" ) )
        console.log("RFC >>> ", rfcValidate( "LUCF920804LP8" ) )
        console.log("EMAIL >>> ", emailValidate( "fer.l.c@gmail.com" ) )
        console.log("REQUIRED >>> ", requiredData( "df" ) )
        console.log("COMBO >>> ", comboValidate( "1" ) )
        console.log("RADIO >>> ", radioButtonValidate( false ) )
        console.log("SINGLE_VALIDATION >>> ", singleValidation( { type : [ "R", "T" ], value : "fer", title : "fer" , varError : "fer" } ) )
        console.log("SINGLE_VALIDATION >>> ", singleValidation( { type : "T", value : "fer", title : "fer" , varError : "fer" } ) )
        console.log("MULTI_VALIDATION >>> ", multiValidation( DATA ) )
    }

    render () {
        return(
        	<div>
                <h1> Example Validations</h1>
        	</div>
        );
    }
}

export default Example;
