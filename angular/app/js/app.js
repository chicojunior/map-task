(function() {

  'use strict';

  angular
    .module('myApp', [])
    .service('GridService', GridService)
    .controller('MapController', MapController)
    .controller('GridController', GridController);

    GridService.$inject = ['$http'];
    GridController.$inject = ['$scope','$http', 'GridService'];

    function MapController() {

      var mymap = L.map('mapid').setView([-3.782294, -38.496546], 11.5);
      var geocoder = new L.Control.Geocoder.Nominatim();

      var gyms = JSON.parse(window.localStorage.getItem('gyms'));

      //console.log(gyms);

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

    function GridService($http) {
      var id = 0;
      var url = "http://localhost:1337/jiujitsuteam.herokuapp.com/teams.json"
      return {
        getAll: function() {
          return $http.get(url);
        }
      }
    }

    function GridController($scope, $http, GridService) {

      var vm = this;

      vm.gyms = [];
      vm.gymsDetail = [];
      var a = [];

      function getAllData(gym) {
        var len = gym.length;
        for (var i = 0; i < len; i++) {
          var url = "http://localhost:1337/jiujitsuteam.herokuapp.com/teams/" + gym[i].id + ".json";
          $http.get(url).then(function(response){

            //a.push(response.data);
            //console.log(test);
            a.push(JSON.stringify(response.data));
            //console.log(a);
            //window.localStorage.setItem('gyms', JSON.stringify(test));
            vm.gymsDetail.push(response.data);
          });
        }
        //var a = JSON.stringify(vm.gymsDetail);
        console.log(a);

      }

      GridService.getAll()
        .then(function(response) {
          vm.gyms = response.data;
          getAllData(vm.gyms);
        }, function(error){
          console.log("Request error" + error);
        })
    }

    function transportData(gymData) {
      data = gymData;
    }

})();
