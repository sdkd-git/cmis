'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {

    var pc_countrystates = Sequelize.define('pc_countrystates', {
        state: DataTypes.STRING,
        countryId: DataTypes.INTEGER
    }, {});

    return pc_countrystates;
};
//# sourceMappingURL=states.js.map