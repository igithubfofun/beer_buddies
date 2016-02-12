var express = require('express');
var router = express.Router();
var secret = require('../secret');
var cors = require('cors');
var User = require('../models/user');

router.get('/', function(req,res,next){
  res.render('index', { title: 'Beer Buddies', gURL: secret.gapi.gURL, gKey: secret.gapi.gKey, bURL: secret.bapi.bURL, bKey: secret.bapi.bKey, sURL: secret.spotapi.sURL, sKey: secret.spotapi.sKey, userId: req.session.userId });

  User.findOne({ _id: _id }, function(err, user) {
      if (err) throw err;
      console.log(user);
  })
});
module.exports = router;
