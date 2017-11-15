var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Handles data parsing in express.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(PORT, function () {
    console.log("Server is working. Listening on port: " +PORT)
});