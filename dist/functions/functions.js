'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validationCheckBox = exports.validationDateRFC = exports.dateValidateFormat = exports.radioButtonValidate = exports.comboValidate = exports.requiredData = exports.specialCharacterInValidate = exports.textAreSpecialValidate = exports.commonValidate = exports.emailValidate = exports.rfcValidate = exports.textNumberValidate = exports.numValidate = exports.textValidate = undefined;

var _expressions = require('./../util/expressions.js');

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _some = require('lodash/some');

var _some2 = _interopRequireDefault(_some);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textValidate = exports.textValidate = function textValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    return RegExp(_expressions.TEXT).test(value.trim()) ? { status: true } : { status: false, error: 'El dato no es v\xE1lido, ingresa solo letras.', varError: varError, id: id };
};

var numValidate = exports.numValidate = function numValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    return RegExp(_expressions.NUMBER).test(value) ? { status: true } : { status: false, error: 'El dato no es v\xE1lido, ingresa solo n\xFAmeros.', varError: varError, id: id };
};

var textNumberValidate = exports.textNumberValidate = function textNumberValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    return RegExp(_expressions.TEXT_NUMBER).test(value) ? { status: true } : { status: false, error: 'El dato no es v\xE1lido, ingresa solo letras y n\xFAmeros.', varError: varError, id: id };
};

var rfcValidate = exports.rfcValidate = function rfcValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    return RegExp(_expressions.RFC).test(value) ? { status: true } : { status: false, error: 'El dato no es v\xE1lido', varError: varError, id: id };
};

var emailValidate = exports.emailValidate = function emailValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    return RegExp(_expressions.EMAIL).test(value) ? { status: true } : { status: false, error: 'El dato no es v\xE1lido', varError: varError, id: id };
};

var commonValidate = exports.commonValidate = function commonValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var expRegular = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var varError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";

    return RegExp(expRegular).test(value) ? { status: true } : { status: false, error: message, varError: varError, id: id };
};

var textAreSpecialValidate = exports.textAreSpecialValidate = function textAreSpecialValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    return RegExp(_expressions.TEXT_AREA_SPECIAL).test(value) ? { status: true } : { status: false, error: 'El dato no es v\xE1lido', varError: varError, id: id };
};

var specialCharacterInValidate = exports.specialCharacterInValidate = function specialCharacterInValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    return RegExp(_expressions.SPECIAL_CHARACTER).test(value) ? { status: true } : { status: false, error: 'El dato no es v\xE1lido', varError: varError, id: id };
};

var requiredData = exports.requiredData = function requiredData() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    var result = { status: true };
    if (value === null || value === "") {
        result = { status: false, error: 'El dato es requerido.', varError: varError, id: id };
    }
    return result;
};

var comboValidate = exports.comboValidate = function comboValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    if (value !== null && value !== -1 && value !== "" && value !== undefined) {
        return { status: true };
    } else {
        return { status: false, error: 'El dato es requerido.', varError: varError, id: id };
    }
};

var radioButtonValidate = exports.radioButtonValidate = function radioButtonValidate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    if (value === true || value === false) {
        return { status: true };
    } else {
        return { status: false, error: 'El dato es requerido.', varError: varError, id: id };
    }
};

var dateValidateFormat = exports.dateValidateFormat = function dateValidateFormat() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    return RegExp(_expressions.FORMAT_DATE).test(value) ? { status: true } : { status: false, error: 'El dato no es v\xE1lido', varError: varError, id: id };
};

var formatDateToRFC = function formatDateToRFC(date) {

    var newDate = date.split('-');

    date = new Date(newDate[2] + '/' + newDate[1] + '/' + newDate[0]);

    var year = date.getFullYear().toString().substr(-2);
    var month = date.getMonth() + 1;
    var day = date.getDate();

    month = month <= 9 ? 0 + month.toString() : month;
    day = day <= 9 ? 0 + day.toString() : day;

    return '' + year + month + day;
};

var validationDateRFC = exports.validationDateRFC = function validationDateRFC(rfc, date) {
    var titleRFC = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var titleDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var varErrorRFC = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
    var varErrorDate = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
    var focusRFC = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
    var focusDate = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";


    var result = { status: true

        // validation required date
    };var resDateRequired = requiredData(date, titleDate.toLowerCase(), varErrorDate, focusDate);

    if (resDateRequired.status === false) {
        return resDateRequired;
    }

    // validation format date
    var resDateaFormt = dateValidateFormat(date, titleDate.toLowerCase(), varErrorDate, focusDate);

    if (resDateaFormt.status === false) {
        return resDateaFormt;
    }

    var resNewFormatDate = formatDateToRFC(date);

    if (resNewFormatDate !== rfc.substr(4, 6)) {
        result = { status: false, error: 'La fecha del ' + titleRFC + ' no coincide con la ' + titleDate.toLowerCase() + '.', varError: varErrorRFC, id: focusRFC };
    }

    return result;
};

var validationCheckBox = exports.validationCheckBox = function validationCheckBox() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var varError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";


    var newVal = function newVal(val) {
        return { val: val };
    };

    if ((0, _some2.default)((0, _map2.default)(value, newVal), { val: true })) {

        return { status: true };
    } else {

        return { status: false, error: 'El dato es requerido.', varError: varError, id: id };
    }
};