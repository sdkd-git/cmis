'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {
    var pc_districts = Sequelize.define('pc_districts', {
        DistrictId: DataTypes.INTEGER,
        DistrictName: DataTypes.STRING,
        CityId: DataTypes.INTEGER
    }, {});
    return pc_districts;
};
//# sourceMappingURL=districts.js.map