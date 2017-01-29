'use strict';
angular
.module('professionalWebsite', [
    'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider){
     //lets set up the states
    $stateProvider
     .state('home', {
        url:'/home',
        templateUrl: 'views/home.html'
    })
    .state('about', {
        url:'/about',
        templateUrl: 'views/about.html'
    })
    .state('contact', {
        url:'/contact',
        templateUrl: 'views/contact.html'
    })
    //for any unmatched url, redirect to home page
     $urlRouterProvider.otherwise('/home');
});
//serves no purpose really just to make sure the main module is working 
console.log('\'Allo \'Allo!');
