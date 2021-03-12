'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Sequelize, DataTypes) {
    var pc_crimetitles = Sequelize.define('pc_crimetitles', {
        crime_title: DataTypes.STRING,
        gunhe_type: DataTypes.STRING
    }, {});
    return pc_crimetitles;
};
//# sourceMappingURL=crimetitle.js.map