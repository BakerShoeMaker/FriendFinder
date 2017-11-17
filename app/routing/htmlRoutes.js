var path = require("path");

module.exports = function(app) {

    app.get("/", (req, res)=>{
        //res.send("You're on the Index page.");
        res.sendFile(path.join(__dirname, "/app/public/home.html"));
    });
    app.get("/survey", (req, res)=> {
        res.send("You're on the survey page.");
    });

};