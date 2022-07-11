// Replaces the whole element 
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
});
