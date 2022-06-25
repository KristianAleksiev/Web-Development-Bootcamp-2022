document.getElementById("title").innerHTML = "Good bye!"; // The value of inner html (includes <strong> etc)
// All the html between the HTML tags
// Using innerHTML provides html element manipulation in for of (<strong><em>) etc, added in the string for change

document.getElementById("title").textContent = "Good bye!"; // Gives only the text between open and close tag
