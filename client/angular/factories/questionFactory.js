app.factory('QuestionFactory', function($http){
   var factory = {};
   var factoryQuestions = []

   factory.index = function(call){
     console.log('factoryIndexQ');
     $http.get('/users').then(call);
   }
   factory.addQuestion = function(newQuestion, call){
     console.log('factoryAddQ');
     $http.post('/users', newQuestion).then(call);
   }
   factory.showQuestion = function(id, call){
     console.log('factoryShowQ');
     $http.get('/users/' + id).then(call);
  }


   return factory;
  })
