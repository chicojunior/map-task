(function() {

  'use strict';

  angular
    .module('myApp', [])
    .controller('MapController', MapController);

    // MapController.$inject = ['$scope','$http', 'MapFactory'];

    function MapController() {

      var mymap = L.map('mapid').setView([-3.782294, -38.496546], 11.5);
      var geocoder = new L.Control.Geocoder.Nominatim();

      var addresses = ["Rua Padre Francisco Pita, 1009, Fortaleza, CE",
        "Av. Léa Pompeu, 800, Fortaleza, CE",
        "Av. Padre Antônio Tomás, 2610, Cocó, Fortaleza, CE"];

      L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hpY29qdW5pb3IiLCJhIjoiY2l0YTFiNmZ3MHBubzJ6cDFvZ2RidGNhaSJ9.VKRofcwO72EHtd3tbexI6w', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
      }).addTo(mymap);


      var len = addresses.length;

      for (var i = 0; i < len; i++) {
        geocoder.geocode(addresses[i], function(results) {
          var latLng = new L.LatLng(results[0].center.lat, results[0].center.lng);
          var marker = L.marker([latLng.lat, latLng.lng]).addTo(mymap);
        });
      }
    }

})();
