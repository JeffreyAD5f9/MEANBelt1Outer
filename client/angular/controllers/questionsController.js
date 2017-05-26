app.controller('QuestionsController', function (QuestionFactory, $location, $routeParams){

  var self = this;
  self.questions = [];
  self.errors = [];

  self.index = function(){
    console.log('initializeQ');
    QuestionFactory.index(function(response){
      self.questions = response.data;
    })
  }

  self.addQuestion = function(newQuestion){
    console.log('addQ');
    self.errors = [];
      QuestionFactory.addQuestion(newQuestion, function(response){
        self.newQuestion = {};

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

  self.showQuestion = function(question_id){
    console.log('showQ');
    QuestionFactory.showQuestion($routeParams.id, function(response){
      console.log(response)
      self.question = response.data;
    })
  }
  self.return = function(user_id){
    console.log('returnQ');
    $location.url('/welcome')
  }

});
