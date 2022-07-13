//  Level 1 Security
app.post("/login", function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({email: username}, function(err, foundUser){
    if (err){
      console.log(err);
    } else {
      if (foundUser){
        if (foundUser.password === password){
          res.render("secrets")
        }
      }
    }
  });
});


// Details about the log are written in the Database as just text!!
// Database NOT encrypted still
