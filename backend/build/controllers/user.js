'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAdminUsers = exports.deleteUser = exports.update = exports.findById = exports.findAllUsers = exports.login = exports.create = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _register = require('../validation/register');

var _register2 = _interopRequireDefault(_register);

var _login = require('../validation/login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;

// load input validation


// create user
var create = function create(req, res) {
  //const { errors, isValid } = validateRegisterForm(req.body);
  var _req$body = req.body,
      policestation = _req$body.policestation,
      name = _req$body.name,
      phone = _req$body.phone,
      role = _req$body.role,
      rank = _req$body.rank,
      userid = _req$body.userid,
      password = _req$body.password,
      cityId = _req$body.cityId,
      stateId = _req$body.stateId,
      districtId = _req$body.districtId;

  // check validation
  // if(!isValid) {
  //   return res.status(400).json(errors);
  // }

  User.findAll({
    where: {
      phone: phone
    }
  }).then(function (user) {
    if (user.length) {
      return res.status(400).json({
        userid: 'User already exists!'
      });
    } else {
      var newUser = {
        policestation: policestation,
        name: name,
        phone: phone,
        role: role,
        rank: rank,
        userid: userid,
        password: password,
        cityId: cityId,
        stateId: stateId,
        districtId: districtId
      };
      _bcryptjs2.default.genSalt(10, function (err, salt) {
        _bcryptjs2.default.hash(newUser.password, salt, function (err, hash) {
          if (err) throw err;
          newUser.password = hash;
          User.create(newUser).then(function (user) {
            res.json({
              user: user
            });
          }).catch(function (err) {
            res.status(500).json({
              err: err
            });
          });
        });
      });
    }
  });
};

var login = function login(req, res) {
  var _validateLoginForm = (0, _login2.default)(req.body),
      errors = _validateLoginForm.errors,
      isValid = _validateLoginForm.isValid;

  // check validation


  if (!isValid) {
    return res.status(400).json(errors);
  }

  var _req$body2 = req.body,
      userid = _req$body2.userid,
      password = _req$body2.password,
      phone = _req$body2.phone;

  // console.log(userid, password)

  User.findAll({
    where: {
      userid: userid,
      phone: phone
    }
  }).then(function (user) {
    //check for user

    if (!user.length) {
      errors.userid = 'User not found LOGIN!';
      return res.status(404).json(errors);
    }
    var originalPassword = user[0].dataValues.password;
    //  console.log(originalPassword, 'originalPassword', user, 'user')
    //check for password
    _bcryptjs2.default.compare(password, originalPassword).then(function (isMatch) {
      //   console.log(isMatch, 'isMatch')
      if (isMatch) {
        // user matched
        //  console.log('matched!')
        var _user$0$dataValues = user[0].dataValues,
            id = _user$0$dataValues.id,
            username = _user$0$dataValues.username;

        var payload = {
          id: id,
          username: username
        }; //jwt payload
        // console.log(payload)

        _jsonwebtoken2.default.sign(payload, 'secret', {
          expiresIn: 3600
        }, function (err, token) {
          res.json({
            success: true,
            token: 'Bearer ' + token,
            role: user[0].dataValues.role,
            cityId: user[0].dataValues.cityId,
            stateId: user[0].dataValues.stateId,
            districtId: user[0].dataValues.districtId,
            id: user[0].dataValues.id,
            userid: user[0].dataValues.userid
          });
        });
      } else {
        errors.password = 'Password not correct';
        return res.status(400).json(errors);
      }
    }).catch(function (err) {
      return console.log(err);
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

// fetch all users
var findAllUsers = function findAllUsers(req, res) {
  var cityId = req.params.cityId;
  var role = req.params.role;
  User.findAll({
    where: {
      cityId: cityId,
      role: role
    },
    attributes: ['name', 'phone', 'userid', 'districtId', 'cityId', 'id']
  }).then(function (user) {
    res.json({
      user: user
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

var findAdminUsers = function findAdminUsers(req, res) {
  var role = req.params.role;
  User.findAll({
    where: {
      role: role
    },
    attributes: ['name', 'phone', 'userid', 'cityId', 'id']
  }).then(function (user) {
    res.json({
      user: user
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

// fetch user by userId
var findById = function findById(req, res) {
  var id = req.params.userId;

  User.findAll({
    where: {
      id: id
    }
  }).then(function (user) {
    if (!user.length) {
      return res.json({
        msg: 'user not found USER'
      });
    }
    res.json({
      user: user
    });
  }).catch(function (err) {
    return res.status(500).json({
      err: err
    });
  });
};

// update a user's info
var update = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var _validateLoginForm2, errors, isValid, id, phone, currentUserByPhone;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _validateLoginForm2 = (0, _login2.default)(req.body), errors = _validateLoginForm2.errors, isValid = _validateLoginForm2.isValid;
            id = req.params.userId;
            phone = req.body.phone;
            // let currentUser = await User.findAll({
            //   where: {
            //     id: id
            //   }
            // })

            _context.next = 5;
            return User.findAll({
              where: {
                phone: phone
              }
            });

          case 5:
            currentUserByPhone = _context.sent;

            if (!(JSON.parse((0, _stringify2.default)(currentUserByPhone)) && JSON.parse((0, _stringify2.default)(currentUserByPhone)).length === 0 || parseInt(JSON.parse((0, _stringify2.default)(currentUserByPhone))[0].id) === parseInt(id))) {
              _context.next = 10;
              break;
            }

            _bcryptjs2.default.genSalt(10, function (err, salt) {
              _bcryptjs2.default.hash(req.body.password, salt, function (err, hash) {
                if (err) throw err;
                req.body.password = hash;
                User.update((0, _assign2.default)({}, req.body), {
                  where: {
                    id: id
                  }
                }).then(function (user) {
                  return res.status(200).json({
                    user: user
                  });
                }).catch(function (err) {
                  return res.status(500).json({
                    err: err
                  });
                });
              });
            });
            _context.next = 12;
            break;

          case 10:
            errors.userid = 'User Already Used this mobile';
            return _context.abrupt('return', res.status(404).json(errors));

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function update(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// delete a user
var deleteUser = function deleteUser(req, res) {
  var id = req.params.userId;

  User.destroy({
    where: {
      id: id
    }
  }).then(function () {
    return res.status.json({
      msg: 'User has been deleted successfully!'
    });
  }).catch(function (err) {
    return res.status(500).json({
      msg: 'Failed to delete!'
    });
  });
};

exports.create = create;
exports.login = login;
exports.findAllUsers = findAllUsers;
exports.findById = findById;
exports.update = update;
exports.deleteUser = deleteUser;
exports.findAdminUsers = findAdminUsers;
//# sourceMappingURL=user.js.map