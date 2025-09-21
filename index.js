// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// // const url = mongodb://localhost:27017/';
// const client = new MongoClient(url);

// async function getDataFromDb() {
//     const result = await client.connect();
//     const db = result.db('youtube');
//     const collection = db.collection('videos');
//     const data = await collection.find({}).toArray();
//     console.log(data);
//     await client.close();
// }
// getDataFromDb();

// // i got this value from mongodb compass