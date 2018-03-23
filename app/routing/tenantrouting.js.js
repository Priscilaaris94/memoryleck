// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

var path = require("path");

// ROUTING

module.exports = function (app) {

    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content

    //GET request that displays mainpages.

    app.get("/Allprops", function (req, res) {

        res.sendFile(path.join(__dirname, "../routing/mainpage/Allprops.html"));
    });

    //   GET request that display props pages.

    app.get("/prop", function (req, res) {

        res.sendFile(path.join(_dirname, "../routing/mainpage/prop.html"));
    });

    // GET request that displays tenant login page.

    app.get("/login", function (req, res) {

        res.sendFile(path.join(_dirname, "../routing/tenant/tenatLogin.html"));
    });

    // GET request that displays tenant dash.

    app.get("/dash", function (req, res) {

        res.sendFile(path.join(_dirname, "../routing/tenant/tenatdash.html"));
    });

    // GET request that displays main req.

    app.get("/addreq", function (req, res) {

        res.sendFile(path.join(__dirname, "../routing/tenant/addedmainreq.html"));
    });

    // GET request that displays main req.

    app.get("/addpay", function (req, res) {

        res.sendFile(path.join(_dirname, "../routing/tenant/addedpayment.html"));
    });


    // If no matching route is found default to home page.

    app.get("/", function (req, res) {

        res.sendFile(path.join(__dirname, "../routing/mainpage/Allprops.html"));

    });

};