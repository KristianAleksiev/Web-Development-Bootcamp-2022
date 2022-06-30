$("h1").click(function(){
  $("h1").css("color", "green");
});

// Vanilla JavaScript "Click" event
 for(var i = 0; i<5; i++){
   document.querySelectorAll("button")[i].addEventListener("click", function(){
     document.querySelectorAll("h1").style.color = "green";
   });
 }
 // Doing the same with jQuery
$("button").click(function(){
  $("h1").css("color", "green");
})

// Event Keydown(keypress) with jQuery
$("input").keypress(function(event){//$("document")
  console.log(event.key);
})
// Change the heading text with the pressed key
$("input").keypress(function(event){//$(document)
  $("h1").text(event.key);
})

// Any event listed in the DOM events
$("h1").on("mouseover", function(){
  $("h1").css("color", "purple");
})
