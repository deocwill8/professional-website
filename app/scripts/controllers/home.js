angular.module('professionalWebsite')
    .controller('HomeController', ['$rootScope','$scope', '$window', '$state', function($rootScope, $scope, $window, $state) {
     $scope.home = true;    
      $scope.contactMe = function() {
          $state.go('contact')
      }
        console.log("Home controller works!");
    }]);