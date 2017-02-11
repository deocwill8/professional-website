angular.module('professionalWebsite')
    .controller('ContactController', ['$rootScope','$scope', '$window', '$state', function($rootScope, $scope, $window, $state) {
        
    $scope.emailStructure = {
        to: "deonawilliams26@gmail.com",
        email: null,
        subject: null,
        body:null
    }    
        
    $scope.sendEmail = function() {
        console.log($scope.emailStructure);
        //$window.location.href = "mailto:deonawilliams26@gmail.com?subject=Hi Deona&body=";
    }
    console.log("Contact controller works!");
        
        
        
        
        
        
        
        
        
        
        
        
    }]);