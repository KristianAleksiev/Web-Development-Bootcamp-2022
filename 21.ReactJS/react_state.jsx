UI = f(State)
// The user interface is a function of the state (water 100, -20 degrees C)

// Switching the state, switches the appearence in the Interface

import React from "react";
// Declarative programming - Dependend upon State
function App() {
  var isDone = false;
  const strikeThrough = {textDecoration: "line-through"};

  return <p style={isDone && strikeThrough}>Buy milk</p>
}

export default App;

// Imperative programming - Telling the element to do something
document.getElementById("root").style.textDecoration = "line-through";
