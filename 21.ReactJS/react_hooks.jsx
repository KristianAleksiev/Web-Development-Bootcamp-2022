import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div className="container">
  <h1>0</h1>
  <button>+</button>
  </div>,
  document.getElementById("root")
);

// button pressed, h1 render +1

function increase() {
  count ++;
  console.log("I got clicked");
}

var count = 0;
ReactDOM.render(
  <div className="container">
  <h1>{count}</h1>
  <button onClick={increase}>+</button> //<------------------------
  </div>,
  document.getElementById("root")
);
// Needs to rerender, one way is to call reactDOM re-render in the increase function

// Use hooks, inside functional component from App
function App(){
  const state = React.useState(123); //123 - Starting state
  console.log(state[0])
  }
  return (
    <div className="container">
    <h1>{state[0]}</h1> //<----------------
    <button onClick={increase}>+</button> //<------------------------
    </div>,
    document.getElementById("root")
  );
}

// DESTRUCTURING

const [red, green, blue] = [9, 137, 205]

const [count, setCount] = React.useState(34223);
<h1>{count}</h1>
function increase(setCount) {
    setCount(12);
}


// Completed example
function App(){
  const [count, setCount] = React.useState(0); //Array

  function increase(setCount) {
      setCount(count + 1);
  }
  return (
    <div className="container">
    <h1>{count}</h1> //<----------------
    <button onClick={increase}>+</button> //<------------------------
    </div>,
  );
}
