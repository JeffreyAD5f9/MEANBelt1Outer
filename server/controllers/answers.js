
var mongoose = require( 'mongoose' );
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');
var User = mongoose.model('User');


module.exports = {

  index: function(request, response){
    console.log('serverInitA');
    Answer.find({}).populate('user').populate('questions').exec(function(error, answers){
      if(error){
        return response.json(error);
      }
      return response.json(answers);
    })
  },
  showAnswer: function(request, response){
    console.log('serverShowA');
    console.log(request.params.id);
    Answer.findById(request.params.id, function(error, answer){
      if(error){
        return response.json(error);
      }
      if(!answer){
        return response.json({
          "errors": "Answer not in Database"
        })
      }
      return response.json(answer);
    })
  },
  addAnswer: function(request, response){
    console.log('serverAddA');
    console.log(request.body);
    Answer.create(request.body, function(error, answer){
      if(error){
        return response.json(error);
      }

      User.findByIdAndUpdate(request.body.user, { $push : { answers: answer._id }}, function(error, user){
        if(error){
          return response.json(error);
        }
      return response.json(answer);
    })
  })
},
  likeAnswer: function(request, response){
    console.log('serverLikeA');
    console.log(request.params.id);
    Answer.findByIdAndUpdate(request.params.id, { $inc : { likes: 1 }}, function(error, answer){
      if(error){
        return response.json(error);
      }
      if(!answer){
        return response.json({
          "errors": "Answer not in Database"
        })
      }
      return response.json(answer);
    })
  }


  };
