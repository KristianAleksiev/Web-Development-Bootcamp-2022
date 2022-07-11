// POST Request - Create a new article
app.post("/articles", function (req, res) {

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
