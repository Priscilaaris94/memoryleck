// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Define port the server will be listening on.
var PORT = process.env.PORT || 3000;
var app = express();

// Middleware
// =============================================================

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/app/public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var path = require('path');
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');


// Controller Routes
// =============================================================

// Import routes and give the server access to them.

var api = require('./app/controllers/apiController');
app.use('/api', api);

var routes = require("./app/controllers/appController.js");
app.use('/', routes);

//App is listening...

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});