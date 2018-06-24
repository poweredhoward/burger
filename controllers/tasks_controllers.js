var express = require("express");

var router = express.Router();

var task = require("./../models/task.js");


router.get("/", function(req, res){
    task.all(function(data){
        console.log(data);
        res.render("index", {tasks: data});

    });
    
});

router.post("/api/tasks", function(req, res){
    console.log("Inside post");
    console.log(req.body);
    var data = req.body.name;
    console.log(req.body.name);
    task.new(data, function(data){
        console.log(data);
        res.render("index", {tasks: data});
    })
})

function cb(data){
    return data;
}

module.exports = router;