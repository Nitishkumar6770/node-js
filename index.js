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

const express = require("express");
const app = express();
const reqFilter = (req, res, next) => {
    if(!req.query.age) {
        res.send("Please provide age");
    } else if(req.query.age < 18) {
        res.send("You cannot access this page");
    }
    else {
        next();
    }
}
app.use(reqFilter);
app.get("/", (request, response) => {
    response.send("<h1>Welcome to Home Page</h1>");
});
app.get("/user", (req, res) => {
    res.send("<h1>Welcome to User Page</h1>");
})
app.listen(4000);