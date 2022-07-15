// Put out the html in a function, inject with self closing tag
import React from "react";
import ReactDOM from "react-dom";
import App from ".components_/App";
// import Heading from "./Heading.jsx"
// import List from "./List.jsx"
// function Heading() { // <---------
//   return <h1>My Favourite Foods</h1>;
// }

ReactDOM.render(
  <div>
    <Heading />// <---------
    <List />
  </div>,
  document.getElementById("root")
);
// Or import the function from file "Heading.jsx"

// Files connected - List.jsx, Heading.jsx, App.jsx

// Transfering everything to App.jsx, end file source
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
