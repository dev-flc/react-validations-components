'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multiValidation = exports.singleValidation = undefined;

var _switchValidations = require('./switchValidations.js');

var singleValidation = exports.singleValidation = function singleValidation(data) {
    var value = data.value,
        type = data.type,
        title = data.title,
        varError = data.varError,
        expRegular = data.expRegular,
        message = data.message,
        focus = data.focus;


    title = title.toLowerCase();

    var result = { status: true };

    if (Array.isArray(type)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = type[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var types = _step.value;

                var resultValidation = (0, _switchValidations.SWITCH_VALIDATIONS)(value, types, name, varError, expRegular, message, focus);
                if (!resultValidation.status) {
                    return resultValidation;
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
    } else {
        var _resultValidation = (0, _switchValidations.SWITCH_VALIDATIONS)(value, type, name, varError, expRegular, message, focus);
        if (!_resultValidation.status) {
            return _resultValidation;
        }
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


                title = title.toLowerCase();

                if (Array.isArray(type)) {
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = type[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var types = _step3.value;

                            var resultValidation = (0, _switchValidations.SWITCH_VALIDATIONS)(value, types, name, varError, expRegular, message, focus);
                            if (!resultValidation.status) {
                                return resultValidation;
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
                } else {
                    var _resultValidation2 = (0, _switchValidations.SWITCH_VALIDATIONS)(value, type, name, varError, expRegular, message, focus);
                    if (!_resultValidation2.status) {
                        return _resultValidation2;
                    }
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