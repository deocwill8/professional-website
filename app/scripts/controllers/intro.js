angular.module('professionalWebsite')
    .controller('IntroController', ['$rootScope','$scope', '$window', '$state', function($rootScope, $scope, $window, $state) {
     $scope.intro = true;    
      
        console.log("Intro controller works!");
    }]);