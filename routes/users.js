var express = require('express');
var router = express.Router();
// Require the User model
var User = require('../models/user');
var cors = require('cors');

router.post('/', function(req, res, next) {
  res.render('users/index');
});

router.get('/', function(req, res) {
  res.render('users/index');

});

router.get('/sign_in', function(req, res){

  res.render('users/sign_in.ejs');
})

router.post('/sign_in', function(req, res){
  var email = req.body.email;
  var password = req.body.password;

  var thisUser = User({
    email: email,
    password: password
  });

  User.findOne({ email: email }, function(err, user) {
      if (err) throw err;

      // test a matching password
      User.comparePassword(password, function(err, isMatch) {
          if (err) throw err;
          console.log(password, isMatch);
      });

  });
      thisUser.save(function(err) {
      if (err) console.log(err);

      res.render('/index');
  });
});

router.get('/sign_up', function(req, res) {

      res.render('users/sign_up.ejs');

});

router.post('/sign_up', function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var zip = req.body.zip;
  var favoriteBeer = req.body.favoriteBeer;

  var newUser = User({
      name: name,
      email: email,
      password: password,
      zip: zip,
      favoriteBeer: favoriteBeer
  });

    // Save the user
    newUser.save(function(err) {
        if (err) console.log(err);
      });
    res.render('users')
})


router.get('/:id/edit', function(req, res) {
  // EDIT
});

router.get('/:id', function(req, res) {
  // SHOW
});

router.put('/:id', function(req, res) {
  // UPDATE
});

router.delete('/:id', function(req, res) {
  // DELETE
});
module.exports = router;
