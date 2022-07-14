import React from "react";
import ReactDOM from "react-dom";

const name = "Kristian";
const luckyNumber = 27;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>My lucky number is {luckyNumber}!</p>
  </div>,
  document.getElementById("root")
);

// Also possible:
    // <p>My lucky number is {5 + 17}!</p>
    // <p>My lucky number is {Math.floor(Math.random() * 10)}!</p>
    // Statements not permitted! - if(.....), but expressions are(easy evaluation)


const firstName = "Kristian";
const lastName = "Aleksiev";
    <h1>Hello {firstName + " " + lastName}!</h1>
    <h1>Hello {firstName} {lastName}!</h1> // Also viable
    <h1>Hello {`${firstName} ${lastName}`}!</h1> //- Template literal
