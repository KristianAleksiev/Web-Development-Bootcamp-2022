const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});


app.post("/", function(req, res){
  const query = req.body.cityName;
  const apiKey = "e72ca729af228beabd5d20e3b7749713";
  const units = "metric";
  const apiUrl = "https://www.api.openweathermap.org/data/2.5/weather?q=" + query +"&appid="+ apiKey +"&units=" + units;


  https.get(apiUrl, function(urlResponse){
  // console.log(response.responseCode);  200, 404, 401 proper api auth
    urlResponse.on("data", function(data){// When data is received
      // console.log(data); // Hexadecimal code
    const weatherData = JSON.parse(data);
    // console.log(JSON.stringify(object)) The other way arround
    const temp = weatherData.main.temp
    const weatherDescription = weatherData.weather[0].description
    const icon = weatherData.weather[0].icon
    const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

    res.write("<h2>The weather is currently " + weatherDescription + "</h2>");
    res.write("<h1>The temperature in " + query + " is: " + temp + " degrees Celcius.</h1>");
    res.write("<img src=" + imageUrl ">");
    res.send() // Only 1 send method
  });
});
});

app.listen(3000, function(){
  console.log("Server is up on port 3000");
});
