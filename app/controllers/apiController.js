const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

// Middleware
// =============================================================
app.use(bodyParser.json());
const parseUrlencoded = bodyParser.urlencoded({extended: false});


// ORM / DB Connection
// =============================================================
const connection = require("../config/connection");
const ORM = require("../models/orm");
const orm = new ORM(connection);

// Routes
// =============================================================

// GET all properties + images
router.route("/property")
.get(function(req, res) {
  console.log('getting api/property');
  orm.getVacantProperty((data)=>{
    res.json(data);
  })
})
.post(function(req, res) {
  if(!req.body.property){return res.send("Bad request")}
   orm.postProperty(JSON.parse(req.body.property), function(){
    res.redirect('/landlord-home');
   });
});

// PUT specific property
router.route("/property/:id")
.put(function(req, res) {
  if(!req.body.property){return res.send("Bad request")}
   orm.postProperty(req.body.property, function(){
    // res.redirect('/landlord-home');
    res.send('got it');
   });
});

// GET properties for a tenant + payments + requests
router.route("/property/tenant/:id")
.get(function(req, res) {  
  orm.getTenantProperties(req.params.id, (data)=>{
    res.json(...data);
  });
});

// GET properties for an landlord + payments + requests 
router.route("/property/landlord/:id")
.get(function(req, res) { 
  orm.getLandlordProperties(req.params.id, (data)=>{
    res.json(...data);
  });
});

// POST payment
router.route("/payment")
.post(function(req, res) {
  if(!req.body.payment){return res.send("Bad request")}
   orm.postPayment(req.body.payment, function(){
    res.redirect('/tenant-home');
   });
});

// POST request 
router.route("/request")
.post(function(req, res) {
  if(!req.body.request){return res.send("Bad request")}
  let redirectto = req.body.user.type === 'landlord' ? '/landlord-home' : '/tenant-home';
  
  orm.postRequest(req.body.request, function(){
    res.redirect(redirectto);
  });
});

// PUT request 
router.route("/request/:id")
.put(function(req, res) {
  if(!req.body.request){return res.send("Bad request")}
  let redirectto = req.body.user.type === 'landlord' ? '/landlord-home' : '/tenant-home';
  
  orm.postRequest(req.body.request, function(){
    res.redirect(redirectto);
  });
});

// POST a user 
router.route("/user")
.post(function(req, res) {
  if(!req.body.uid || !req.body.email){return res.send("Bad request")}
  let redirectto = req.body.type === 'landlord' ? '/landlord-home' : '/tenant-home';
  // res.send('thanks... I\'ll redirect you to ' + redirectto);
  orm.postUser({uid: req.body.uid, email: req.body.email, name: req.body.name, type: req.body.type}, function(err, data){
    res.redirect(redirectto);
  });
});


// Export
// ===========================================================

module.exports = router;