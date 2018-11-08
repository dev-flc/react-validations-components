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

**Description Parameters**

|  name     | Description                        |
| ----------|------------------------------------|
| value     | data value                         |
| name      | name to show in the error message  |
| varError  | variable error name                |
| focus     | component identifier               |

```js
import {
    textValidate, 
    numValidate, 
    textNumberValidate,
    rfcValidate, 
    emailValidate,
    requiredData, 
    comboValidate, 
    radioButtonValidate
} from 'react-validations-components'

/* COMPLETE EXAMPLE */

// Parameters 
let value    = "VALIDATION TYPE TEXT";
let name     = "NAME";
let varError = "errorText";
let focus    = "ID_COMPONENT"

console.log( "TEXT >>> ", textValidate( value, name ,varError, focus ) )

// Result Successful = { status : true }

// Result Error= { status : false, error : "El dato NAME no es válido, ingresa solo letras.", varError : "errorText", focus : "ID_COMPONENT"}

/* BASIC EXAMPLES */

console.log("NUM >>> ", numValidate( 1 ) )
// Result  = { status : true }

console.log("TEXT_NUM >>> ", textNumberValidate( "sdsd77" ) )
// Result successful  = { status : true }

console.log("RFC >>> ", rfcValidate( "XXXX090909XX0" ) )
// Result successful  = { status : true }


console.log("EMAIL >>> ", emailValidate( "fer.l.c@gmail.com" ) )
// Result successful  = { status : true }


console.log("REQUIRED >>> ", requiredData( "df" ) )
// Result successful  = { status : true }


console.log("COMBO >>> ", comboValidate( "1" ) )
// Result successful  = { status : true }


console.log("RADIO >>> ", radioButtonValidate( false ) )
// Result successful  = { status : true }

```

To use the advanced functions, import the different functions exposed.

**Description Parameters**

|  name     | Description                        | Type Data                        |
| ----------|------------------------------------|----------------------------------|
| type      | type of validation                 | String, Array                    | 
| value     | data value                         | Number, Bolean, String, Floating |
| title     | name to show in the error message  | String                           |
| varError  | variable error name                | String                           |
| focus     | component identifier               | String                           |

```js
import {
    singleValidation,
    multiValidation
} from 'react-validations-components'


```
**Example function single**

The following function can identify a type of validation or several TYPE that can be distinguished by a STRING or ARRAY, which is shown below.

```js

console.log( singleValidation( { type : [ "R", "T" ], value : "value", title : "title" , varError : "varError", focus : "focus" } ) )
// Result successful  = { status : true }

// Result Error= { status : false, error : "El dato NAME no es válido, ingresa solo letras.", varError : "errorText", focus : "ID_COMPONENT"}


        
console.log( singleValidation( { type : "T", value : "value", title : "title" , varError : "varError", focus : "focus" } ) )
// Result successful  = { status : true }

// Result Error= { status : false, error : "El dato NAME no es válido, ingresa solo letras.", varError : "errorText", focus : "ID_COMPONENT"}


```
**Example function munti**

The next function is composed of an array of objects, which have the same properties as the previous functions.

```js
const DATA = [
    { type : "N", value : 55, title : "title" , varError : "varError" , focus : "focus" },
    { type : [ "R", "T" ], value : "value", title : "title" , varError : "varError", focus : "focus" }
];

console.log( multiValidation( DATA ) )

// Result successful  = { status : true }

// Result Error= { status : false, error : "El dato NAME no es válido, ingresa solo letras.", varError : "errorText", focus : "ID_COMPONENT"}

```

## Contributing
----------------------------------------------------------------------
All Contributions are welcome! Please open up an issue if you would like to help out.

## License
----------------------------------------------------------------------
Licensed under the [MIT License](https://raw.githubusercontent.com/fercho0/react-validations-components/master/LICENSE).
