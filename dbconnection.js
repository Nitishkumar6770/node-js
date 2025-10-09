const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

async function dbconnection() {
    const result = await client.connect();
    const db = result.db('youtube');
    const collection = db.collection('videos');
    const data = await collection.find().toArray();
    // console.log(data);
    // await client.close();
    // console.log(collection.find().toArray().then((data)=> {
    //     console.log(data);
    // }).catch((err)=>{
    //     console.log(err);
    // }));
    return collection;
}
dbconnection();
module.exports = dbconnection;