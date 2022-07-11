const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});
// Schema created
const articleSchema = {
  title: String,
  content: String
};
// Create Model
const Article = mongoose.model("Article", articleSchema);



// Requests targeting all articles
app.route("/articles")
.get(function(req, res) {

    Article.find(function (err, foundArticles) {
      if (!err){
        res.send(foundArticles);
      }else{
        res.send(err);
    }
  });
})

.post(function (req, res) {// POST Request - Create a new article

    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });

    newArticle.save(function (err) {
      if (!err){
        console.log("Succesfully added a new article!");
      }else {
        console.log(err);
      };
    });
});

// .delete(function(req, res){// DELETE Request - All articles
//   Article.deleteMany(function(err) {  // Model.deleteMany, One() etc
//   if (!err){
//     res.send("Succesfully deleted every single article!");
//   }else{
//     res.send(err);
//     }
//   })
// });

// Requests targeting a specific article
app.route("/articles/:articleTitle")

.get(function(req, res){
  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle) {
    if (foundArticle){
      res.send("Article found");
    }else{
      res.send("No articles found matching that name!")
    }
  });
})

.put(function(req, res) {
  Article.update(
    {title: req.params.articleTitle}, //Filter
    {title: req.body.title, content: request.body.content},
    {overwrite: true}, //Mongoose default overwrite false
    function (err) {
      if (!err){
      res.send("Successfully updated article!")
      }else {
      res.send("")
      }
    }
  );
})

.patch(function(req, res) {
  Article.update(
    {title: req.params.articleTitle},
    {$set: req.body},
    function(err) {
      if (!err){
        res.send("Successfully updated article.");
      }else {
        res.send(err);
      }
    }
  );
})

.delete(function(req, res) {
  Article.deleteOne(
    {title: req.params.articleTitle},
    function(err) {
      if (!err){
        res.send("Successfully deleted article!");
      }else {
        res.send(err);
      }
    }
  );
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
