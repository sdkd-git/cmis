'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Sequelize, DataTypes) {
    var _Sequelize$define;

    var PC_OtherInformation = Sequelize.define('PC_OtherInformation', (_Sequelize$define = {
        isMemberOfGang: DataTypes.STRING,
        accusedBusiness: DataTypes.STRING,
        accusedFamilyMember: DataTypes.STRING,
        accusedAssets: DataTypes.STRING,
        accusedResidence: DataTypes.STRING,
        accusedJurisdiction: DataTypes.STRING,
        accusedCourtCaseNo: DataTypes.STRING,
        accusedCourtDate: DataTypes.STRING,
        accusedjailStatus: DataTypes.STRING,
        accusedVehicalDetails: DataTypes.STRING,
        accusedLawyerDetails: DataTypes.STRING,
        accusedIdentifyingOfficer: DataTypes.STRING,
        accusedSupportingleaders: DataTypes.STRING
    }, (0, _defineProperty3.default)(_Sequelize$define, 'accusedSupportingleaders', DataTypes.STRING), (0, _defineProperty3.default)(_Sequelize$define, 'masterId', DataTypes.INTEGER), (0, _defineProperty3.default)(_Sequelize$define, 'userId', DataTypes.INTEGER), (0, _defineProperty3.default)(_Sequelize$define, 'accusedImage', DataTypes.STRING), (0, _defineProperty3.default)(_Sequelize$define, 'accusedPham', DataTypes.STRING), (0, _defineProperty3.default)(_Sequelize$define, 'accusedRecords', DataTypes.STRING), _Sequelize$define), {});

    return PC_OtherInformation;
};
//# sourceMappingURL=otherInformation.js.map