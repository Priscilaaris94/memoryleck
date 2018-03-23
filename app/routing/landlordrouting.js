// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

var path = require("path");

// ROUTING

module.exports = function (app) {

        // HTML GET Requests
        // Below code handles when users "visit" a page.
        // In each of the below cases the user is shown an HTML page of content

        //    Get request to landlord login page.
        app.get("/landlogin", function (req, res) {

            res.sendFile(path.join(__dirname, "../routing/landlord/landlordLogin.html"));
        });

        //    Get request to my props page.
        app.get("/props", function (req, res) {

            res.sendFile(path.join(_dirname, "../routing/landlord/myprops.html"));
        });

        //    Get request to addprops page.
        app.get("/add", function (req, res) {


            res.sendFile(path.join(_dirname, "../routing/landlord/addprops.html"));
        });

        //    Get request to payments page.
        app.get("/pay", function (req, res) {

            res.sendFile(path.join(_dirname, "../routing/landlord/payments.html"));
        });

        //    Get request to addmainreq  page.
        app.get("/request", function (req, res) {

            res.sendFile(path.join(_dirname, "../routing/landlord/addmainreq.html.html"));
        });

    };