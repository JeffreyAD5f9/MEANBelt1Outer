
var mongoose = require( 'mongoose' );
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');
var questions = {};

module.exports = {

  index: function(request, response){
    console.log('serverInitQ');
    Question.find({}).populate('user').exec(function(error, questions){
      if(error){
        return response.json(error);
      }
      return response.json(questions);
    })
  },
  showQuestion: function(request, response){
    console.log('serverShowQ');
    Question.findById(request.params.id, function(error, quest){
      if(error){
        return response.json(error);
      }
      if(!quest){
        return response.json({
          "errors": {
            "question": {
              "message": "Question not in Database"
            }
          }
        })
      }
      return response.json(quest);
    })
  },
  addQuestion: function(request, response){
    console.log('serverAddQ');
    Question.create(request.body, function(error, question){
      if(error){
        return response.json(error);
      }

      User.findByIdAndUpdate(request.body.user, { $push : { questions: question._id }}, function(error, user){
        if(error){
          return response.json(error);
        }
        return response.json(question);
        })
      })
    }

  };
