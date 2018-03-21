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

// Main Pages
// =============================================================

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
    res.render('pages/allproperties',{title: 'All Properties', properties});
});


app.get('/property/:id', function(req, res){
    // orm.getproperty( ... callback() );
    // fetch('/api/property').then(b => b.json()).then( d => console.log(d) )
    let property =  {
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
    };
    res.render('pages/singleproperty',{title: 'Property ' + property.address_one, property});
});


// Landlord Pages
// =============================================================

app.get('/landlord/login', function(req, res){
    res.render('pages/login', {title: 'Landlord Login', buttonid: 'login-landlord'});
});

app.get('/landlord/home/:id', function(req, res){
    res.render('pages/home', {title: 'My Properties', properties});
});

app.get('/landlord/home/:id/property', function(req, res){
    res.render('pages/home', {title: 'My Properties', properties});
});

app.get('/landlord/home/:id/payment', function(req, res){
    res.render('pages/home', {title: 'My Properties', properties});
});

app.get('/landlord/home/:id/request', function(req, res){
    res.render('pages/home', {title: 'My Properties', properties});
});

// Tenant Pages
// =============================================================

app.get('/tenant/login', function(req, res){
    res.render('pages/login', {title: 'Tenant Login', buttonid: 'login-tenant'});
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


// Export routes for server.js to use.
module.exports = router;