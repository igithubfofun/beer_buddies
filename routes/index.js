var express = require('express');
var router = express.Router();
var secret = require('../secret');
var cors = require('cors');
var User = require('../models/user');


var google = {
  URL: secret.gURL,
  key: secret.gKey
};

router.get('/', function(req,res,next){
  res.render('index', { title: 'Brewskiry', gURL: secret.gapi.gURL, gKey: secret.gapi.gKey, bURL: secret.bapi.bURL, bKey: secret.bapi.bKey, sURL: secret.spotapi.sURL, sKey: secret.spotapi.sKey });

})

router.get('/i', function(req, res, next) {
  User.find({}, function(err, results) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.status(200).json(results);
  });

});

module.exports = router;
