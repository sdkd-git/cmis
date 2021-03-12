'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {
    var pc_acts = Sequelize.define('pc_acts', {
        act_cd: DataTypes.INTEGER,
        kayda: DataTypes.STRING
    }, {});
    return pc_acts;
};
//# sourceMappingURL=acts.js.map