angular.module('professionalWebsite')
    .controller('IntroController', ['$rootScope','$scope', '$window', '$state', function($rootScope, $scope, $window, $state) {
     $scope.intro = true; 
       $scope.seeMore = function() {
          $state.go('Deona');
      }
       $scope.contact = function() {
          $state.go('contact');
      }   
      
     console.log("Intro controller works!");
    }]);