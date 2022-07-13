// Passport.js for adding cookies and sessions, authentication
npm install passport passport-local passport-local-mongoose express-session

const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");


// After app.use bodyparser
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize()); // Set up passport for authentication
app.use(passport.session()); // Dealing with the session

// userSchema
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());
// serialise, deserialise (create, break cookie)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", function(req, res){
  res.render("home");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.get("/secrets", function(req, res) {
  if (req.isAuthenticated()){
    res.render("secrets");
  }else{
    res.redirect("/login");
  }
});

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

app.get("/login", function(req, res){
  res.render("login");
});

app.post("/register", function(req, res){
  User.register({usernbame: req.body.username}, req.body.password, function(err, user) {
    if (err){
      console.log(err);
      res.redirect("/register")
    }else{
      passport.authenticate("local")(req, res, function() {
      res.redirect("/secrets");
    });
    }
  })
});

app.post("/login", function(req, res){
  const user = new User({
    username: req.body.username,
    password: req.body.password
  })
  // passport login() function on request
  req.login(user, function(err){
    if (err){
      console.log(err);
    }else{
      passport.authenticate("local")(req, res, function() {
      res.redirect("/secrets");
      });
    }
  })
});
