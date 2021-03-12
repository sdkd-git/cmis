'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty = require('./isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLoginForm(data) {
  var errors = {};

  data.userid = !(0, _isEmpty2.default)(data.userid) ? data.userid : '';
  data.password = !(0, _isEmpty2.default)(data.password) ? data.password : '';

  // if (!Validator.isEmail(data.userid)) {
  //   errors.userid = 'userid is invalid';
  // }

  if (_validator2.default.isEmpty(data.userid)) {
    errors.userid = 'userid is required';
  }

  if (_validator2.default.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty2.default)(errors)
  };
};

exports.default = validateLoginForm;
//# sourceMappingURL=login.js.map