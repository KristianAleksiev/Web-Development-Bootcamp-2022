//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite foods</h1>
    <ul>
      <li>Meatballs</li>
      <li>Steak</li>
      <li>Pasta</li>
    </ul>
  </div>,
  document.getElementById("root")
);

// In css file:
// .heading{
//   color: red;
// }

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite foods</h1> // <<<----------------className, camelcase
    <ul>
      <li>Meatballs</li>
      <li>Steak</li>
      <li>Pasta</li>
    </ul>
  </div>,
  document.getElementById("root")
);
// In the HTML file change <script> attribute "type" - text/JSX
