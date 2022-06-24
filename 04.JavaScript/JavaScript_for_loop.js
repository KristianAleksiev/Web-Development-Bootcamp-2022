// for (var i = 0; i < 2; i++){
//    code block
// }
var output = [];

function fizz(){

  for(var count = 1; count < 100; count ++; ){
    if (count % 3 === 0 && count % 5 === 0){
      output.push("FizzBuzz");
    }else if (count % 3 === 0) {
      output.push("Fizz");
    }else if (count % 5 === 0) {
      output.push("Buzz");
    }else{
      output.push(count);
    }

    console.log(output);
  }
}
