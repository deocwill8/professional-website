angular.module('professionalWebsite')
    .controller('ContactController', ['$rootScope','$scope', '$window', '$state', '$http', function($rootScope, $scope, $window, $state, $http) {
        
        $scope.contact = true;
    
    $scope.sendEmail = function(input) {
        $http({
            method: 'POST',
            url: 'contact.php',
            data: input,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function successCallback(data) {
            console.log(input);
            console.log(data);
            $scope.user = null;
            // when the response is available
        }, function errorCallback(data) {
             console.log("Form not submitted");
             console.log(input);
             console.log(data);                    
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }   
    console.log("Contact controller works!");
        
    }]);