<br>
<div align="center">
  <strong>Lib React Validations Components</strong>
</div>
<br>
<div align="center">
  by github <a href="https://github.com/fercho0/react-validations-components">Fernando.LC</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#Contributing">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>


## Introduction
----------------------------------------------------------------------

This is a small package that allows you to validate different components.

## Install
----------------------------------------------------------------------

**Install with npm**

```sh
$ npm install --save react-validations-components
$ npm i -S react-validations-components
```

**Install with yarn**

```sh
$ yarn add react-validations-components
```

## Usage
----------------------------------------------------------------------

To use, import the different functions exposed.

**Description of individual functions parameters**

|  name     | Description                        |
| ----------|------------------------------------|
| value     | data value                         |
| varError  | variable error name                |
| id        | component identifier               |
| title     | component title                    |


**Description Parameter Type**

|  value            | Description                             |
| ------------------|-----------------------------------------|
| R                 | data validation required                |
| T                 | validation of type text                 |
| N                 | validation of type number               |
| TN                | validation of type text and number      |
| RFC               | validation of type RFC                  |
| RFC_GENERIC       | validation of type RFC Generic          |
| IS_RFC_GENERIC    | validation of type Is RFC Generic       |
| RFC_CLAVE         | validation of type RFC                  |
| RFC_DATE          | validation of type RFC and date         |
| RFC_DATE_GENERIC  | validation of type RFC Generic and date |
| EMAIL             | validation of type email                |
| COMMON            | validation of type common               |
| C                 | validation of type combo                |
| RB                | validation of type Radio button         |
| DATE              | validation of type date                 |
| CHECK             | validation of type check                |
| TEXT_AREA_SPECIAL | validation of type tex area multi       |
| SPECIAL_CHARACTER | validation of type special character    |
| CURP              | validation of type CURP                 |

----------------------------------------------------------------------


```js
import {
    textValidate,
    numValidate,
    textNumberValidate,
    rfcValidate,
    rfcValidateGeneric,
    isGenericRFC
    rfcValidateClave,
    emailValidate,
    commonValidate,
    requiredData,
    comboValidate,
    radioButtonValidate,
    dateValidateFormat,
    validationDateRFC,
    validationDateRFCGeneric,
    validationCheckBox,
    textAreSpecialValidate,
    specialCharacterInValidate,
    curpValidate
} from 'react-validations-components'

/* COMPLETE EXAMPLE */

console.log("textValidate", textValidate( "hola", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("textValidate", textValidate( "hola" ))
// Result Successful = { status : true }

console.log( "textValidate", textValidate( "#$%", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO, no es válido, ingresa solo letras.', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "textValidate", textValidate( "#$%", "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato no es válido, ingresa solo letras.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("numValidate", numValidate( "123", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("numValidate", numValidate( 123 ))
// Result Successful = { status : true }

console.log( "numValidate", numValidate( "qwerty", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO no es válido, ingresa solo números.', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "numValidate", numValidate( "qwerty", "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO no es válido, ingresa solo números.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("textNumberValidate", textNumberValidate( "qwerty123qwerty", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("textNumberValidate", textNumberValidate( "qwerty123qwerty" ))
// Result Successful = { status : true }

console.log( "textNumberValidate", textNumberValidate( "13as!#$%", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO no es válido, ingresa solo letras y números.', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "textNumberValidate", textNumberValidate( "13as!#$%", "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato no es válido, ingresa solo letras y números.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("rfcValidate", rfcValidate( "XXXX920804XX1", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("rfcValidate", rfcValidate( "XXXX920804XX1" ))
// Result Successful = { status : true }

console.log("rfcValidateGeneric", rfcValidateGeneric( "XAXX010101000", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("rfcValidateGeneric", rfcValidateGeneric( "XAXX010101000" ))
// Result Successful = { status : true, isGeneric : true }

console.log("isGenericRFC", isGenericRFC( "XAXX010101000" ))
// Result Successful = { status : true }
console.log("isGenericRFC", isGenericRFC( "XAXX010101000", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error =  { status: false, error: 'El dato TITLE_COMPO no es válido', varError: 'errorText', id: 'ID_COMPONENT' }

console.log( "rfcValidate", rfcValidate( "XX920804", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO no es válido', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "rfcValidate", rfcValidate( "XX920804", "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato no es válido, ingresa solo letras y números.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("rfcValidateClave", rfcValidateClave( "XXXX920804XX1", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("rfcValidateClave", rfcValidateClave( "XXXX920804XX1" ))
// Result Successful = { status : true }

console.log( "rfcValidateClave", rfcValidateClave( "XX920804", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO no es válido', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "rfcValidateClave", rfcValidateClave( "XX920804", "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato no es válido, ingresa solo letras y números.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("emailValidate", emailValidate( "fer.l.c@gmail.com", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("emailValidate", emailValidate( "fer.l.c@gmail.com" ))
// Result Successful = { status : true }

console.log( "emailValidate", emailValidate( "fer.@", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO no es válido', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "emailValidate", emailValidate( "fer.@", "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato no es válido, ingresa solo letras y números.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("textAreSpecialValidate", textAreSpecialValidate( "$%&", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("textAreSpecialValidate", textAreSpecialValidate( "$%&" ))
// Result Successful = { status : true }

console.log( "textAreSpecialValidate", textAreSpecialValidate( "||°°", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO no es válido', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "textAreSpecialValidate", textAreSpecialValidate( "||°°", "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato no es válido, ingresa solo letras y números.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("specialCharacterInValidate", specialCharacterInValidate(  ":;#/()&\-_*,.", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("specialCharacterInValidate", specialCharacterInValidate( ":;#/()&\-_*,." ))
// Result Successful = { status : true }

console.log( "specialCharacterInValidate", specialCharacterInValidate( "||°°", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO no es válido', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "specialCharacterInValidate", specialCharacterInValidate( "||°°", "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato no es válido, ingresa solo letras y números.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("requiredData", requiredData( "Hola", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("requiredData", requiredData( 1 ))
// Result Successful = { status : true }

console.log( "requiredData", requiredData( "", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO es requerido.', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "requiredData", requiredData( "", "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato es requerido.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("comboValidate", comboValidate( "1", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("comboValidate", comboValidate( 1 ))
// Result Successful = { status : true }

console.log( "comboValidate", comboValidate( -1, "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO es requerido.', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "comboValidate", comboValidate( -1, "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato es requerido.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("radioButtonValidate", radioButtonValidate( false, "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("radioButtonValidate", radioButtonValidate( true ))
// Result Successful = { status : true }

console.log( "radioButtonValidate", radioButtonValidate( null, "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO es requerido.', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "radioButtonValidate", radioButtonValidate( "", "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato es requerido.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("dateValidateFormat", dateValidateFormat( "01/01/1991", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("dateValidateFormat", dateValidateFormat( "01-01-1991" ))
// Result Successful = { status : true }

console.log( "dateValidateFormat", dateValidateFormat( "01/1991", "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO no es válido.', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "dateValidateFormat", dateValidateFormat( "01-1992", "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato no es válido.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("validationCheckBox", validationCheckBox( { 1 : true }, "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
console.log("validationCheckBox", validationCheckBox( { 1 : true } ))
// Result Successful = { status : true }

console.log( "validationCheckBox", validationCheckBox( { 1 : false }, "errorText", "ID_COMPONENT", "TITLE_COMPO" ))
// Result Error = {status: false, error: 'El dato TITLE_COMPO es requerido.', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "validationCheckBox", validationCheckBox( { 1 : false }, "errorText", "ID_COMPONENT" ))
// Result Error = {status: false, error: 'El dato es requerido.', varError: 'errorText', id: 'ID_COMPONENT'}



console.log("commonValidate", commonValidate( "12314", /^([0-9])*$/, "errorOther", "errorText", "ID_COMPONENT" ))
console.log("commonValidate", commonValidate( "12314", /^([0-9])*$/ ))
// Result Successful = { status : true }

console.log("commonValidate", commonValidate( "12314#$%", /^([0-9])*$/, "errorOther", "errorText", "ID_COMPONENT" ))
// Result Error = status: false, error: 'errorOther', varError: 'errorText', id: 'ID_COMPONENT'}

console.log( "curpValidate", curpValidate( "PXDO560626MNELRN09", "errorText", "ID_COMPONENT" ))
// Result Successful = { status : true }
console.log( "curpValidate", curpValidate( "PXDOA60626MNELRNAA", "errorText", "ID_COMPONENT" ))
//Result Error =  {status: false, error: 'El dato no es válido.', varError: 'errorText', id: 'ID_COMPONENT'}

```

To use the advanced functions, import the different functions exposed.

**Description Parameters**

|  name     | Description                        | Type Data                        |
| ----------|------------------------------------|----------------------------------|
| type      | type of validation                 | String, Array                    |
| value     | data value                         | Number, Bolean, String, Floating |
| varError  | variable error name                | String                           |
| id        | component identifier               | String                           |
| title     | name to show in the error message  | String                           |

```js
import {
    singleValidation,
    multiValidation
} from 'react-validations-components'


```
**Example function single**

The following function can identify a type of validation or several TYPE that can be distinguished by a STRING or ARRAY, which is shown below.

```js

console.log( singleValidation( { type : [ "R", "T" ], value : 'QWE', varError : "fer", id : "R", title : "titulo R" } ) )
// Result successful  = { status : true }
// Result Error= {status: false, error: 'El dato titulo R es requerido.', varError: 'fer', id: 'R'}

```
**Example function munti**

The next function is composed of an array of objects, which have the same properties as the previous functions.

```js
const DATA = [
    { type : [ "R"    ],               value : 'QWE',                  varError : "fer",       id: "R",                 title: "titulo R" },
    { type : [ "N"    ],               value : '123',                  varError : "fer",       id: "N",                 title: "titulo N" },
    { type : [ "CHECK" ],              value : { 1:true, 2:false },    varError : "fer",       id: "CHECK",             title: "titulo CHECK"},
    { type : [ "R","N"    ],           value : '1234',                 varError : "fer",       id: "[R, N]",            title: "titulo R-N"},
    { type : [ "R","RFC"  ],           value : 'XXXX920804LP2',        varError : "rfc1",      id: "RFC",               title: "titulo RFC"},
    { type : [ "R","RFC_GENERIC"  ],   value : 'XAXX010101000',        varError : "rfc2",      id: "RFC_GENERIC",       title: "titulo_RFC_GENERIC"},
    { type : [ "R","RFC_CLAVE"  ],     value : 'XXXX920801',           varError : "rfc clave", id: "RFC_CLAVE",         title: "titulo RFC_CLAVE"},
    { type : [ "R","DATE" ],           value : '09-12-1992',           varError : "fecha1",    id: "DATE 09-12-1992",   title: "titulo DATE 1"},
    { type : [ "R","DATE" ],           value : '09/12/1992',           varError : "fecha2",    id: "DATE 09/12/1992",   title: "titulo DATE 2"},
    { type : [ "R","DATE" ],           value : '09.12.1992',           varError : "fecha3",    id: "DATE 09.12.1992",   title: "titulo DATE 3"},
    { type : "T",                      value : 'example',              varError : "fer",       id: "T",                 title: "titulo T"},
    { type : "TEXT_AREA_SPECIAL",      value : 'a1,.',                 varError : "fer",       id: "text_area_special", title: "titulo T_A_SPECIAL"},
    { type : [ "R",
                "SPECIAL_CHARACTER" ], value : 'b2;:',                 varError : "fer",       id: "special_character", title: "titulo S_CH"},
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
    {
        type         : [ 'R', 'RFC_GENERIC', 'RFC_DATE_GENERIC' ],
        value        : 'XAXX010101000',       // value rfc
        valueDate    : '04-08-1992',
        titleRFC     : 'R.F.C.',              // title rfc
        titleDate    : 'Fecha de nacimiento', // title Date
        varError     : 'varErrorRFC',         // varError rfc
        varErrorDate : 'varErrorDate',
        id           : 'focusRFC',            //focusRFC
        focusDate    : 'focusDate',
    },
    { type : ["R","CURP"],      value : 'PXDO560626MNELRN09',           varError : "curp",             id: "text_curp",         title: "titulo_curp"},
    { type : "COMMON", value : 'sd', expRegular : /^([a-zA-Z ñáéíóúÑÁÉÍÓÚ .,]{0,100})$/, varError : "fer", id : "errorrorooror", message : 'wshbehfbwejf' }

];


console.log( multiValidation( DATA ) )

// Result successful  = { status : true }

/** Returns one error at a time */

// Result Error= {status: false, error: 'El dato titulo R es requerido.', varError: 'fer', id: 'R'}

```

## Contributing
----------------------------------------------------------------------
All Contributions are welcome! Please open up an issue if you would like to help out.

## License
----------------------------------------------------------------------
Licensed under the [MIT License](https://raw.githubusercontent.com/fercho0/react-validations-components/master/LICENSE).
