// Level 2 Security
// cryptii.com

// npm i mongoose-encryption, AES encryption algo, authenticate as well
const encrypt = require("mongoose-encryption");

// Modify the Mongoose Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const secret = "Thisisourlittlesecret.";
userSchema.plugin(encrypt, {secret: secret}); //Encrypts the entire database, change option
userSchema.plugin(encrypt, {secret: secret, encryptedFields: ["password"]}); // Encrypts only the password field
// When called .save() ENCRYPTS (binary string), when call .find() DECRYPTS
