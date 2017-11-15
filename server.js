var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


app.listen(PORT, function () {
    console.log("Server is working. Listening on port: " +PORT)
});