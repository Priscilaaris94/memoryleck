// require express
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
var path = require('path');

// Middleware
// =============================================================
app.use(bodyParser.json());
const parseUrlencoded = bodyParser.urlencoded({extended: false});

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');

// ORM / DB Connection
// =============================================================
const connection = require("../config/connection");
const ORM = require("../models/orm");
const orm = new ORM(connection);

// Main Pages
// =============================================================

router.get('/', function(req, res){ 
  orm.getVacantProperty((properties)=>{
    res.render('pages/allproperties',{title: 'All Properties', properties});
  });
});

router.get('/property/:id', function(req, res){ 
    orm.selectDB('property', {id: req.params.id}, (data)=>{
        let property = data[0];
        res.render('pages/singleproperty',{title: 'Property ' + property.address_one, property});
    });
});


// Landlord Pages
// =============================================================

router.get('/landlord/login', function(req, res){
    res.render('pages/login', {title: 'Landlord Login', buttonid: 'login-landlord'});
});

router.get('/landlord/home/:uid', function(req, res){
    orm.getLandlordProperties(req.params.uid, (properties)=>{
        res.render('pages/landlord/landlord',{title: 'My Properties', uid: req.params.uid, properties});
    });
});

router.get('/landlord/home/:uid/property/:propertyid?', function(req, res){
    orm.selectDB('user', {type: 'tenant'}, (tenants)=>{
        if(req.params.propertyid){
            orm.selectDB('property', {id: req.params.propertyid}, (data)=>{
                let property = data[0];
                res.render('pages/landlord/property',{title: 'Update Property', uid: req.params.uid, tenants, property});
            });
        } else {
            let property = {};
            res.render('pages/landlord/property', {title: 'Add a New Property', uid: req.params.uid, tenants, property});
        }  
    });
});

router.get('/landlord/home/:uid/newrequest/:propertyid', function(req, res){
    let request = {
        property_id: req.params.propertyid
    };
    res.render('pages/landlord/request', {title: 'Add a New Request', uid: req.params.uid, request});
});

router.get('/landlord/home/:uid/request/:requestid', function(req, res){
    orm.selectDB('request', {id: req.params.requestid}, (data)=>{
        let request = data[0];
        res.render('pages/landlord/request',{title: 'Update Request', uid: req.params.uid, request});
    });
});


router.get('/landlord/home/', function(req, res){
    res.redirect('/landlord/login');
});

// Tenant Pages
// =============================================================

/*app.get('/tenant/login', function(req, res){
    res.render('main/login', {title: 'Tenant Login', buttonid: 'login-tenant'});
});

app.get('/tenant/home/:id', function(req, res){
    res.render('pages/home', {title: 'My Tenant Home', property});
});

app.get('/tenant/home/:id/payment', function(req, res){
    res.render('pages/home', {title: 'My Tenant Home', property});
});

app.get('/tenant/home/:id/request', function(req, res){
    res.render('pages/home', {title: 'My Tenant Home', property});
});
*/

// Export routes for server.js to use.
module.exports = router;