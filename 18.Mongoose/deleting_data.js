Model.deleteOne({name: "Peach"}, function (err) {
  if (err){
    console.log("Error in deletion");
  }else {
    console.log("Element deleted succesfully");
  }

})
Model.deleteMany()
