angular.module('professionalWebsite')
    .controller('IntroController', ['$rootScope','$scope', '$window', '$state', function($rootScope, $scope, $window, $state) {
     $scope.intro = true; 
      $scope.home = function() {
          $state.go('Deona');
      };    
      
     console.log("Intro controller works!");
    }]);