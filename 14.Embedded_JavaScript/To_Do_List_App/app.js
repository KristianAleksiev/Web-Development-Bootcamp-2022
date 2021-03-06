const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
var items = [];

app.set("view engine", "ejs"); // Setting the EJS, creating views folder
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  let day = date();
//   var currentDay = today.getDay();
//   var day = "";
//
// switch (currentDay) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//   console.log("Error in code")



  res.render("list", {
    kindOfDay: day,
    newListItems: items

  });

  app.post("/", function(req, res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
  })

});




app.listen(3000, function(){
  console.log("Server started on port 3000");
});
