app.controller('UsersController', function (UserFactory, $location, $routeParams){

  var self = this;
  self.users = [];
  self.errors = [];

  self.index = function(){
    console.log('initializeU');
    UserFactory.index(function(response){
      self.users = response.data;
    })
  }

  self.addUser = function(newUser){
    console.log('addU');
    self.errors = [];
      UserFactory.addUser(newUser, function(response){
        self.newUser = {};

        if(response.data.errors){
          for(key in response.data.errors){
            var error = response.data.errors[key]
            self.errors.push(error.message);
          }
        }
        else {
          self.index();
        }
      })
  }

  self.showUser = function(user_id){
    console.log('showU');
    UserFactory.showUser($routeParams.id, function(response){
      console.log(response)
      self.user = response.data;
    })
  }

  self.loginUser = function(userLog){
    console.log('loginU');
    console.log(userLog);
    self.errors = [];
      UserFactory.loginUser(userLog, function(response){
        self.loginUser = {};
        if(response.data.errors){
          for(key in response.data.errors){
            var error = response.data.errors[key]
            self.errors.push(error.message);
          }
        }
        else {
          $location.url('/welcome')
        }
      })
  }

  self.logout = function(user_id){
    console.log('logoutU');
    $location.url('/')
  }


});
