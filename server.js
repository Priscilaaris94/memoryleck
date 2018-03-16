var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/app')); 


// ROUTER

// The below points our server to a series of "route" files.

// These routes give our server a "map" of how to respond when users visit or request data from various URLs.



// Starts the server to begin listening

app.listen(PORT, function() {

  console.log("Listing to this port" + PORT);
});