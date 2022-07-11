.patch(function(req, res) {
  Article.update(
    {title: req.params.articleTitle}, // BodyParser parsing the request as JS object, condition
    {$set: {req.body}}
  )
})
