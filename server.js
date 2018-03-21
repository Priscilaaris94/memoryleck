// Dependencies

var express = require("express");
var bodyParser = require("body-parser");



// Define port the server will be listening on.

var PORT = process.env.PORT || 3000;



var app = express();



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/app/public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Views 
var path = require('path');
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){ 
	properties = [{
		address_one: "118 Peachtree Street",
		address_two: null,
		baths: 1,
		beds: 2,
		city: "Atlanta",
		id: 2,
		img_1: "https://lorempixel.com/g/400/400/cats",
		landlord_id: "bC8Ol7BDdoY6AZD10w2vRmU0Pab2",
		price: 1200,
		sqfeet: 860,
		state: "GA",
		status: "vacant",
		tenant_id: null,
		zip: 30302
	}, 
	{
		address_one: "567 Peachtree Road",
		address_two: null,
		baths: 1,
		beds: 2,
		city: "Atlanta",
		id: 2,
		img_1: "https://lorempixel.com/g/400/400/cats",
		landlord_id: "bC8Ol7BDdoY6AZD10w2vRmU0Pab2",
		price: 1150,
		sqfeet: 920,
		state: "GA",
		status: "vacant",
		tenant_id: null,
		zip: 30302
	}];
	// orm.getproperties( ... callback() );
	// fetch('/api/property').then(b => b.json()).then( d => console.log(d) )
 	res.render('pages/allproperties',{title: 'All Properties',properties: properties});
});




// Import routes and give the server access to them.
var api = require('./app/controllers/apiController');
app.use('/api', api);

// var routes = require("./app/controllers/appController.js");
// app.use('/', routes);

//App is listening...

app.listen(PORT, function() {

  console.log("App now listening at localhost:" + PORT);

});