var mongoose = require( 'mongoose' );


var AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: [true, "Answer cannot be blank."]
  },
  details: {
    type: String
  },
  likes: {
    type: Number,
    default: 0
  },
  user: {

  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }
}, {timestamps: true})

mongoose.model('Answer', AnswerSchema);
