// require express

var express = require("express");

var router = express.Router();

// Import the models to it's database function.

var images = require ("../models/images.js");
var index = require("../models/index.js");
var payment = require("../models/payment.js");
var property = require("../models/property.js");
var request = require("../models/request.js");
var users = require("../models/users.js");

// create all our routes and set up logic with those routes where required.
//  GET route to get ... from database.

router.get("/", function(req, res){

});
