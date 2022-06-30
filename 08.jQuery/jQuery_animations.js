// Hides an element on click event
$("button").on("click", function(){
  $("h1").hide();
});

// Shows an element on a click event
$("button").on("click", function(){
  $("h1").show();
});

// Toggle
$("button").on("click", function(){
  $("h1").toggle(); // Instanteniously hiding and showing
});

// Progressive fade and appear
$("button").on("click", function(){
  $("h1").fadeOut();
});

$("button").on("click", function(){
  $("h1").fadeIn();
});

// Progressive toggle
$("button").on("click", function(){
  $("h1").fadeToggle();
});

// Collapsing up and down
$("button").on("click", function(){
  $("h1").slideUp();
});

$("button").on("click", function(){
  $("h1").slideDown();
});

// Toggle collapsing
$("button").on("click", function(){
  $("h1").slideToggle();
});

// Using custom CSS
$("button").on("click", function(){
  $("h1").animate({opacity: 0.5}); // CSS rules that have a numeric value
});

// More than one jQuery methods to a single element (in order)
$("button").on("click", function(){
  $("h1").slideUp().slideDown().aniumate({opacity: 0.5});
});
