'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {
    var PC_GunhaInformation = Sequelize.define('PC_GunhaInformation', {
        state: DataTypes.INTEGER,
        city: DataTypes.INTEGER,
        district: DataTypes.INTEGER,
        registernumber: DataTypes.STRING,
        registernumberYear: DataTypes.STRING,
        dateTime: DataTypes.STRING,
        heading: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
        masterId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        districtName: DataTypes.STRING,
        typesOfCourt: DataTypes.STRING,
        statusDate: DataTypes.STRING,
        caseNumbers: DataTypes.STRING,
        punishment: DataTypes.STRING,
        Penalty: DataTypes.STRING
    }, {});

    return PC_GunhaInformation;
};
//# sourceMappingURL=gunhaInformation.js.map