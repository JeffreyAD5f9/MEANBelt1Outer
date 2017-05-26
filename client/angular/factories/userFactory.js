app.factory('UserFactory', function($http){
   var factory = {};
   var factoryUsers = []

   factory.index = function(call){
     console.log('factoryIndexU');
     $http.get('/users').then(call);
   }
   factory.addUser = function(newUser, call){
     console.log('factoryAddU');
     $http.post('/users', newUser).then(call);
   }
   factory.showUser = function(id, call){
     console.log('factoryShowU');
     $http.get('/users/' + id).then(call);
  }
  factory.loginUser = function(userLog, call){
    console.log('factoryLoginU');
    $http.get('/users/' + userLog).then(call);
  }


   return factory;
  })
