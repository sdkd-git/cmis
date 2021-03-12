'use strict';

var express = require('express');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var multer = require('multer');
var path = require('path');
var url = require('url');

/**
 * PROFILE IMAGE STORING STARTS
 */
var s3 = new aws.S3({
  accessKeyId: 'AKIATMSCUAV2WOSS5ENE',
  secretAccessKey: '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',
  Bucket: 'pcimageupload'
});

/**
 * Single Upload
 */
var profileImgUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'pcimageupload',
    acl: 'public-read',
    key: function key(req, file, cb) {
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname));
    }
  }),
  limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
  fileFilter: function fileFilter(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('profileImage');

function checkFileType(file, cb) {
  // Allowed ext
  var filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  var mimetype = filetypes.test(file.mimetype);if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

/**
 *  Document upload
 */
var documentUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'pcimageupload',
    acl: 'public-read',
    key: function key(req, file, cb) {
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname));
    }
  }),
  limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
  fileFilter: function fileFilter(req, file, cb) {
    checkFileTypeDoc(file, cb);
  }
}).single('document');

function checkFileTypeDoc(file, cb) {
  // Allowed ext
  var filetypes = /pdf|csv|xls|doc/;
  // Check ext
  var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  var mimetype = filetypes.test(file.mimetype);if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Document Only!');
  }
}

module.exports = function (app) {

  app.post('/api/imageupload/profile-img-upload', function (req, res) {
    profileImgUpload(req, res, function (error) {
      //  console.log( 'error', error );
      if (error) {
        // console.log( 'errors', error );
        res.json({ error: error });
      } else {
        // If File not found
        if (req.file === undefined) {
          console.log('Error: No File Selected!');
          res.json('Error: No File Selected');
        } else {
          // If Success
          var imageName = req.file.key;
          var imageLocation = req.file.location;
          res.json({
            imageName: imageName, imageLocation: imageLocation
          });
        }
      }
    });
  }); // End of single profile upload/**


  app.post('/api/document/documentUpload', function (req, res) {
    documentUpload(req, res, function (error) {
      //   console.log( 'error', error );
      if (error) {
        console.log('errors', error);
        res.json({ error: error });
      } else {
        // If File not found
        if (req.file === undefined) {
          console.log('Error: No File Selected!');
          res.json('Error: No File Selected');
        } else {
          // If Success
          var imageName = req.file.key;
          var imageLocation = req.file.location;
          res.json({
            imageName: imageName, imageLocation: imageLocation
          });
        }
      }
    });
  }); // End of single profile upload/**

};
//# sourceMappingURL=imageupload.js.map