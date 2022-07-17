const animals = [
  {name: "cat", sound: "meow", feedingReq{
    food: 2,
    water: 3
  }},
  {name: "dog", sound: "woof"}
  }
];
const [cat, dog] = animals;
// var cat = animals[0];
console.log(cat);

// Destructuring an object
const {name, sound} = cat; // Same as keys or
const {name: catName, sound: catSound} = cat; // Alternative name


// Destructuring nested objects
const {name, sound, feedingReq: {food, water}} = cat;
console.log(food);
