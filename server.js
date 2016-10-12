var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('You app will listen on port' + PORT);
});
