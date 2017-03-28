angular.module('professionalWebsite')
    .controller('IntroController', ['$rootScope','$scope', '$window', '$state', function($rootScope, $scope, $window, $state) {
       $scope.seeMore = function() {
          $state.go('about');
      };
       $scope.contact = function() {
          $state.go('contact');
      };
      
     console.log("Intro controller works!");
    }]);