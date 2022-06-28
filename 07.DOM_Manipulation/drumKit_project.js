
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

  // Which button triggered the event - Switch expression
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

});
}

//Detecting keyboard press
        //Higher order function
document.addEventListener("keydown", function(event){//callback function
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

      case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonInnerHTML); // What triggered the default
  }
};

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  // After a delay remove the class (css styling)
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);// time interval in ms

}
