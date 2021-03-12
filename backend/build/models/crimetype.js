'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {
    var pc_crimetypes = Sequelize.define('pc_crimetypes', {
        title_id: DataTypes.INTEGER,
        crimetype: DataTypes.STRING
    }, {});
    return pc_crimetypes;
};
//# sourceMappingURL=crimetype.js.map