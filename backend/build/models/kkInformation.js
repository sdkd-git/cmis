'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {
    var PC_KKInformation = Sequelize.define('PC_KKInformation', {
        rules: DataTypes.INTEGER,
        kalam: DataTypes.STRING,
        rulesName: DataTypes.STRING,
        kalamName: DataTypes.STRING,
        masterId: DataTypes.INTEGER,
        gunhaId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    }, {});

    return PC_KKInformation;
};
//# sourceMappingURL=kkInformation.js.map