Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  }else {
    fruits.forEach(function(eachObject){
      console.log(eachObject.name);
    })
  }
});

// Tap the model, use find method
