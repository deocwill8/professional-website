angular.module('professionalWebsite')
    .controller('ContactController', ['$rootScope','$scope', '$window', '$state', function($rootScope, $scope, $window, $state) {
        
    $scope.user = {
        to: "deonawilliams26@gmail.com",
        name: "",
        email: "",
        subject: "",
        message: ""
    } 
    
    $scope.sendEmail = function() {
        console.log($scope.user);
        $scope.user = null;
        alert("Thank you for your message");
    }        

        
    console.log("Contact controller works!");
        
        
        
        
        
        
        
        
        
        
        
        
    }]);