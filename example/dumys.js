export const DATA = [
    { type : [ "R"    ],               value : 'QWE',                  varError : "required",          id: "R",                 title: "titulo_R" },
    { type : [ "N"    ],               value : '123',                  varError : "number",            id: "N",                 title: "titulo_N" },
    { type : [ "CHECK" ],              value : { 1:true, 2:false },    varError : "check",             id: "CHECK",             title: "titulo_CHECK"},
    { type : [ "R","N"    ],           value : '1234',                 varError : "requiredNumber",    id: "[R, N]",            title: "titulo_R-N"},
    { type : [ "R","RFC"  ],           value : 'XXXX920804LP2',        varError : "rfc1",              id: "RFC",               title: "titulo_RFC"},
    { type : [ "R","RFC_GENERIC"  ],   value : 'XAXX010101000',        varError : "rfc2",              id: "RFC_GENERIC",       title: "titulo_RFC_GENERIC"},
    { type : [ "R","RFC_CLAVE"  ],     value : 'XXXX920801',           varError : "rfc clave",         id: "RFC_CLAVE",         title: "titulo_RFC_CLAVE"},
    { type : [ "R","DATE" ],           value : '09-12-1992',           varError : "fecha1",            id: "DATE 09-12-1992",   title: "titulo_DATE 1"},
    { type : [ "R","DATE" ],           value : '09/12/1992',           varError : "fecha2",            id: "DATE 09/12/1992",   title: "titulo_DATE 2"},
    { type : [ "R","DATE" ],           value : '09.12.1992',           varError : "fecha3",            id: "DATE 09.12.1992",   title: "titulo_DATE 3"},
    { type : "T",                      value : 'example',              varError : "text",              id: "T",                 title: "titulo_T"},
    { type : "TEXT_AREA_SPECIAL",      value : 'a1,.',                 varError : "text_area_special", id: "text_area_special", title: "titulo_T_A_SPECIAL"},
    { type : [ "R",
                "SPECIAL_CHARACTER" ], value : 'b2;:',                 varError : "special_character", id: "special_character", title: "titulo_S_CH"},
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
    {
        type         : "IS_RFC_GENERIC",
        value        : 'XAXX010101000'
    },
    { type : ["R","CURP"],      value : 'PXDO560626MNELRN09',           varError : "curp",             id: "text_curp",         title: "titulo_curp"},
    { type : "COMMON", value : 'sd', expRegular : /^([a-zA-Z ñáéíóúÑÁÉÍÓÚ .,]{0,100})$/, varError : "common", id : "errorrorooror", message : 'wshbehfbwejf' }

];

