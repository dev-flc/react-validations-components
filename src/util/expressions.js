// Expresiones Regulares
export const RFC                = /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([a-zA-Z\d]{2})([A-ZÑa-zñ\d])$/;
export const RFC_CLAVE          = /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))$/;
export const EMAIL              = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
export const POSTALCODE         = /(^([0-9]{5,5})|^)$/;
export const TEXT               = /^([a-zA-Z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ .,]{0,100})$/;
export const NUMBER             = /^([0-9])*$/;
export const TEXT_NUMBER        = /^[a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 .,]*$/;
export const FORMAT_DATE        = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
export const TEXT_AREA_SPECIAL  = /^([a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#\/()´¨&"_*.%¿?$¡!@+¨]*$)|(\n[a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#\/()´¨&"_*.%¿?$¡!@+¨]{1,}$)/;
export const SPECIAL_CHARACTER  = /^([a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#\/()´¨&"\_*.%¿?$¡!@+¨]*$)/;
export const CURP               = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
