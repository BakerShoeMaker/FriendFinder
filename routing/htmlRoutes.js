var path = require("path");

module.exports = function(app) {

    app.get("/", (req, res)=>{
            res.send("You're on the Index page.");

    });
    app.get("/survey", (req, res)=> {
        res.send("You're on the survey page.");
    });

};