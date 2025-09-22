const dbconnection = require("./dbconnection");
async function updateData() {
    const db = await dbconnection();
    const dataUpdate = await db.updateOne({name:"Vandana"}, {$set:{age: 27}});
    if(dataUpdate.acknowledged){
        console.log("data updated");
    } else {
        console.log("data not updated");
    }
}
updateData();