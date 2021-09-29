export let DATA = [
    { type : [ "CHECK" ],                  value : { 1 : true, 2 : true }, varError : "fer",    id: "errorrorooror" },
    { type : [ "R","N"    ],               value : '3434',                 varError : "fer",    id: "errorrorooror" },
    { type : [ "R","RFC"  ],               value : 'XXXX920804LP2',        varError : "rfc1",   id: "rfc1" },
    { type : [ "R","RFC_CLAVE"  ],         value : 'XXXX920801',           varError : "rfc clave",   id: "rfc clave" },
    { type : [ "R","DATE" ],               value : '09-12-1992',           varError : "fecha1", id: "fecha 1" },
    { type : [ "R","DATE" ],               value : '09/12/1992',           varError : "fecha2", id: "fecha 2" },
    { type : [ "R","DATE" ],               value : '09.12.1992',           varError : "fecha3", id: "fecha 3" },
    { type : "T",                          value : 'example',              varError : "fer",    id: "errorrorooror" },
    { type : "TEXT_AREA_SPECIAL",          value : 'a1,.',                 varError : "fer",    id: "text_area_special" },
    { type : [ "R", "SPECIAL_CHARACTER" ], value : 'b2;:',                 varError : "fer",    id: "special_character" },
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

