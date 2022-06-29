console.log("Hello world!")
//jshint esversion:6
const fs = require("fs");
fs.copyFileSync("file1.txt", "file2.txt");// Look in current directory, copy it to file2.txt
