'use strict';
angular.module('professionalWebsite')
    .directive('navBar', function () {
        return {
            restrict : 'E',
            templateUrl: '/app/views/nav-bar.html'
        };
});
