'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {
    var PC_BasicInformation = Sequelize.define('PC_BasicInformation', {
        heading: DataTypes.STRING,
        historySheeter: DataTypes.INTEGER,
        historydate: DataTypes.STRING,
        bothCriminal: DataTypes.INTEGER,
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        address: DataTypes.STRING,
        mobileNumber: DataTypes.STRING,
        state: DataTypes.INTEGER,
        city: DataTypes.INTEGER,
        district: DataTypes.INTEGER,
        aadharno: DataTypes.STRING,
        religion: DataTypes.INTEGER,
        cast: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        districtName: DataTypes.STRING
    }, {});

    return PC_BasicInformation;
};
//# sourceMappingURL=basicInformation.js.map