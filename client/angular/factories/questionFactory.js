app.factory('QuestionFactory', function($http, $cookies){
   var factory = {};
   var factoryQuestions = []

   factory.index = function(call){
     console.log('factoryIndexQ');
     $http.get('/quests').then(call);
   }
   factory.addQuestion = function(newQuestion, call){
     console.log('factoryAddQ');
     $http.post('/quests', newQuestion).then(call);
   }
   factory.showQuestion = function(id, call){
     console.log('factoryShowQ');
     $http.get('/quests/' + id).then(call);
  }


   return factory;
  })
