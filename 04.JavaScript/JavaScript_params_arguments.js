function getCoffee(bags){
  var cost = bags * 1.5;
  console.log("Buy " + bags + " bags of coffee");
  console.log("Price is: " + cost);
}
getCoffee(5);


function lifeInWeeks(age){

  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log("You have " + days + "days" + weeks + " weeks, and " + months + " months left.");
}
lifeInWeeks(12);
