import React from "react";
import ReactDOM from "react-dom";

import defaultpi, {doublePi, triplePi} from "./math.js";
// Default export naming does not matter, the optional export names do. OR
import * as pifile from "./math.js";
// Accessing pifile.doublePi; pyfile.pi, pyfile.triplePi
ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi}</li>
    <li>{triplePi}</li>
  </ul>,
  document.getElementById("root") 
);

// In module from which the export is made
export default pi;
export {doublePi, triplePi};


// Node.js require vs ES6 import(80% user render format)

// Import/export challenge:
import {add, multiply, subtract, divide} from "./calculator.js";
