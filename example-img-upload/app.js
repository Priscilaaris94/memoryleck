const express = require('express');
const multer = require('multer');
const upload = multer({
  dest: 'uploads/' // this saves your file into a directory called "uploads"
}); 

const app = express();


/* 
This section of code below just provides a route to the page where we want to do our image upload
We would replace this route with the route for the property manager's "Add Property Page"
"index.html is a placeholder for the ""Add Property Page"
Of course the index.html or rather "Add Property Page" could be templated
*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');  //This just sends the index.html file when the browser loads the root url
});


/* 
This section of code uses the POST method to upload a single file to the server
It will land in the uploads folder.
Multer will create the uploads folder in the server root folder if it does not exist.
File will be automatically renamed.
The file name ('file-to-upload') must match the name attribute in your html input element
*/

app.post('/', upload.single('file-to-upload'), (req, res) => {
  //at this point the file is already uploaded to the "uploads" folder
  //everything else inside this code block is just logic for what we want to do after the user submits the image
  //in this example we will just reload the page with a redirect
  res.redirect('/'); //this redirect just reloads the page. We can do whatever we want in response to the upload.
});


//urn on the server app to listen on port 3000
app.listen(3000);