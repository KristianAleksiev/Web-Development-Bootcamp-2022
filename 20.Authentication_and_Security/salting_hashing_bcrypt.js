// Level 4 Security

// Password + Random set of characters(Salting) -> Hash Function -> Hash
// Even with same user passwords - Different hashes, because of the salt

// bcrypt -> from 20 billion MD5 Hashesh/sec, 17k bcrypt Hashes/sec
// bcrypt Salt Rounds

// Implementing bcrypt and round salting
npm i bcrypt
// Fixing node version - nvm install Version
// Installing older version of bcrypt
npm i bcrypt@version wanted

// Using bcrypt
const bcrypt = require("bcrypt");
const saltRound = 10;



app.post("/register", function(req, res){
  bcrypt.hash(req.body.password, saltRounds, function(err, hash){
  const newUser = new User({
    email: req.body.username,
    password: hash
      });
    newUser.Save(function(err){
      if (err){
        console.log(err);
      }else{
        res.render("secrets");
      }
    });
  });
});

// Comparing the passwords after bcrypt hashing with salting
app.post("/login", function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({email: username}, function(err, foundUser){
    if (err){
      console.log(err);
    } else {
      if (foundUser){
        bcrypt.compare(password, foundUser.password, function(err, result){ // <===========================
          if (result === true){
            res.render("secrets")
          }
        });
      }
    }
  });
});
