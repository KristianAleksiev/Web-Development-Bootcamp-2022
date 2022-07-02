// Running a server with express
npm init
npm install express // adds express in dependencies

//Initialising express framework
//jshint esversion:6
const express = require("express");
const app = express(); // Referring the express module


// What should happen when the browser gets in touch with my server, get request
app.get("/"); // root

app.get("/", function(req, res){// tells the server what to do when the callback is triggered
  response.send("Hello");
});

// Another page request
app.get("/contact", function(request, response){
  response.send("Contact me at: mail@abv.bg");
});


// Nodemon
npm install -g nodemon
npm i pstree.remy@1.1.0 -D


// Responding with HTML files
res.sendFile(__dirname + "/index.html");

// Processing POST requests
// npm package - body parser - Access to properties and variables
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); // .text() .json() .urlencoded()
req.body // Getting the form data


// Structured
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");

});
app.post("/bmiCalculator",function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmiResult = weight / (height * height);
  res.send("Your BMI is: " + bmiResult);
});

nodemon filename //- Checks for changes in the ran file, updates the server


// Static folder, files (css, imgs etc)
app.use(express.static("public")); // Location relative to the public folder
