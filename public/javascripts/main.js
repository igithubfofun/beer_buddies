$(function(){
  // var gURL = $('#gURL').text();
  // var gKey = $('#gKey').text();
  // var bURL = $('#bURL').text();
  // var bKey = $('#bKey').text();
  // var sURL = $('#sURL').text();
  // var sKey = $('#sKey').text();
  var apiRoot = '/users/';


$('#submitBeer').on('submit', function() {
  $('#matches').empty();
  var beer = $('#beer').val();



    var jqxhr = $.ajax({
          url: apiRoot,
          method: "GET",
          data: {},
          dataType: "json"
      })
      .done(function(users) {

        var filteredResult = _.where(users, {favoriteBeer: beer});
        var similarNames = _.pluck(filteredResult, 'name');
        var similarZip = _.pluck(filteredResult, 'zip');
        for (var i = 0; i < similarNames.length; i++){
          $('#matches').append('<li><span>'+similarNames[i]+'</span>&nbsp;&nbsp;<span>'+similarZip[i]+'</span></li>');
        }

      })
      .fail(function(jqXHR, textStatus) {
        console.log("Request failed: " + textStatus);
      })
      .always(function() {
        console.log('Request completed');
      });
      return false;
  });

})

      function randomize(){
      $('#beerName').empty();
      $('#beerDesc').empty();
      $('#beerPic').empty();
        var jqxhr = $.ajax({
          url: '/api/beer/random?key=c2edb5cd55db30ff7a0f795ac6bff1ea9',
          method: "GET",
          data: {},
          dataType: "json"
      })
        .done(function(data) {

          // console.log(data.data.name);
          $('#beerName').append(data.data.name);
          if (data.data.hasOwnProperty("labels")) {
            $('#beerPic').append('<img src = "'+data.data.labels.medium+'">');
          }
          else {
            console.log('HI');
          }
          $('#beerDesc').append(data.data.description);


        })
        .fail(function(jqXHR, textStatus) {
          console.log("Request failed: " + textStatus);
        })
        .always(function() {
          console.log("Request completed");
      });
        return false;
    }


    $('#randomize').on('click', function(){
      randomize();
    })

        var jqxhr = $.ajax({
              url: '/users/',
              method: "GET",
              data: {},
              dataType: "json"
          })
          .done(function(users) {

            var filteredResult = _.where(users, {});
            var similarNames = _.pluck(filteredResult, 'name');
            var similarZip = _.pluck(filteredResult, 'zip');
            var favoriteBeer = _.pluck(filteredResult, 'favoriteBeer');
            for (var i = 0; i < similarNames.length; i++){
              $('#allUsers').append('<li><span>'+similarNames[i]+
                '</span>&nbsp;&nbsp;<span>'+similarZip[i]+'</span>&nbsp;&nbsp;</span>'+
                favoriteBeer[i]+'</span></li>');
            }
            // $('#allUsers').append(users);
          })
          .fail(function(jqXHR, textStatus) {
            console.log("Request failed: " + textStatus);
          })
          .always(function() {
            console.log("Request completed");
        });

  randomize();

  $(document).ready(function() {
    $('.pour') //Pour Me Another Drink, Bartender!
      .delay(2000)
      .animate({
        height: '500px'
        }, 1500)
      .delay(1600)
      .slideUp(500);

    $('#liquid') // I Said Fill 'Er Up!
      .delay(3400)
      .animate({
        height: '170px'
      }, 2500);

    $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
      .delay(3400)
      .animate({
        bottom: '200px'
        }, 2500);
    });
// var jqXHR = $.ajax({
//         url: sURL,
//         function: "beer",
//         key: sKey, // required - your dev api key
//         search_term: "coors", // required - what to search on
//         limit: 10  // optional - MAX = 50 results
//        })
//         .done(function() {
//           console.log(jqXHR);
//         })
//         .fail(function(jqXHR, textStatus) {
//           console.log("Request failed: " + textStatus);
//         })
//         .always(function() {
//           console.log("Request completed");
//       });

// var jqXHR = $.ajax({
//         url: 'http://ontariobeerapi.ca:80/beers/?on_sale=true/',
//         data: {},
//         // dataType: 'json'
//        })
//         .done(function(data) {
//           console.log(data);
//         })
//         .fail(function(jqXHR, textStatus) {
//           console.log("Request failed: " + textStatus);
//         })
//         .always(function() {
//           console.log("Request completed");
//       });


// var apiRoot = 'breweries/';

// var loadBrewerys = function() {

//   //showLoadingIndicator();

//   var jqxhr = $.ajax({
//         url: apiRoot,
//         method: "GET",
//         data: {},
//         dataType: "json"
//     })
//     .done(function(breweries) {
//       console.log('brewery data', brewerys);
//       displaybrewerys(brewerys);
//     })
//     .fail(function(jqXHR, textStatus) {
//       console.log("Request failed: " + textStatus);
//     })
//     .always(function() {
//       console.log('Request completed');

//     });
// };

// var displayBreweries = function(breweries) {
//   if (!breweries) {
//     return;
//   }

//   for (var i=0; i<breweries.length; i++) {
//     var breweries = breweries[i];

//     appendBrewery(brewery);
//   }

//   function initMap() {
//       var mapDiv = document.getElementById('map');
//       var map = new google.maps.Map(mapDiv, {
//         // center: {lat: 44.540, lng: -78.546},
//         postalCode: '78701',
//         zoom: 8
//       });
//     }

// function codeAddress() {
//     geocoder.geocode({
//       componentRestrictions: {
//         country: 'AU',
//         postalCode: '2000'
//       }
//     }, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         map.setCenter(results[0].geometry.location);
//         var marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//         });
//       } else {
//         window.alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   }
// codeAddress();
// initMap();
// var jqxhr = $.ajax({
//     url: gURL,
//     method: "GET",
//     data: {
//       key: gKey,
//       street_address: ''
//     },
//     dataType: "json"
// })
// .done(function() {
//   console.log(jqxhr);
// })
// .fail(function(jqXHR, textStatus) {
//   console.log("Request failed: " + textStatus);
// })
// .always(function() {
//   console.log('Request completed');
// });


