var express = require("express");
var exhb = require("express-handlebars");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = process.env.PORT || 3000;
var routes = require("./controllers/tasks_controllers.js");

app.use(routes);




app.use('/public', express.static(path.join(__dirname, 'public/')));
app.use('/img', express.static(path.join(__dirname, 'public/assets/img')));
// app.use(express.static("public"));

app.engine("handlebars", exhb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");





app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
})