var express = require('express');
var router = express.Router();
var secret = require('../secret');
var cors = require('cors');


var google = {
  URL: secret.gURL,
  key: secret.gKey
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brewskiry', gURL: secret.gapi.gURL, gKey: secret.gapi.gKey, bURL: secret.bapi.bURL, bKey: secret.bapi.bKey });
  // console.log(secret.gapi.gURL);
});

module.exports = router;
