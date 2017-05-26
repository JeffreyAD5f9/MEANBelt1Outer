
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
        templateUrl: 'partials/newUsers.html',
        controller: 'UsersController'
    })
    .when('/welcome/:id',{
        templateUrl: 'partials/welcome.html',
        controller: 'UsersController',
        controller: 'QuestionsController'
    })
    .when('/post/:id',{
        templateUrl: 'partials/postQuestion.html',
        controller: 'UsersController',
        controller: 'QuestionsController'
    })
    .when('/view/:id',{
        templateUrl: 'partials/viewQuestion.html',
        controller: 'UsersController',
        controller: 'QuestionsController',
        controller: 'AnswersController'
    })
    .when('/answer/:id',{
        templateUrl: 'partials/answer.html',
        controller: 'UsersController',
        controller: 'QuestionsController',
        controller: 'AnswersController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
