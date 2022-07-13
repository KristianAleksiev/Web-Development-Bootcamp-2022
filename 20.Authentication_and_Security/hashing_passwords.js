// Level 3 security
// Encryption key hacking danger
// Password -> Hash Function -> Hash (Almost impossible to turn it back to a password)
// In order to log In, the entered password is hashed again and the hashes are compared to each other
npm install md5
const md5 = require("md5");

app.post("/register", function(req, res){
  const newUser = new User({
    email: req.body.username,
    password: md5(req.body.password)// Password of 123456 -> e10adc3949ba59abbe56e057f20f993e
  });
});

// Fixing the login step:
// -Compare the hashes when user tries to log in
app.post("/login", function(req, res){
  const username = req.body.username;
  const password = md5(req.body.password); // <===================

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
