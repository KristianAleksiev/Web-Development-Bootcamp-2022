// JavaSCript event listeners


document.querySelector("button").addEventListener("event as string", function);
//Not calling the method straight away, without (), passing the function as an input, triggers the function when event occurs OR:

document.querySelector("button").addEventListener("event as string", function(){
  //What to execute, text block
});
// Second way, using anonymous function call

//events

//mouse click
//mouse doubleclick
//keydown
addEventListener("keydown", function(){
  alert("Key was pressed")
});
