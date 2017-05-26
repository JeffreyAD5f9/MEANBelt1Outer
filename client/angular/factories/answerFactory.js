app.factory('AnswerFactory', function($http){
   var factory = {};
   var factoryAnswers = []

   factory.index = function(call){
     console.log('factoryIndexA');
     $http.get('/answers').then(call);
   }
   factory.addAnswer = function(newAnswer, call){
     console.log('factoryAddA');
     $http.post('/answers', newAnswer).then(call);
   }
   factory.showAnswer = function(id, call){
     console.log('factoryShowA');
     $http.get('/answers/' + id).then(call);
  }
  factory.addLike = function(id, call){
    console.log('factoryLikeA');
    $http.post('/answers/' + id).then(call);
  }


   return factory;
  })
