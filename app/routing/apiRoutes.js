var friendsData = require("../data/friends")

module.exports = function(app) {

    //Used to display a JSON list of all possible friends.
    app.get("/api/friends", (req, res)=>{
        //res.send("Api friends get route.");
        res.json(friendsData);

    });
    //Handles incoming survey results.
    app.post("/api/friends", (req, res)=> {
        res.send("Api friends post route!");
    });
};