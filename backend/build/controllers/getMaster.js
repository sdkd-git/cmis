'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKalamById = exports.getStatus = exports.getCrimeTitle = exports.getCrimeType = exports.getKayda = exports.getKalam = exports.getDharm = exports.getDistricts = exports.getCity = exports.getMaster = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pc_countrystates = _models2.default.pc_countrystates;
var pc_cities = _models2.default.pc_cities;
var pc_districts = _models2.default.pc_districts;
var pc_dharms = _models2.default.pc_dharms;
var pc_kalams = _models2.default.pc_kalams;
var pc_acts = _models2.default.pc_acts;
var pc_crimetypes = _models2.default.pc_crimetypes;
var pc_crimetitles = _models2.default.pc_crimetitles;
var pc_status = _models2.default.pc_status;

var getMaster = function getMaster(req, res) {
  var id = '121';
  pc_countrystates.findAll({
    where: {
      id: id
    }
  }).then(function (pc_countrystates) {
    res.json({
      pc_countrystates: pc_countrystates
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};
var getCity = function getCity(req, res) {
  pc_cities.findAll().then(function (pc_cities) {
    res.json({
      pc_cities: pc_cities
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};
var getDistricts = function getDistricts(req, res) {
  console.log(req.params);
  var CityId = req.params.cityId;
  pc_districts.findAll({
    where: {
      CityId: CityId
    }
  }).then(function (pc_districts) {
    res.json({
      pc_districts: pc_districts
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

var getDharm = function getDharm(req, res) {
  pc_dharms.findAll().then(function (pc_dharms) {
    res.json({
      pc_dharms: pc_dharms
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

var getKalam = function getKalam(req, res) {
  pc_kalams.findAll().then(function (pc_kalams) {
    res.json({
      pc_kalams: pc_kalams
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

var getKayda = function getKayda(req, res) {
  // const limit = req.params.limit;
  // const offset = req.params.offset;

  // let paramQuerySQL = {
  //   offset:parseInt(offset),
  //   limit:parseInt(limit)
  // }

  // console.log(paramQuerySQL,req.params)
  // pc_acts.findAndCountAll(paramQuerySQL).then(apis => res.json({
  //   error: false,
  //   count: apis.count,
  //   data: apis.rows,
  // })).catch(err => res.status(500).json({
  //   err
  // }));


  pc_acts.findAll().then(function (pc_acts) {
    res.json({
      pc_acts: pc_acts
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

var getKalamById = function getKalamById(req, res) {
  var id = req.params.actId;
  pc_kalams.findAll({
    where: {
      act_cd: id
    }
  }).then(function (pc_kalams) {
    res.json({
      pc_kalams: pc_kalams
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

var getCrimeType = function getCrimeType(req, res) {
  pc_crimetypes.findAll().then(function (pc_crimetypes) {
    res.json({
      pc_crimetypes: pc_crimetypes
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

var getCrimeTitle = function getCrimeTitle(req, res) {
  pc_crimetitles.findAll().then(function (pc_crimetitles) {
    res.json({
      pc_crimetitles: pc_crimetitles
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

var getStatus = function getStatus(req, res) {
  pc_status.findAll().then(function (pc_status) {
    res.json({
      pc_status: pc_status
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

exports.getMaster = getMaster;
exports.getCity = getCity;
exports.getDistricts = getDistricts;
exports.getDharm = getDharm;
exports.getKalam = getKalam;
exports.getKayda = getKayda;
exports.getCrimeType = getCrimeType;
exports.getCrimeTitle = getCrimeTitle;
exports.getStatus = getStatus;
exports.getKalamById = getKalamById;
//# sourceMappingURL=getMaster.js.map