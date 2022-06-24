// var n = Math.random(); //Pseudo Random decimal number between - 0 and 1
// n = Math.floor(n * 6) + 1; //1 to 6
// console.log(n);

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;

loveScore = Math.floor(loveScore) + 1;
if (loveScore > 70){
  alert("Your love score is: " + loveScore + "%" + ". That's great!");
}else if (loveScore > 40){
  alert("Your love score is: " + loveScore + "%" + ". You are very compatible");
}else{
  alert("Your love score is: " + loveScore + "%" + ". Not a great match");
}
