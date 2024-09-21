// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/comments', function(req, res) {
  fs.readFile(__dirname + '/comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(3000);