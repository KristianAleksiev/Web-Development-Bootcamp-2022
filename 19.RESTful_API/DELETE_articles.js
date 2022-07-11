// DELETE Request - All articles
app.delete("/articles", function (req, res) {
  Article.deleteMany(function(err){
    if (!err){
      res.send("Succesfully deleted every single article!");
    }else{
      res.send(err);
    }
  });
});
