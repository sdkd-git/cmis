'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

var _criminalInformation = require('../controllers/criminalInformation');

var _routesHelper = require('../services/routesHelper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var multer = require('multer');
var path = require('path');
// var upload = multer({ dest: 'uploads/' })
var storage = multer.diskStorage({
    destination: function destination(req, file, cb) {
        cb(null, 'build/uploads');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function filename(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({
    storage: storage
}).single('image');

module.exports = function (app) {
    app.post('/api/criminal/create', _criminalInformation.createCriminalInformation);

    app.get('/api/criminal/getcriminalbyid/:id', _criminalInformation.getCriminalsById);

    app.get('/api/criminal/getCriminalsTableInfoById/:id', _criminalInformation.getCriminalsTableInfoById);

    app.put('/api/criminal/update/:id', _criminalInformation.updateCriminal);

    // app.post('/api/criminal/uploadImages', uploadImages)
    app.post('/api/criminal/uploadImages', upload, function (req, res, next) {
        console.log(req.file);
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
        res.send(req.file);
    });
};
//# sourceMappingURL=criminal.js.map