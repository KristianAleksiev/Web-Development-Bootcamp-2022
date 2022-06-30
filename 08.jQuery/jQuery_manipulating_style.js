$("h1").css("color", "green");
//Select CSS selector, change its css property and give it a value

// Getting the current value of the property
$("h1").css("color"); // RGB
console.log($("h1").css("font-size"));


//Inside stylesheet

// .big-title{
//   font-size: 10rem;
//   color: yellow;
//   font-family: cursive;
// }

// .mmargin-50{
//   margin: 50px;
// }


// Manipulating it with jQuery
$("h1").addClass("big-title"); // Style vs behavior
$("h1").removeClass("big-title");

// Adding or removing multiple classes
$("h1").addClass("big-title margin-50");

// Check if element has a particular class
$("h1").hasClass("margin-50"); //Boolean
