app.controller('QuestionsController', function (QuestionFactory, UserFactory, AnswerFactory, $location, $routeParams, $cookies){
  console.log('QuestionsController...')
  var self = this;
  self.answers = [];
  self.newQuestion = {};
  self.newAnswer = {};
  self.questionErrors = [];
  self.answerErrors = [];

  self.index = function(){
    console.log('initializeQ');
    QuestionFactory.index(function(response){
      self.questions = response.data;
    })
  }

  self.answerIndex = function(){
    console.log('initializeA');
    AnswerFactory.index(function(response){
      self.answers = response.data;
    })
  }

  self.addAnswer = function(newAnswer, index, question_id){
    console.log('addQ');
    self.answerErrors = {};
    newAnswer.question = $routeParams.id
    UserFactory.session(function(user){
      newAnswer.user = user._id;
      AnswerFactory.addAnswer(newAnswer, function(response){
        self.newAnswer = {};
        if(response.data.errors){
          self.answerErrors[index] = [];
          for(key in response.data.errors){
            var error = response.data.errors[key];
            self.answerErrors[index].push(error.answer);
          }
        }
        else {
          $location.url('/view/' + response.data.question);
        }
    })
  })
}

  self.addLike = function(answer_id){
    console.log('likeA');
    AnswerFactory.addLike(answer_id, function(response){
      self.answer = response.data;
    })
    self.answerIndex();
  }

  self.addQuestion = function(newQuestion){
    console.log('addQ');
    self.errors = [];

    UserFactory.session(function(user){
      newQuestion.user = user._id;
      QuestionFactory.addQuestion(newQuestion, function(response){
        self.newQuestion = {};
        console.log(response);
        if(response.data.errors){
          for(key in response.data.errors){
            var error = response.data.errors[key]
            self.errors.push(error.message);
          }
        }
        else {
          var question_id = response.data._id;
          $cookies.put('question_id', question_id);
          $location.url('/welcome');
        }
      })
    })
  }

  self.showQuestion = function(question_id){
    console.log('showQ');
    QuestionFactory.showQuestion(question_id, function(response){
      self.question = response.data;
      $location.url('/view/' + self.question._id);
    })
  }

  self.displayQuestion = function(){
    console.log('displayQ');
    QuestionFactory.showQuestion($routeParams.id ,function(response){
      self.question = response.data;
    })
  }

  self.answerQuest = function(question_id){
    console.log('answerQ');
    QuestionFactory.showQuestion(question_id, function(response){
      self.question = response.data;
      $location.url('/answer/' + self.question._id);
    })
  }

  self.return = function(user_id){
    console.log('returnQ');
    $location.url('/welcome')
  }

});
