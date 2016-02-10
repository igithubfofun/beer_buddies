var express = require('express');
var router = express.Router();
var Brewery = require('../models/brewery');

// "Index" action to list all brewerys
router.get('/', function(req, res) {

  Brewery.find({}, function(err, results) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.status(200).json(results);
  });

});

// "Show" action to show one brewery
router.get('/:id', function(req, res) {

  Brewery.findOne({ _id: req.params.id }, function(err, brewery) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.status(200).json(brewery);
  });

});

// "Create" action to create a new brewery
router.post('/', function(req, res) {

  var brewery = new brewery({
    artist: req.body.artist,
    venue: req.body.venue,
    image: req.body.image,
    startTime: new Date()
  });

  brewery.save(function(err, brewery) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.status(200).json(brewery);
  });
});

// Action to create a new brewery
router.put('/:id', function(req, res) {

  Brewery.findByIdAndUpdate(req.params.id, {
    artist: req.body.artist,
    venue: req.body.venue,
    image: req.body.image,
    startTime: new Date()
  }, function(err, brewery) {
    if (err) {
      console.log(err);
      throw err;
    }

    res.json(brewery);
  });

});

router.delete('/:id', function(req, res) {

  Brewery.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.status(200).json({});
  });

});

module.exports = router;
