function add(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber){
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
  return firstNumber / secondNumber;
}

function calculator(firstNumber, secondNumber, operation){
  return operation(firstNumber, secondNumber);
}
