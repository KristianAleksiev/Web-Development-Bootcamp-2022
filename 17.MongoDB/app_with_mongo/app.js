const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  // "mongodb+srv://sample-hostname:27017";
  "mongodb://localhost:27017";
// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true});
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("FruitsDB").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// MongoParseError: mongodb+srv URI cannot have port number
//Fixed

// Insert a document
// import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const url = "mongodb://localhost:27017";
const client1 = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    const database = client.db("FruitsDB");
    const haiku = database.collection("fruits");
    // create a document to insert
    const doc = [
      {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 7,
      review: "Very good"
    },
    {
      name: "Banana",
      score: 9,
      review: "Greatest fruit"
    }
  ]

    const result = await fruits.insertMany(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
