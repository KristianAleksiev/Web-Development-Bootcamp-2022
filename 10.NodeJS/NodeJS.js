// Backend with JavaScript, super fast

// Beyond the browser, in the user's computer, accessing files, interacting with user's computer
// Allows us using JavaScript to interact with the hardware of a computer
// Executing code on the server side using NodeJS, manipulating data


// Command line with node
node fileName.js // Run directly from Hyper

// Read Evaluation Print Loop
node
ctrl + c, .exit // Exiting the Node REPL


// Native node modules

//jshint esversion:6
const fs = require("fs");
fs.copyFileSync("file1.txt", "file2.txt");

//NPM(Node package manager) Manager, external libraries
npm init
npm install superheroes
