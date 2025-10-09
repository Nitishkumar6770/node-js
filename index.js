// // i got this value from mongodb compass

const express = require("express");
const app = express();
const reqFilter = (req, res, next) => {
    if(!req.query.age) {
        res.send("Please provide age");
    } else if(req.query.age < 18) {
        res.send("You cannot access this page, Permission denied");
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