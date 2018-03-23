const express = require('express');
const multer = require('multer');
const upload = multer({
  dest: 'uploads/' // this configures multer to save your files into a directory called "uploads"
}); 

const app = express();


/* 
This section of code below just provides a route to the page where we want to do our image upload
We would replace this route with the route for the property manager's "Add Property Page"
"index.html" is a placeholder for the "Add Property Page"
Of course the index.html or rather "Add Property Page" could be templated

NOTE: THIS "GET" ROUTE IS ONLY HERE TO MAKE MY DEMO WORK. IN OUR APP THERE WOULD BE A ROUTE FOR THE "ADD PROPERTY PAGE" AND IT
WOULD DO WHATEVER ELSE WE NEED WHEN WE SERVE THAT PAGE

*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index-test1.html');  //This just sends the index.html file when the browser loads the root url
});


/* 
This section of code uses the POST method to upload a single file to the server
It will land in the uploads folder.
Multer will create the uploads folder in the server root folder if it does not exist.
File will be automatically renamed.
The file name ('file-to-upload') must match the name attribute in your html input element
*/

app.post('/bob', upload.single('file-to-upload'), (req, res) => {
  //at this point the file is already uploaded to the "uploads" folder
  //everything else inside this code block is just callback logic for what we want to do after the user submits the image

  //we should grab the filename that multer created for this upload, and store the filename and path in the database
  //see bottom of this code for an example logging of the req.file object
  var relPathAndFilename = req.file.path;
  //console.log("req.file.path:", relPathAndFilename); //just logging the relative path to see what it looks like
  console.log(req.body);

  //in this demo we will just reload the page with a redirect
  //in the real app, the relPathAndFilename should be stored in the db and associated with a property id
  res.redirect('/'); //this redirect just reloads the page. We can do whatever we want in response to the upload.
  
});


//Turn on the server app to listen on port 3000
app.listen(3000);




/*
Example logging of the req.file object

{ fieldname: 'file-to-upload',
  originalname: 'pic2.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'uploads/',
  filename: 'da902e0505e597dfc721ad5183114424',
  path: 'uploads\\da902e0505e597dfc721ad5183114424',
  size: 408680 }

*/