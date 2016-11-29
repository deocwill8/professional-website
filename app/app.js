'use strict';
angular
.module('professionalWebsite', [
    'ui.router',
   
])
.config(function ($stateProvider, $urlRouterProvider){
     //lets set up the rest of the states
    $stateProvider
     .state('state1', {
        url:'/home',
        templateUrl: 'views/home.html'
    })
    .state('state2', {
        url:'/about',
        templateUrl: 'views/about.html'
    })
    .state('state3', {
        url:'/contact',
        templateUrl: 'views/contact.html'
    })
    //for any unmatched url, redirect to state 2
     $urlRouterProvider.otherwise('/state1');
});
//serves no purpose really just to make sure the main module is working 
console.log('\'Allo \'Allo!');
