//jshint esversion:6
const express = require("express");
const app = express(); // Referring the express module
      //ROUTE
app.get("/", function(request, response){// tells the server what to do when the callback is triggered
  response.send("<h1>Hello world!</h1>");
}); //root

app.get("/contact", function(request, response){
  response.send("Contact me at: mail@abv.bg");
});
app.get("/about", function(request, response){
  response.send("My name is Kristian Aleksiev, I am a programming student.");
});
app.get("/hobbies", function(requst, response){
  response.send("I like reading scientific literature")
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
}); // Listening for request to our server through a port(channel)
//Cannot get error - ATM cannot get anything back - Request/response
