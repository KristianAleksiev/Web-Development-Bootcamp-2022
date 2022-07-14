 // In JSX, the inline styling is given as JS Object

 import React from "react";
 import ReactDOM from "react-dom";

 const customStyle = {
   color: "red",
   fontSize: "20px",
   border: "1px solid black"
 }

customStyle.color = "blue"; // <-- Dynamic changing, 

 ReactDOM.render(<h1 style={ customStyle }>Hello World!</h1>, // <------
  document.getElementById("root"));


// React documentantion suggests we don't use inline styling, exept triggering an event
