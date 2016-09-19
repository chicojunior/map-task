(function() {

  'use strict';

  angular
    .module('myApp', [])
    .service('GridService', GridService);

    GridService.$inject = ['$http'];

    function GridService($http) {
      var url = "http://localhost:1337/jiujitsuteam.herokuapp.com/teams.json"
      return {
        getAll: function() {
          return $http.get(url);
        }
      }
    }

})();
