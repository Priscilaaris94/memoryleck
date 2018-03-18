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

router.get("/", function(req, res) {

<<<<<<< HEAD
    index.all(function(data) {

        var Object = {

            Property: data
        };

        console.log(Object);
        res.render("index", Object);

    });

});

// POST route to create/add a property.
router.post("/api/properties", function(req, res) {

    property.create([

        "porperty_name", "input"
    ], [
       
        req.body.property_name, req.body.input
   
    ], function(result) {

        // send back the ID of the new quote

        res.json({ id: result.insertId });
    });

});

// PUT route to update property input state.

router.put("/api/properties/:id", function(req, res) {

    var condition ="id = " + req.params.id;

    console.log("condition", condition);

    property.update({

        input: req.body.input

    }, condition, function(result) {
        if (result.changeRows == 0) {

            // If no rows were changed, then the ID must not exist, so 404

            return res.status(404).end();
        } else {
            
            res.status(200).end();

        }
    });

});

// Export routes for server.js to use.
module.exports = router;
=======
});
>>>>>>> ff865c35f2931ed8667225a6fbce111e76c00fe2
