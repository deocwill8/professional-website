angular.module('professionalWebsite')
    .controller('ContactController', ['$rootScope','$scope', '$window', '$state', '$http', function($rootScope, $scope, $window, $state, $http) {
        
    $scope.user = {
        to: "deonawilliams26@gmail.com",
        name: "",
        email: "",
        subject: "",
        message: ""
    } 
    
    $scope.sendEmail = function(user) {
        $http({
            method: 'POST',
            url: '/webformmailer.php',
            data: {
                to: user.to,
                name: user.name,
                email: user.email,
                subject: user.subject,
                comments: user.message
            }
        }).then(function successCallback(data) {
            console.log($scope.user);
            $scope.user = null;
            alert("Thank you for your message");
            // when the response is available
        }, function errorCallback(data) {
             console.log("Form not submitted");
             console.log($scope.user);
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
       
    }   
    console.log("Contact controller works!");
        
    }]);