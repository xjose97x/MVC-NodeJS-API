//Declare dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs'),
    compression = require('compression');

//Init app
var app = express();

//To parse json
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(compression());

//Init connection with MongoDB
var dbConnection = require(path.join(__dirname, 'dbConnection'));
dbConnection.connect();

app.get('/', function(req, res) {
		res.end("Welcome to your API!");
});

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

var server = app.listen(80, "localhost", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("listening at http://%s:%s", host, port);
});
