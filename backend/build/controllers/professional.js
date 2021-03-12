'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crateProfessional = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PC_ProfessionalsBasic = _models2.default.PC_ProfessionalsBasic;
var PC_Gunha = _models2.default.PC_Gunha;
var PC_OtherInformation = _models2.default.PC_OtherInformation;

var crateProfessional = function crateProfessional(req, res) {
    PC_ProfessionalsBasic.create(req.body).then(function (professional) {
        res.json({ professional: professional });
    }).catch(function (error) {
        res.json({});
    });
};

exports.crateProfessional = crateProfessional;
//# sourceMappingURL=professional.js.map