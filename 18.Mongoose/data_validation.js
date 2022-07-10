const Fruit = mongoose.model('Fruit' , { name: String,
  age: Number,
  height: Number,
 });


const Fruit = mongoose.model('Fruit' , {
   name: {
    type: String,
    required: [true, "No name specified!"]
  },
   age: {
     type: Number,
     min: 10,
     max: 115,
     },
   height: Number,
  });
