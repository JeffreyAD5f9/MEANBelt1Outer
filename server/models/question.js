var mongoose = require( 'mongoose' );


var QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Question field cannot be blank."],
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

mongoose.model('Question', QuestionSchema);
