const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // Providing a path of static files, css, imgs

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const data ={
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };
  const jsonData = JSON.stringify(data);
  const apiKey = "c14afa9c9d5aec3becec84afaa64c151-us4";
  const options = {
    method: "POST",
    auth: "Kris:c14afa9c9d5aec3becec84afaa64c151-us4"
  }
  const url = "https://us4.api.mailchimp.com/.3.0/lists/7b80f67abe"

  const request = https.request(url, options, function(response){
    if (response.statusCode === 200){
      res.sendFile(__dirname + "/success.html")
    }else{
      res.sendFile(__dirname + "/failure.html")
    }

    response.on("data", function(data){
      console.log(JSON.parse(data))
    });
  });
  request.write(jsonData);
  request.end();
  app.post("/failure", function(req, res){
    res.redirect("/")
  });
});

app.listen(process.env.PORT || 3000, function(){ // Dynamic port for Heroku system and locally
  console.log("Server running on port 3000")
});

// apiKey = "c14afa9c9d5aec3becec84afaa64c151-us4"
