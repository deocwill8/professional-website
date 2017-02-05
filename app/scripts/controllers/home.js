angular.module('professionalWebsite')
    .controller('HomeController', ['$rootScope','$scope', '$window', function($rootScope, $scope, $window) {
      $scope.sendEmail = function() {
          $window.location.href = "mailto:deonawilliams26@gmail.com?subject=Hi Deona&body=";
      }
        console.log("This controller works!")
    }]);