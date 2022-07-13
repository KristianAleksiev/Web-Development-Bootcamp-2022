const secret = "Thisisourlittlesecret.";
// Using environmental variables to keep our secrets safe
// app js key protection
npm install dotenv
require("dotenv").config(); // At the top of the app js file, without const
// 1. Create .env file in the root of the project
// 2. In .env file add specific env variables like:
// SECRET=Thisisourlittlesecret. - No spaces, capitalised var name, no ""
// API_KEY=fasdajksdfasdfasdfa
// 3. Tap the env variables
console.log(process.env.API_KEY);

userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]});
// 4. Git commiting the project files without the .env, gitignore
// 5. Fixing the version control if there is an earlier push
// 6. Deploying with Heroku and fixing the env variables
