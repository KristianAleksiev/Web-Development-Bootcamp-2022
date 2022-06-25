//Manipulation of elements as objects
//HTML Tree generator plugin


document.firstElementChild;
document.firstElementChild.firstElementChild;
document.firstElementChild.lastElementChild;

var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML = "Good bye";
heading.style.color = "red";

document.querySelector("input").click();
// Properties and methods

heading.color // - Gets the current value of the property
heading.style.color = "red"; // - Asigning a value to a property

//Calling a method on an object - Associated with the object



//Challenge - Change the value of the third list item to your name:
document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Kristian";
