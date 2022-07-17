import React from "react";
import ReactDOM from "react-dom";

var isLoggedIn = true;

function renderConditionally() {
  if (isLoggedIn === true){
    return <h1>Hello</h1>
  } else {
    return (
      <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      </form>
    );
  }
}

function App() {
  return <div className="container">;
  {renderConditionally()}
  </div>
}

export default App;

// Single responsibility principle
// Extract the HTML into different components Login, Input(change the second type, props)
// Ternary operator
// CONDITION ? DO IF TRUE : DO IF FALSE
isCloudy === true ? bringUmbrella() : bringSunscreen();
// Used for making a statement into expression

isLoggedIn === true ? <h1>Hello</h1> : <Login />
isLoggedIn ? <h1>Hello</h1> : <Login />
//  && in React
