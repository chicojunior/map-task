(function() {

  'use strict';

  angular
    .module('myApp', [])
    .controller('GridController', GridController);

    GridController.$inject = ['$scope','$http', 'GridService'];

    function GridController($scope, $http, GridService) {

      var vm = this;

      vm.gyms = [];
      vm.gymsDetail = [];

      function getAllData(gArr) {
        var len = gArr.length;
        for (var i = 0; i < len; i++) {
          var url = "http://localhost:1337/jiujitsuteam.herokuapp.com/teams/" + gArr[i].id + ".json";
          $http.get(url).then(function(response){
            vm.gymsDetail.push(response.data);
          });
          console.log(vm.gymsDetail[i]);
        }
      }

      GridService.getAll()
        .then(function(response) {
          vm.gyms = response.data;
          getAllData(vm.gyms);
          //console.log(vm.gymsDetail);
        }, function(error){
          console.log("Request error" + error);
        })
    }

})();
