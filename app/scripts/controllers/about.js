angular.module('professionalWebsite')
    .controller('AboutController', ['$rootScope','$scope', '$window', '$state', function($rootScope, $scope, $window, $state) {
     $scope.home = true;    
    
     console.log("About controller works!");
    }]);