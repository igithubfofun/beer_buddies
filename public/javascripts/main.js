$(function(){
  var gURL = $('#gURL').text();
  var gKey = $('#gKey').text();
  var bURL = $('#bURL').text();
  var bKey = $('#bKey').text();

  var jqXHR = $.ajax({
          method: "GET",
          url: bURL +'beer/random',
          data: {
          key: bKey
          },
          contentType: "application/json",
          jsonpCallback: 'jsonCallback',
          dataType: "json"
         })
          .done(function() {
            console.log(jqXHR.data.id);
          })
          .fail(function(jqXHR, textStatus) {
            console.log("Request failed: " + textStatus);
          })
          .always(function() {
            console.log("Request completed");
        });


          var apiRoot = 'breweries/';

          var loadBrewerys = function() {

            //showLoadingIndicator();

            var jqxhr = $.ajax({
                  url: apiRoot,
                  method: "GET",
                  data: {},
                  dataType: "json"
              })
              .done(function(brewerys) {
                console.log('brewery data', brewerys);
                displaybrewerys(brewerys);
              })
              .fail(function(jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
              })
              .always(function() {
                console.log('Request completed');
                //hideLoadingIndicator();
              });
          };

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






})


