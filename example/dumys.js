export let DATA = [
    { type : [ "R"    ],               value : 'QWE',                  varError : "fer",       id: "R",                 title: "titulo R" },
    { type : [ "N"    ],               value : '123',                  varError : "fer",       id: "N",                 title: "titulo N" },
    { type : [ "CHECK" ],              value : { 1:true, 2:false },    varError : "fer",       id: "CHECK",             title: "titulo CHECK"},
    { type : [ "R","N"    ],           value : '1234',                 varError : "fer",       id: "[R, N]",            title: "titulo R-N"},
    { type : [ "R","RFC"  ],           value : 'XXXX920804LP2',        varError : "rfc1",      id: "RFC",               title: "titulo RFC"},
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
    { type : "COMMON", value : 'sd', expRegular : /^([a-zA-Z ñáéíóúÑÁÉÍÓÚ .,]{0,100})$/, varError : "fer", id : "errorrorooror", message : 'wshbehfbwejf' }

];

