'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

var _routesHelper = require('../services/routesHelper');

var _getMaster = require('../controllers/getMaster');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  app.get('/api/professional/getmaster', _getMaster.getMaster);
  app.get('/api/professional/city', _getMaster.getCity);
  app.get('/api/professional/districts/:cityId', _getMaster.getDistricts);
  app.get('/api/professional/dharm', _getMaster.getDharm);
  // app.get(
  //   '/api/professional/kayda/:limit/:offset', 
  //   getKayda
  // );
  app.get('/api/professional/kayda', _getMaster.getKayda);
  app.get('/api/professional/kalam', _getMaster.getKalam);
  app.get('/api/professional/kalam/:actId', _getMaster.getKalamById);

  app.get('/api/professional/crimetypes', _getMaster.getCrimeType);
  app.get('/api/professional/crimetitles', _getMaster.getCrimeTitle);
  app.get('/api/professional/status', _getMaster.getStatus);
};
//# sourceMappingURL=getmaster.js.map