const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
// model, collection
const Fruit = mongoose.model('Fruit' , { name: String,
  age: Number,
  height: Number,
 });
//Object
const fruit = new Fruit({
   name: 'Zildjian',
   age: 35,
   height: 185,
 });
fruit.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "Best fruit"
})
const orange = new Fruit({
  name:"Orange",
  score: 9,
  review:"Sweet and delicious",
})
Fruit.insertMany([kiwi, orange], function(err){
  if (err){
    console.log(err)
  }else {
    console.log("Succesfully saved all the fruits to fruitsDB")
  }
});
db.fruits.find();
// Reading
Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  }else {
    fruits.forEach(function(eachObject){
      console.log(eachObject.name);
    })
  }
});
// Closing the connection
mongoose.connection.close()


// Create a new DB
// Create a new Schema for the DB
// Create a new Model from the fruitSchema
// Create a new object
// Save
