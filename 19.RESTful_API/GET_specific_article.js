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
});


// For an article with space - %20 - Jack%20Bauer
