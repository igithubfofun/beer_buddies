var express = require('express');
var router = express.Router();
var User = require('../models/brewery');
var cors = require('cors');
var http = require('http');

// "Index" action to list all brewerys
// router.get('/', function(req, res) {

// Brewery.find({}, function(err, results) {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
//   res.status(200).json(results);
// });
//   res.render('breweries/index');

// });
router.get('/', function(req, res) {
  res.render('breweries/index');

});

// router.get('/:id', function(req, res) {

//   Brewery.findOne({ _id: req.params.id }, function(err, brewery) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//     res.status(200).json(brewery);
//   });

// });
router.get('/new', function(req, res) {

      res.render('breweries/new');

});


router.post('/new', function(req, res) {
    var name = req.body.name;
    var location = req.body.location;
    var popularBeer = req.body.popularBeer;

    var newBrewery = Brewery({
        name: name,
        location: location,
        popularBeer: popularBeer
    });

      newBrewery.save(function(err) {
          if (err) console.log(err);
        });
      res.render('breweries/index')
  })

router.get('/s', function(req,res){
  var options = {
      host: 'api.brewerydb.com',
      path: 'v2/beer/random?key=21284e4a1b4e205accad9dfc8afff0b8'
  };

  http.get(options, function (http_res) {
      // initialize the container for our data
      var data = "";

      // this event fires many times, each time collecting another piece of the response
      http_res.on("data", function (chunk) {
          // append this chunk to our growing `data` var
          console.log("Hi");
          data += chunk;

      });

      // this event fires *one* time, after all the `data` events/chunks have been gathered
      http_res.on("end", function () {
          // you can use res.send instead of console.log to output via express
          console.log(data);
      });

  });
});







//   var options = {
//     hostname: 'http://api.brewerydb.com/v2/',
//     path: 'v2/beer/random?key=21284e4a1b4e205accad9dfc8afff0b8',
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   };

//   var req = http.request(options, (res) => {
//     console.log(`STATUS: ${res.statusCode}`);
//     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {
//       console.log(`BODY: ${chunk}`);
//     });
//     res.on('end', () => {
//       console.log('No more data in response.')
//     })
//   });

//   req.on('error', (e) => {
//     console.log(`problem with request: ${e.message}`);
//   });
//   res.on('error',function(e){
//      console.log("Error: " + hostNames[i] + "\n" + e.message);
//      console.log( e.stack );
//   });

//   req.end();
// });


// router.put('/:id', function(req, res) {

//   Brewery.findByIdAndUpdate(req.params.id, {
//     artist: req.body.artist,
//     venue: req.body.venue,
//     image: req.body.image,
//     startTime: new Date()
//   }, function(err, brewery) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }

//     res.json(brewery);
//   });

// });

// router.delete('/:id', function(req, res) {

//   Brewery.findByIdAndRemove(req.params.id, function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//     res.status(200).json({});
//   });

// });

module.exports = router;
