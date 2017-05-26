app.controller('AnswersController', function (AnswerFactory, $location, $routeParams){

  var self = this;
  self.answers = [];
  self.errors = [];

  self.index = function(){
    console.log('initializeA');
    AnswerFactory.index(function(response){
      self.answers = response.data;
    })
  }

  self.addAnswer = function(newAnswer){
    console.log('addA');
    self.errors = [];
      AnswerFactory.addAnswer(newAnswer, function(response){
        self.newAnswer = {};

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

  self.showAnswer = function(answer_id){
    console.log('showA');
    AnswerFactory.showAnswer($routeParams.id, function(response){
      console.log(response)
      self.answer = response.data;
    })
  }

  self.addLike = function(answer_id){
    console.log('likeA');
    AnswerFactory.addLike($routeParams.id, function(response){
      self.answer = response.data;
    })
  }

});
