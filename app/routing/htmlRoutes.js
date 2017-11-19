var path = require("path");

module.exports = function(app) {

    app.get("/", (req, res)=>{
        //res.send("You're on the Index page.");
        //res.sendFile(path.join(__dirname, "/app/public/home.html"));
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", (req, res)=> {
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    });

};