document.getElementsByTagName("li"); // By tag -> Returns array, needed specification
document.getElementsByTagName("li")[2].style.color = "red"; // Built functions can be used

document.getElementsById("list").innerHTML = "Good bye!"; // Could be manipulated directly -> ID
document.getElementsByClassName("btn");

// Query selector - single item
document.querySelector("#id, .class or tag")

// Combining query selectors
document.querySelector("li a"); //- > Select the anchor inside the li element
document.querySelector("li.item"); // Select the list item with class "item"
document.querySelector("#list a");

document.querySelector("#list .item"); // Selects the first with that condition
document.querySelectorAll("#list .item"); // Selects all the elements with that condition (Array)
