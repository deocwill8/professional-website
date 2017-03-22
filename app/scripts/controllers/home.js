angular.module('professionalWebsite')
    .controller('HomeController', ['$rootScope','$scope', '$window', '$state', function($rootScope, $scope, $window, $state) {
     $scope.home = true;    
    
     console.log("Home controller works!");
    }]);