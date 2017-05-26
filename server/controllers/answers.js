
var mongoose = require( 'mongoose' );
var Answer = mongoose.model('Answer');


module.exports = {

  index: function(request, response){
    console.log('serverInitA');
    Answer.find({}).exec(function(error, answers){
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
    Answer.create(request.body, function(error, answer){
      if(error){
        return response.json(error);
      }
      console.log(answer);
      return response.json(answer);
    })
  },
  likeAnswer: function(request, response){
    console.log('serverLikeA');
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
      answer.likes ++;
      return response.json(answer);
    })
  },


  };
