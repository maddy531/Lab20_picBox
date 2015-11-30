var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view_1.html',
      controller: 'mainCtrl'
    })
    .otherwise({
      templateUrl: 'view_1.html',
      controller: 'mainCtrl'
  });
});
