const dbconnection = require("./dbconnection");
const deleteData = async() => {
    const db = await dbconnection();
    const dataDelete = await db.deleteMany({age:22});
    console.log(dataDelete);
}
deleteData();