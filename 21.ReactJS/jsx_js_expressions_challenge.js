//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.

import React from "react";
import ReactDOM from "react-dom";


const firstName = "Kristian";
const lastName = "Aleksiev";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {firstName} {lastName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
