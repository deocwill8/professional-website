'use strict';
angular.module('professionalWebsite')
    .directive('navBar', function () {
        return {
            restrict : 'E',
            templateUrl: 'views/nav-bar.html'
        };
});
