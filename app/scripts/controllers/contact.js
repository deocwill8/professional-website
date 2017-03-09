angular.module('professionalWebsite')
    .controller('ContactController', ['$rootScope','$scope', '$window', '$state', '$http', function($rootScope, $scope, $window, $state, $http) {
        
    $scope.user = {
//        to: "deonawilliams26@gmail.com",
//        subject: "",
//        message: "",
//        email: "",
//        name: ""
    } 
    
    $scope.sendEmail = function(user) {
        $http({
            method: 'POST',
            url: 'contact.php',
            data: $scope.user,
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
        }).then(function successCallback(data) {
            console.log($scope.user);
            console.log(data);
            $scope.user = null;
            alert("Thank you for your message");
            // when the response is available
        }, function errorCallback(data) {
             console.log("Form not submitted");
             console.log($scope.user);
             console.log(data);                    
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }   
    console.log("Contact controller works!");
        
    }]);