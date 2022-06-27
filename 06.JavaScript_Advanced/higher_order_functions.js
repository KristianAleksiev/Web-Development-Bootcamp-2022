$0.addEventListener("click", respondToClick);

function respondToClick(){
  console.log("I got clicked");
}

function add(num1, num2){
  return num1 + num2
}
function multiply(num1, num2){
  return num1 * num2
}

function calculator(num1, num2, operatorFunc){
  return operatorFunc(num1, num2)
}

calculator(4, 5, add);
calculator(4, 5, multiply);
// Debuf in dev tools
debugger; //Shift enter
calculator(4, 5, multiply);

// Higher order functions are functions that can take other functions as inputs.
