function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  // After a delay remove the class (css styling)
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);// time interval in ms

}
