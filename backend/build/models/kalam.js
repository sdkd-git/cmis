'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {
    var pc_kalams = Sequelize.define('pc_kalams', {
        act_cd: DataTypes.INTEGER,
        section_desc: DataTypes.STRING,
        section: DataTypes.STRING
    }, {});
    return pc_kalams;
};
//# sourceMappingURL=kalam.js.map