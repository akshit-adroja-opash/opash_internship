const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myDatabase';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');

  const db = client.db(dbName);  

  // Create a collection
  const collection = db.collection('users');

  // Insert a document
  const insertResult = await collection.insertOne({ name: 'John Doe', age: 30 });
  console.log('Inserted document:', insertResult.insertedId);

  // Find documents
  const findResult = await collection.find({}).toArray();
  console.log('Found documents:', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
