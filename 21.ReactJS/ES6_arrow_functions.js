let numbers = [3, 56, 2, 48, 5];

// Annonymous
const newNumbers = numbers.map(function (x) {
  return x * x;
})

// Arrow
const newNumbers = numbers.map(x =>{
  return x * x
});
// Inline arrow with 1 param only, 1 line code in return statement
const newNumbers = numbers.map(x => x * x);

// Exercise 1
const newNumbers = numbers.map(function(x){
  return x * 2;
})

const newNumbers = numbers.map( x => x* 2);

// Exercise 2
const newNumbers = numbers.filter(function (num) {
  return num < 10;
});

const newNumbers = numbers.filter(num => num < 10);

// Exercise 3
const newNumbers = numbers.reduce(function (accumulator, currNumber) {
  return accumulator + currNumber;
});

const newNumbers = numbers.reduce((accumulator, currNumber) => accumulator + currNumber);
