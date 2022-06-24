function fibonacciSequence(number) {
  var output = [];
  if (number === 1){
    output = [0];

  }else if (number === 2) {
    output = [0, 1];
  }else {
    output[0, 1];
    for (var i = 2; i < number; i++){
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output
}

console.log(fibonacciSequence(12));
