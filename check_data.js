const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myDatabase';

async function checkData() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('users');

    // Find all documents
    const documents = await collection.find({}).toArray();
    console.log('Documents in users collection:');
    console.log(documents);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

checkData();
