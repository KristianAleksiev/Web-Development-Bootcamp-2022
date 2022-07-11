app.get("/articles", function(req, res) {

    Article.find(function (err, foundArticles) {
      if (!err){
        res.send(foundArticles);
      }else{
        res.send(err);
      }

    });
});
