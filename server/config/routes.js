
var Users = require('../controllers/users.js');
var Questions = require('../controllers/questions.js');
var Answers = require('../controllers/answers.js');

module.exports = function(app){
    app.get('/users', Users.index);
    app.post('/users', Users.addUser);
    app.post('/sessions', Users.loginUser);
    app.get('/users/:id', Users.showUser);

    app.get('/quests', Questions.index);
    app.post('/quests', Questions.addQuestion);
    app.get('/quests/:id', Questions.showQuestion);

    app.get('/answers', Answers.index);
    app.post('/answers', Answers.addAnswer);
    app.get('/answers/:id', Answers.showAnswer);
    app.post('/answers/:id', Answers.likeAnswer);

}
