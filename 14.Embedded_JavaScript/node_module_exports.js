module.exports.getDate = getDate;

function getDate(){
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
};

// When more that 1 function is exported (Object)
module.exports.getDay = getDay;
function getDay(){
  let today = new Date();

  let options = {
    weekday: "long",

  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
};


// in main.js
const date = require(__dirname + "/date.js");
// Then call it - date() where required
