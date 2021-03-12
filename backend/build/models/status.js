'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {

    var pc_status = Sequelize.define('pc_status', {
        name: DataTypes.STRING
    }, {});

    return pc_status;
};
//# sourceMappingURL=status.js.map