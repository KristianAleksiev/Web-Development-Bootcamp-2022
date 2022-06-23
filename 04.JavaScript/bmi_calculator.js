function bodyMassIndex(weight, height){
  var bmi = weight / height * height;
  return Math.round(bmi);
}

var wght = prompt("What is your weight in kilograms? ");
var hgt = prompt("What is your height in cm? ");

console.log(bodyMassIndex(wght, hgt));
