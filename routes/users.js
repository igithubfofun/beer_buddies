var express = require('express');
var router = express.Router();
var User = require('../models/user');
var cors = require('cors');

// router.post('/', function(req, res, next) {
//     User.find({}, function(err, results) {
//       if (err) {
//         console.log(err);
//         throw err;
//       }
//       res.status(200).json(results);
//     });
// });

router.get('/', function(req, res) {
  User.find({}, function(err, results) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.status(200).json(results);
  });

});

router.get('/sign_in', function(req,res){
  res.render('users/sign_in');
});

router.post('/sign_in', function(req, res){
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ email: email }, function(err, user) {
    if (err) throw err;

    user.comparePassword(password, function(err, isMatch) {
      if (err) console.log('error');
        if (isMatch){
          console.log(password, isMatch);
          req.session.userId = user._id;
        }



    });
  });
  res.redirect('/');

});

router.get('/sign_up', function(req, res) {

      res.render('users/sign_up');

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


    newUser.save(function(err) {
        if (err) console.log(err);
      });
    res.redirect('/');
})

router.get('/all', function(req, res, next) {
  User.find({}, function(err, results) {
    if (err) {
      console.log(err);
      throw err;
    }
    // res.status(200).json(results);
  });
  res.render('users/all');

});

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
