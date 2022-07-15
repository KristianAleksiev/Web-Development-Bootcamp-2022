// HTML to JSX -> camelcased accepted
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite foods</h1> // JSX Attributes, not HTML
    <ul>
      <li>Meatballs</li>
      <li>Steak</li>
      <li>Pasta</li>
    </ul>
  </div>,
  document.getElementById("root")
);


// Styling React Elements
import React from "react";
import ReactDOM from "react-dom";

// Random pictures generator - picsum.photos
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite foods</h1> // JSX Attributes, not HTML
    <div>
    <img src={img + "?grayscale"} />
    <img
      className="food-img"
      alt="bacon"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"/>
    <img
      className="food-img"
      alt="jamon"
      src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"/> //<--
    <img
      className="food-img"
      alt="noodles"
      src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"/> //<-- Self closing in JSX mandatory
        // Need to become 100x100
    </div>
  </div>,
  document.getElementById("root")
);