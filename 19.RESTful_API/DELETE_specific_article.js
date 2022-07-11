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
  )
});
