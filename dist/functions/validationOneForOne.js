'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multiValidation = exports.singleValidation = undefined;

var _switchValidations = require('./switchValidations.js');

var isString = function isString(str) {
    return Object.prototype.toString.call(str) === '[object String]';
};
var isArray = function isArray(data) {
    return Array.isArray(data);
};

var singleValidation = exports.singleValidation = function singleValidation(data) {
    var value = data.value,
        type = data.type,
        title = data.title,
        varError = data.varError,
        expRegular = data.expRegular,
        message = data.message,
        focus = data.focus;


    var result = { status: false, error: "El valor de type no es un array o un string", type: type };

    if (isArray(type)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {

            for (var _iterator = type[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var newType = _step.value;


                var resultMulty = (0, _switchValidations.SWITCH_VALIDATIONS)({ value: value, type: newType, title: title, varError: varError, expRegular: expRegular, message: message, focus: focus });

                if (resultMulty.status === false) {
                    result = resultMulty;
                    break;
                } else {
                    result = resultMulty;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    } else if (isString(type)) {
        result = (0, _switchValidations.SWITCH_VALIDATIONS)(data);
    }

    return result;
};

var multiValidation = exports.multiValidation = function multiValidation(data) {

    var result = { status: true };

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var newData = _step2.value;


            var newResult = { status: true };

            if (newData.visible === true || newData.visible === undefined) {
                var value = newData.value,
                    type = newData.type,
                    title = newData.title,
                    varError = newData.varError,
                    expRegular = newData.expRegular,
                    message = newData.message,
                    focus = newData.focus;


                if (isArray(type)) {
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {

                        for (var _iterator3 = type[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var newType = _step3.value;


                            var resultMulty = (0, _switchValidations.SWITCH_VALIDATIONS)({ value: value, type: newType, title: title, varError: varError, expRegular: expRegular, message: message, focus: focus });

                            if (resultMulty.status === false) {
                                newResult = resultMulty;
                                break;
                            } else {
                                newResult = resultMulty;
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                } else if (isString(type)) {
                    newResult = (0, _switchValidations.SWITCH_VALIDATIONS)(newData);
                } else {
                    newResult = { status: false, error: "El valor de type no es un array o un string", type: type };
                }
            }

            if (!newResult.status) {
                return newResult;
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return result;
};