var app = angular.module('movieSearch', ['ngRoute']);


app.config(function($routeProvider,$locationProvider){

  $routeProvider
  .when('/', {
    templateUrl: '../partials/home.html',
    controller: 'mainController'
  })
  .when('/:id', {
    templateUrl: '../partials/show.html',
    controller: 'showController'
  });
  $locationProvider.html5Mode(true);
})