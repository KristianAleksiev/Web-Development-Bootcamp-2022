app.route("/article")
  .get(function (req, res) {
    res.send("Get a random article")
  })
  .post(function (req, res) {
    res.send("Add an article")
  })
  .put(function (req, res) {
    res.send("Update an article")
  })
