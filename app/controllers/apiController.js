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


// Property
// =============================================================
// GET = get all vacant properties

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
})
.put(function(req, res) {
  if(!req.body.property){return res.send("Bad request")}
   orm.postProperty(req.body.property, function(){
    // res.redirect('/landlord-home');
    res.send('got it');
   });
});

// Tenant & Landlord Properties
// =============================================================

router.route("/property/tenant/:id")
.get(function(req, res) {  
  orm.getTenantProperties(req.params.id, (data)=>{
    res.json(...data);
  });
});

router.route("/property/landlord/:id")
.get(function(req, res) { 
  orm.getLandlordProperties(req.params.id, (data)=>{
    res.json(...data);
  });
});

// Payment
// =============================================================

router.route("/payment")
.post(function(req, res) {
  if(!req.body.payment){return res.send("Bad request")} 
  orm.postPayment(JSON.parse(req.body.payment), function(){
    res.redirect('/tenant-home');
   });
})
.put(function(req, res) {
  if(!req.body.payment){return res.send("Bad request")} 
  orm.putPayment(JSON.parse(req.body.payment), function(){
    res.redirect('/tenant-home');
   });
})
.delete(function(req, res) {
  if(!req.body.id){return res.send("Bad request")} 
  orm.deletePayment(req.body.id, function(){
    res.redirect('/tenant-home');
   });
});

// Request
// =============================================================

router.route("/request")
.post(function(req, res) {
  if(!req.body.request){return res.send("Bad request")}
  orm.postRequest(JSON.parse(req.body.request), function(data){
    let redirectto = data[0].type == 'landlord' ? '/landlord-home' : '/tenant-home';
    res.redirect(redirectto);
  });
})
.put(function(req, res) {
  if(!req.body.request){return res.send("Bad request")}
  orm.putRequest(req.body.request,  function(data){
    let redirectto = data[0].type == 'landlord' ? '/landlord-home' : '/tenant-home';
    res.redirect(redirectto);
  });
});

// User
// =============================================================

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