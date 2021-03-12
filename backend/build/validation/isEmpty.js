'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' && (0, _keys2.default)(value).length === 0 || typeof value === 'string' && value.trim().length === 0;
};

exports.default = isEmpty;
//# sourceMappingURL=isEmpty.js.map