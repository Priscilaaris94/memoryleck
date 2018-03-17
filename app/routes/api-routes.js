// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET all properties
  app.get("/api/properties", function(req, res) {

  });

  // GET properties for a tenant + payments + requests
  app.get("/api/properties/tenant/:id", function(req, res) {

  });

  // GET properties for an landlord + payments + requests 
  app.get("/api/properties/landlord/:id", function(req, res) {

  });
  
  // POST property
  // POST payment
  // POST request 
  app.post("/api/request", function(req, res) {

  });

  // POST new user 
  app.post("/api/user", function(req, res) {

  });

  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {

  });

};