var bellBoy1 = {
  name: "Timmy",
  age: 19,
  workPermit: true,
  languages: ["English", "French"]
}


var houseKeeper = {
  yearsExperience: 12,
  name: "Jane",
  cleaning: ["Bathroom", "Lobby", "Bedrooms"],
  workPermit: true
}
console.log(houseKeeper);
console.log(houseKeeper.name);

//House keeper factory (constructor (__init__))
function HouseKeeper (name, age, cleaning, workPermit){
  this.name = name;
  this.age = age;
  this.cleaning = cleaning;
  this.workPermit = workPermit;
}
// Initialising an object in JavaScript
var houseKeeper1 = new HouseKeeper("Tina", 25, ["Bathroom", "Lobby", "Bedrooms"], true);
var houseKeeper2 = new HouseKeeper("Gergana", 22, ["Bathroom", "Lobby", "Bedrooms"], true);
var houseKeeper3 = new HouseKeeper("Dimitrina", 42, ["Bathroom", "Lobby", "Bedrooms"], true);
