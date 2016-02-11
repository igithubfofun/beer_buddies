$(function(){
  var gURL = $('#gURL').text();
  var gKey = $('#gKey').text();
  var bURL = $('#bURL').text();
  var bKey = $('#bKey').text();
  var sURL = $('#sURL').text();
  var sKey = $('#sKey').text();
  var apiRoot = '/users/';


    var jqxhr = $.ajax({
          url: apiRoot,
          method: "GET",
          data: {},
          dataType: "json"
      })
      .done(function(users) {
        // console.log('User data', users);
        for (var i = 0; i < users.length; i++){
          for (var j = 1; j < users.length; j++){
          if (users[i].favoriteBeer === users[j].favoriteBeer){
            console.log(users[i].name);
          }
        }
      }

      })
      .fail(function(jqXHR, textStatus) {
        console.log("Request failed: " + textStatus);
      })
      .always(function() {
        console.log('Request completed');
      });
  });

// var jqXHR = $.ajax({
//         method: "GET",
//         url: bURL +'beer/random',
//         data: {
//         key: bKey
//         },
//         contentType: "application/json",
//         jsonpCallback: 'jsonCallback',
//         dataType: "json"
//        })
//         .done(function() {
//           console.log(jqXHR.data.id);
//         })
//         .fail(function(jqXHR, textStatus) {
//           console.log("Request failed: " + textStatus);
//         })
//         .always(function() {
//           console.log("Request completed");
//       });

// });
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
//       street_address: '16801 Colegrove Drive'
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


