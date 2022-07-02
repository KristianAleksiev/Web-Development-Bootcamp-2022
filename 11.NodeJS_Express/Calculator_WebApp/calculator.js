//jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); // .text() .json() .urlencoded()


app.get("/", function(req, res){
  // res.send("Hello world!"); // Individual piece of data
  // res.sendFile("index.html");// Relative file path
  res.sendFile(__dirname + "/index.html"); // Absolute
});

app.post("/", function(req, res){
  var num1 = Number(req.body.n1); // Name attribute of the HTML element
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("The result of the calculation is: " + result);
});
//BMI calculator page
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");

});
app.post("/bmiCalculator",function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmiResult = weight / (height * height);
  res.send("Your BMI is: " + Math.round(bmiResult));
});


app.listen(3000, function(){
  console.log("Server running on port 3000");
});
