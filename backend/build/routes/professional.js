'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

var _routesHelper = require('../services/routesHelper');

var _professional = require('../controllers/professional');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  app.post('/api/users/createprofessional', _professional.crateProfessional);
};
//# sourceMappingURL=professional.js.map