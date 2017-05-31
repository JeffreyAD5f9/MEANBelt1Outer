
var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
        templateUrl: 'partials/newUsers.html',
        controller: 'UsersController as UC'
    })
    .when('/welcome',{
        templateUrl: 'partials/welcome.html',
        controller: 'UsersController as UC'
    })
    .when('/postQuest',{
        templateUrl: 'partials/postQuestion.html',
        controller: 'UsersController as UC'
    })
    .when('/view/:id',{
        templateUrl: 'partials/viewQuestion.html',
        controller: 'UsersController as UC'
    })
    .when('/answer/:id',{
        templateUrl: 'partials/answer.html',
        controller: 'UsersController as UC'
    })
    .otherwise({
      redirectTo: '/'
    });
});
