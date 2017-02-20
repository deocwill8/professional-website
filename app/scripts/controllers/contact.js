angular.module('professionalWebsite')
    .controller('ContactController', ['$rootScope','$scope', '$window', '$state', function($rootScope, $scope, $window, $state) {
        
    $scope.emailStructure = {
        to: "deonawilliams26@gmail.com",
        email: null,
        subject: null,
        body:null
    }    
        
  $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
        
        
    console.log("Contact controller works!");
        
        
        
        
        
        
        
        
        
        
        
        
    }]);