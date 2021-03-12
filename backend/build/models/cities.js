'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {
    var pc_cities = Sequelize.define('pc_cities', {
        StateId: DataTypes.INTEGER,
        City: DataTypes.STRING
    }, {});
    return pc_cities;
};
//# sourceMappingURL=cities.js.map