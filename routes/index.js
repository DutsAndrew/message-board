var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hey there!',
    user: "Armando",
    added: new Date()
  },
  {
    text: 'What\'s up?',
    user: "Keira",
    added: new Date()
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', function(req, res, next) {
  const userName = req.body.messageUser;
  const message = req.body.messageText;
  messages.push({ text: message, user: userName, added: new Date() });
  res.redirect('/');
});

module.exports = router;
