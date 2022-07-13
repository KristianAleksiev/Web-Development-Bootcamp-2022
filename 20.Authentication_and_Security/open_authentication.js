// Level 6 security
// Log with Google account
// OAuth - Open Authorisation
// 1. Granular access level - request specific things from the big company's data for the user
// 2. Read/Read + Write access
// 3. Revoke access on their website

// Steps:
// Setting it up - Their developer console so we can get app ID, client ID
// Redirecting to the actual site for authentication
// User grants permission
// Authorisation code received from the site(google), exchange code for access token
npm install passport-google-oauth20
// console.developers.google.com

var GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);

    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
