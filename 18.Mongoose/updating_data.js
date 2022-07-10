Fruit.updateOne({_id: "5bc0854dd6ec7ad"}. {name: "Peach"}, function (err) {
  if (err){
    console.log(err);
  }else{
    console.log("Succesfully updated");
  }

});
Fruit.updateMany()
