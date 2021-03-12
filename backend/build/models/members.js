'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {
    var PC_Members = Sequelize.define('PC_Members', {
        regsiterNumber: DataTypes.STRING,
        registernumberYear: DataTypes.STRING,
        memberName: DataTypes.STRING,
        masterId: DataTypes.INTEGER,
        gunhaId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    }, {});
    return PC_Members;
};
//# sourceMappingURL=members.js.map