const connection = require("../config/connection");
const ORM = require("../models/orm");
const orm = new ORM(connection);
// Routes
// =============================================================
module.exports = function(app) {

  // GET all properties + images
  app.get("/api/properties", function(req, res) {
    orm.getVacantProperty((data)=>{
      res.json(data);
    })
  });

  // GET properties for a tenant + payments + requests
  app.get("/api/properties/tenant/:id", function(req, res) {
    orm.getTenantProperties(req.params.id, (data)=>{
      res.json(data);
    });

  });

  // GET properties for an landlord + payments + requests 
  app.get("/api/properties/landlord/:id", function(req, res) {
    orm.getLandlordProperties(req.params.id, (data)=>{
      res.json(data);
    });
  });
  
  // POST property
  app.post("/api/property", function(req, res) {
    if(!req.body.property){return res.send("Bad request")}
     orm.postProperty(req.body.property, function(){
      res.redirect('/landlord-home');
     });
  });

  // PUT property
  app.put("/api/property/:id", function(req, res) {
    if(!req.body.property){return res.send("Bad request")}
     orm.postProperty(req.body.property, function(){
      res.redirect('/landlord-home');
     });
  });

  // POST payment
  app.post("/api/payment", function(req, res) {
    if(!req.body.payment){return res.send("Bad request")}
     orm.postPayment(req.body.payment, function(){
      res.redirect('/tenant-home');
     });
  });
  
  // POST request 
  app.post("/api/request", function(req, res) {
    if(!req.body.request){return res.send("Bad request")}
    let redirectto = req.body.user.type === 'landlord' ? '/landlord-home' : '/tenant-home';
    
    orm.postRequest(req.body.request, function(){
      res.redirect(redirectto);
    });
  });

  // PUT request 
  app.put("/api/request/:id", function(req, res) {
    if(!req.body.request){return res.send("Bad request")}
    let redirectto = req.body.user.type === 'landlord' ? '/landlord-home' : '/tenant-home';
    
    orm.postRequest(req.body.request, function(){
      res.redirect(redirectto);
    });
  });

  // POST a user 
  app.post("/api/user", function(req, res) {
    if(!req.body.user){return res.send("Bad request")}
    let redirectto = req.body.user.type === 'landlord' ? '/landlord-home' : '/tenant-home';
    
    orm.postUser(user, function(){
      res.redirect(redirectto);
    });
  });

};