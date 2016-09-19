(function() {

  'use strict';

  angular
    .module('myApp', [])
    .service('MapFactory', MapFactory);

    MapFactory.$inject = ['$http'];

    function MapFactory($http) {
      var url = "http://localhost:1337/jiujitsuteam.herokuapp.com/teams.json"
      return {
        getAll: function() {
          return $http.get(url);
        }
      }
    }

})();
