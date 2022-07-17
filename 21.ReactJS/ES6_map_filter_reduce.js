let numbers = [3, 56, 2, 48, 5];

// Map function - Loop through array, create a new array by doing something with each item
function double(x){
  return x * 2;
}
const newNumbers = numbers.map(double)
console.log(newNumbers);

// the old way:
var newNumbers = [];
function double(x){
  newNumbers.push(x * 2);
}
numbers.forEach(double);
console.log(newNumbers)

// Filter function - keeping the items, that return true
const newNumbers = numbers.filter(function(num) {
  return num > 10  
});

// Reduce function - Doing something to each of the item in an array
let newNumber = numbers.reduce(function (accumulator, currNumber){
  return accumulator + currNumber
})

// Find function - Find the first item that matches from an array
numbers.find(function (num){
  return num > 10; // Stops as soon as an element is found by a criteria
})

// Find index - Find the index of the first item that matches
numbers.findIndex(function (num){
  return num > 10;
})
