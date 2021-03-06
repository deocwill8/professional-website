'use strict';
angular
.module('professionalWebsite', [
    'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider){
     //lets set up the states
    $stateProvider
     .state('about', {
        url: '/about',
        templateUrl: 'app/views/about.html',
        controller: 'AboutController'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/views/contact.html',
        controller: 'ContactController'
    })
    .state('intro', {
        url: '/intro',
        templateUrl: 'app/views/intro.html',
        controller: 'IntroController'
    });
    //for any unmatched url, redirect to home page
     $urlRouterProvider.otherwise('/intro');
});
//serves no purpose really just to make sure the main module is working 
console.log('The website is functioning');
