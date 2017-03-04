'use strict';
angular
.module('professionalWebsite', [
    'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider){
     //lets set up the states
    $stateProvider
     .state('Deona', {
        url: '/Deona',
        templateUrl: 'app/views/home.html',
        controller: 'HomeController'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'app/views/about.html'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/views/contact.html',
        controller: 'ContactController'
    })
    //for any unmatched url, redirect to home page
     $urlRouterProvider.otherwise('/Deona');
});
//serves no purpose really just to make sure the main module is working 
console.log('The website is functioning');
