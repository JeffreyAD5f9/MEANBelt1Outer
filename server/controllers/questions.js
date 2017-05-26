
var mongoose = require( 'mongoose' );
var Question = mongoose.model('Question');


module.exports = {

  index: function(request, response){
    console.log('serverInitQ');
    User.find({}).exec(function(error, quests){
      if(error){
        return response.json(error);
      }
      return response.json(quests);
    })
  },
  showQuestion: function(request, response){
    console.log('serverShowQ');
    console.log(request.params.id);
    Question.findById(request.params.id, function(error, quest){
      if(error){
        return response.json(error);
      }
      if(!quest){
        return response.json({
          "errors": "Question not in Database"
        })
      }
      return response.json(quest);
    })
  },
  addQuestion: function(request, response){
    console.log('serverAddQ');
    Question.create(request.body, function(error, quest){
      if(error){
        return response.json(error);
      }
      console.log(quest);
      return response.json(quest);
    })
  },


  };
