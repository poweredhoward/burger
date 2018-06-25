var orm = require("../config/orm.js");

var task = {
    all: function(cb){
        console.log("in task.js")
        orm.all("tasks", cb);
    },
    new: function(taskname, cb){
        orm.new("tasks", taskname, cb);
    },
    done: function(taskname, cb){
        orm.done("tasks", taskname, cb);
    },
    delete: function(taskname, cb){
        orm.delete("tasks", taskname, cb);
    }
}

module.exports = task;