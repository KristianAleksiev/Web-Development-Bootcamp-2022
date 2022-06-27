function HouseKeeper (name, age, cleaning, workPermit){
  this.name = name;
  this.age = age;
  this.cleaning = cleaning;
  this.workPermit = workPermit;
  this.cleanDust: function(){
    alert("Which room would you like me to dust?")
    pickUpDuster();
  }
  this.vacuumClean: function(){
    alert("Vacuum cleaning in progress..");
    pickUpVacuumCleaner();
  }

}
var houseKeeper1 = new HouseKeeper("Gina", "25", ["Bathroom", "Living room"], true);
houseKeeper1.cleanDust();
houseKeeper1.vacuumClean();
