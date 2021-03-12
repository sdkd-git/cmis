'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

var _criminalInformation = require('../controllers/criminalInformation');

var _routesHelper = require('../services/routesHelper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {

    app.get('/api/criminaldeletes/getcriminalbyid/:id', _criminalInformation.getCriminalsById);

    app.get('/api/criminaldeletes/getCriminalsTableInfoById/:id', _criminalInformation.getCriminalsTableInfoById);

    app.put('/api/criminaldeletes/update/:id', _criminalInformation.updateCriminal);
};
//# sourceMappingURL=criminaldeletes.js.map