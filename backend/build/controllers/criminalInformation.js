'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCriminalsTableInfoById = exports.updateCriminal = exports.getCriminalsById = exports.createCriminalInformation = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var multer = require('multer');
var path = require('path');

var PC_KKInformation = _models2.default.PC_KKInformation;
var PC_OtherInformation = _models2.default.PC_OtherInformation;
var PC_BasicInformation = _models2.default.PC_BasicInformation;
var PC_GunhaInformation = _models2.default.PC_GunhaInformation;
var PC_Members = _models2.default.PC_Members;

var createCriminalInformation = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var isSuccess, currentUser, basicInformationNewObj, baseInfoRes, masterId, otherInformationNewObj, otherInfoRes, gunhaInfor;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        isSuccess = false;
                        currentUser = req.body.currentuser;
                        basicInformationNewObj = (0, _assign2.default)({}, req.body.basicInformation, {
                            heading: req.body.basicInformation.heading.toString(),
                            userId: currentUser.id
                        });
                        _context2.next = 5;
                        return PC_BasicInformation.create(basicInformationNewObj);

                    case 5:
                        baseInfoRes = _context2.sent;
                        masterId = JSON.parse((0, _stringify2.default)(baseInfoRes)).id;

                        isSuccess = masterId ? true : false;
                        // console.log('--------------------------',masterId)
                        // console.log('--------------------------',JSON.parse(masterId).id)
                        // console.log(JSON.stringify(baseInfoRes))

                        otherInformationNewObj = (0, _assign2.default)({}, req.body.otherInformation, {
                            accusedImage: req.body.otherInformation.accusedImage.toString(),
                            accusedPham: req.body.otherInformation.accusedPham.toString(),
                            accusedRecords: req.body.otherInformation.accusedRecords.toString(),
                            masterId: masterId,
                            userId: currentUser.id
                        });
                        _context2.next = 11;
                        return PC_OtherInformation.create(otherInformationNewObj);

                    case 11:
                        otherInfoRes = _context2.sent;


                        isSuccess = JSON.parse((0, _stringify2.default)(otherInfoRes)).id ? true : false;

                        req.body.gunhaInformation && req.body.gunhaInformation.forEach(function () {
                            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(item, index) {
                                var gunhaInformationNewObj, gunhaRes;
                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                // console.log(item);
                                                gunhaInformationNewObj = (0, _assign2.default)({}, item, {
                                                    masterId: masterId,
                                                    userId: currentUser.id
                                                });
                                                _context.next = 3;
                                                return PC_GunhaInformation.create(gunhaInformationNewObj);

                                            case 3:
                                                gunhaRes = _context.sent;

                                                isSuccess = JSON.parse((0, _stringify2.default)(gunhaRes)).id ? true : false;
                                                item.kalamAndkayda.map(function (item2) {
                                                    var ob = (0, _assign2.default)({}, item2, {
                                                        masterId: masterId,
                                                        gunhaId: JSON.parse((0, _stringify2.default)(gunhaRes)).id,
                                                        userId: currentUser.id
                                                        //   console.log(ob);
                                                    });var kkRes = PC_KKInformation.create(ob);
                                                    isSuccess = JSON.parse((0, _stringify2.default)(kkRes)).id ? true : false;
                                                    //    console.log(resKK);
                                                });

                                                item.membersList.map(function (item2) {
                                                    var ob = (0, _assign2.default)({}, item2, {
                                                        masterId: masterId,
                                                        gunhaId: JSON.parse((0, _stringify2.default)(gunhaRes)).id,
                                                        userId: currentUser.id
                                                        //   console.log(ob);
                                                    });var membersReq = PC_Members.create(ob);
                                                    isSuccess = JSON.parse((0, _stringify2.default)(membersReq)).id ? true : false;
                                                    //    console.log(resKK);
                                                });

                                            case 7:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined);
                            }));

                            return function (_x3, _x4) {
                                return _ref2.apply(this, arguments);
                            };
                        }());

                        gunhaInfor = (0, _assign2.default)({}, req.body.gunhaInformation[0], {
                            masterId: masterId,
                            userId: currentUser.id
                        });


                        if (isSuccess) {
                            res.json({
                                status: 200,
                                message: 'success',
                                basicInfo: [JSON.parse((0, _stringify2.default)(baseInfoRes))],
                                otherInfo: [JSON.parse((0, _stringify2.default)(otherInfoRes))],
                                gunhaInfor: [JSON.parse((0, _stringify2.default)(gunhaInfor))]
                            });
                        } else {
                            res.json({
                                status: 300,
                                message: 'failed'
                            });
                        }

                        // PC_ProfessionalsBasic.create(req.body)
                        //     .then((professional) => {
                        //         res.json({
                        //             professional
                        //         })
                        //     })
                        //     .catch((error) => {
                        //         res.json({});
                        //     })


                    case 16:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function createCriminalInformation(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var getCriminalsById = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var id, basicInfo, gunhaInfor, otherInfo, gunhaInformationoOb1, ob, data, isDone;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        id = req.params.id;
                        _context4.next = 3;
                        return PC_BasicInformation.findAll({
                            where: {
                                id: id
                            }
                        });

                    case 3:
                        basicInfo = _context4.sent;
                        _context4.next = 6;
                        return PC_GunhaInformation.findAll({
                            where: {
                                masterId: id
                            }
                        });

                    case 6:
                        gunhaInfor = _context4.sent;
                        _context4.next = 9;
                        return PC_OtherInformation.findAll({
                            where: {
                                masterId: id
                            }
                        });

                    case 9:
                        otherInfo = _context4.sent;


                        // console.log(JSON.parse(JSON.stringify(gunhaInfor)));

                        gunhaInformationoOb1 = [];
                        ob = JSON.parse((0, _stringify2.default)(gunhaInfor)) && JSON.parse((0, _stringify2.default)(gunhaInfor)).map(function () {
                            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(item) {
                                var kkInfo, membersRes;
                                return _regenerator2.default.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                _context3.next = 2;
                                                return PC_KKInformation.findAll({
                                                    where: {
                                                        gunhaId: item.id
                                                        // masterId:JSON.parse(JSON.stringify(basicInfo)).id,
                                                        // gunhaId:JSON.parse(JSON.stringify(gunhaInfor)).id
                                                    }
                                                });

                                            case 2:
                                                kkInfo = _context3.sent;
                                                _context3.next = 5;
                                                return PC_Members.findAll({
                                                    where: {
                                                        gunhaId: item.id
                                                        // masterId:JSON.parse(JSON.stringify(basicInfo)).id,
                                                        // gunhaId:JSON.parse(JSON.stringify(gunhaInfor)).id
                                                    }
                                                });

                                            case 5:
                                                membersRes = _context3.sent;
                                                return _context3.abrupt('return', (0, _assign2.default)({}, item, {
                                                    kalamAndkayda: JSON.parse((0, _stringify2.default)(kkInfo)),
                                                    membersList: JSON.parse((0, _stringify2.default)(membersRes))
                                                }));

                                            case 7:
                                            case 'end':
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3, undefined);
                            }));

                            return function (_x7) {
                                return _ref4.apply(this, arguments);
                            };
                        }());

                        // let self = this;

                        data = {};
                        isDone = _promise2.default.all(ob);
                        _context4.next = 16;
                        return isDone.then(function (res) {
                            data = {
                                basicInfo: [].concat((0, _toConsumableArray3.default)(basicInfo)),
                                otherInfo: [].concat((0, _toConsumableArray3.default)(otherInfo)),
                                gunhaInfor: [].concat((0, _toConsumableArray3.default)(res))
                            };
                        });

                    case 16:

                        res.json(data);

                    case 17:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function getCriminalsById(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var getCriminalsTableInfoById = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var id, basicInfo;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        id = req.params.id;
                        _context5.next = 3;
                        return PC_BasicInformation.findAll({
                            where: {
                                userId: id
                            }
                        });

                    case 3:
                        basicInfo = _context5.sent;

                        res.json(JSON.parse((0, _stringify2.default)(basicInfo)));

                    case 5:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function getCriminalsTableInfoById(_x8, _x9) {
        return _ref5.apply(this, arguments);
    };
}();

var updateCriminal = function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res) {
        var id, currentUser, basicInfoReq, basicInfo, getOtherInfor, otherInformationNewObj, te, getGunhaInfor, data;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        id = req.params.id;
                        currentUser = req.body.currentuser;
                        basicInfoReq = (0, _assign2.default)({}, req.body.basicInformation, {
                            heading: req.body.basicInformation.heading.toString()
                        });
                        _context8.next = 5;
                        return PC_BasicInformation.update(basicInfoReq, {
                            where: {
                                id: id
                            }
                        });

                    case 5:
                        basicInfo = _context8.sent;
                        _context8.next = 8;
                        return PC_OtherInformation.findAll({
                            where: {
                                userId: currentUser.id,
                                masterId: id
                            }
                        });

                    case 8:
                        getOtherInfor = _context8.sent;

                        if (JSON.parse((0, _stringify2.default)(getOtherInfor)).length) {
                            _context8.next = 15;
                            break;
                        }

                        otherInformationNewObj = (0, _assign2.default)({}, req.body.otherInformation, {
                            accusedImage: req.body.otherInformation.accusedImage.toString(),
                            accusedPham: req.body.otherInformation.accusedPham.toString(),
                            accusedRecords: req.body.otherInformation.accusedRecords.toString(),
                            masterId: id,
                            userId: currentUser.id
                        });
                        _context8.next = 13;
                        return PC_OtherInformation.create(otherInformationNewObj);

                    case 13:
                        _context8.next = 18;
                        break;

                    case 15:
                        te = (0, _assign2.default)({}, req.body.otherInformation, {
                            accusedImage: req.body.otherInformation.accusedImage.toString(),
                            accusedPham: req.body.otherInformation.accusedPham.toString(),
                            accusedRecords: req.body.otherInformation.accusedRecords.toString()
                            // console.log('Test..........................................',te)
                        });
                        _context8.next = 18;
                        return PC_OtherInformation.update(te, {
                            where: {
                                masterId: id,
                                userId: currentUser.id
                            }
                        });

                    case 18:
                        _context8.next = 20;
                        return PC_GunhaInformation.findAll({
                            where: {
                                userId: currentUser.id,
                                masterId: id
                            }
                        });

                    case 20:
                        getGunhaInfor = _context8.sent;

                        if (!JSON.parse((0, _stringify2.default)(getGunhaInfor)).length) {
                            _context8.next = 25;
                            break;
                        }

                        JSON.parse((0, _stringify2.default)(getGunhaInfor)).forEach(function () {
                            var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(element) {
                                return _regenerator2.default.wrap(function _callee6$(_context6) {
                                    while (1) {
                                        switch (_context6.prev = _context6.next) {
                                            case 0:
                                                _context6.next = 2;
                                                return PC_KKInformation.destroy({
                                                    where: {
                                                        masterId: id,
                                                        gunhaId: element.id
                                                    }
                                                });

                                            case 2:
                                                _context6.next = 4;
                                                return PC_Members.destroy({
                                                    where: {
                                                        masterId: id,
                                                        gunhaId: element.id
                                                    }
                                                });

                                            case 4:
                                            case 'end':
                                                return _context6.stop();
                                        }
                                    }
                                }, _callee6, undefined);
                            }));

                            return function (_x12) {
                                return _ref7.apply(this, arguments);
                            };
                        }());

                        _context8.next = 25;
                        return PC_GunhaInformation.destroy({
                            where: {
                                masterId: id,
                                userId: currentUser.id
                            }
                        });

                    case 25:

                        req.body.gunhaInformation && req.body.gunhaInformation.forEach(function () {
                            var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(item, index) {
                                var gunhaInformationNewObj, gunhaRes;
                                return _regenerator2.default.wrap(function _callee7$(_context7) {
                                    while (1) {
                                        switch (_context7.prev = _context7.next) {
                                            case 0:
                                                gunhaInformationNewObj = (0, _assign2.default)({}, item, {
                                                    masterId: id,
                                                    userId: currentUser.id
                                                });
                                                _context7.next = 3;
                                                return PC_GunhaInformation.create(gunhaInformationNewObj);

                                            case 3:
                                                gunhaRes = _context7.sent;


                                                // isSuccess = JSON.parse(JSON.stringify(gunhaRes)).id ? true : false;
                                                item && item.kalamAndkayda.map(function (item2) {
                                                    var ob = (0, _assign2.default)({}, item2, {
                                                        masterId: id,
                                                        gunhaId: JSON.parse((0, _stringify2.default)(gunhaRes)).id,
                                                        userId: currentUser.id
                                                        //   console.log(ob);
                                                    });var kkRes = PC_KKInformation.create(ob);
                                                    // isSuccess = JSON.parse(JSON.stringify(kkRes)).id ? true : false;
                                                    //    console.log(resKK);
                                                });

                                                item && item.membersList.map(function (item2) {
                                                    var ob = (0, _assign2.default)({}, item2, {
                                                        masterId: id,
                                                        gunhaId: JSON.parse((0, _stringify2.default)(gunhaRes)).id,
                                                        userId: currentUser.id
                                                        //   console.log(ob);
                                                    });var membersReq = PC_Members.create(ob);

                                                    //    console.log(resKK);
                                                });

                                            case 6:
                                            case 'end':
                                                return _context7.stop();
                                        }
                                    }
                                }, _callee7, undefined);
                            }));

                            return function (_x13, _x14) {
                                return _ref8.apply(this, arguments);
                            };
                        }());

                        data = {
                            basicInfo: [basicInfoReq],
                            otherInfo: [req.body.otherInformation],
                            gunhaInfor: [].concat((0, _toConsumableArray3.default)(req.body.gunhaInformation))
                        };


                        res.json(data);

                    case 28:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, undefined);
    }));

    return function updateCriminal(_x10, _x11) {
        return _ref6.apply(this, arguments);
    };
}();

// const uploadImages = (req, res) => {


//     console.log(req)

//     // // 'profile_pic' is the name of our file input field in the HTML form
//     let upload = multer({
//         storage: storage,
//     }).single('image');

//     upload(req, res, function (err) {
//         // req.file contains information of uploaded file
//         // req.body contains information of text fields, if there were any
//         console.log(req.image)

//         if (req.fileValidationError) {
//             return res.send(req.fileValidationError);
//         } else if (!req.file) {
//             return res.send('Please select an image to upload');
//         } else if (err instanceof multer.MulterError) {
//             return res.send(err);
//         } else if (err) {
//             return res.send(err);
//         }

//         // Display uploaded image for user validation
//         res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
//     });

// }


exports.createCriminalInformation = createCriminalInformation;
exports.getCriminalsById = getCriminalsById;
exports.updateCriminal = updateCriminal;
exports.getCriminalsTableInfoById = getCriminalsTableInfoById;
//# sourceMappingURL=criminalInformation.js.map