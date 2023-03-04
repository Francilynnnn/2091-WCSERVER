var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var urlecondedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'contact.html');
});

app.post('/process_post', urlecondedParser, function (req, res) {
  response = {
    user_name: req.body.user_name,
    user_subject: req.body.user_subject,
    user_message: req.body.user_message,
    user_email: req.body.user_email,
  };

  console.log(response);
  res.end(JSON.stringify(response));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
