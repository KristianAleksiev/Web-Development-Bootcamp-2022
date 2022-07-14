// var React = require("react");
// var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";


ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW, CALLBACK):
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));


// JSX - React extension - Inserting HTML into JS and insert JS inside the inserted HTML


// Babel - JavaScript compiler
// Render accepts only one HTML element! (div)

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
