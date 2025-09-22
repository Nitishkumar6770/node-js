const dbconnection = require("./dbconnection");
async function insertData() {
    const db = await dbconnection();
    const dataInsert = await db.insertOne({name:"Vandana", age:22, place:"Bihar"});
    if(dataInsert.acknowledged) {
        console.log("data inserted");
    } else {
        console.log("data not inserted");
    }
}
insertData();