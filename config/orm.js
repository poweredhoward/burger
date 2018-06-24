var connection = require("./connection.js");

var orm = {
    all: function(table, cb){
       connection.query(
           "select * from ??",
           [table],
           function(err, data){
               if (err) throw err;
               cb(data);
            //    console.log(data);
           }
       )
    },

    new: function(table, taskname, cb){
        connection.query(
            "INSERT INTO ??(name) VALUES (?)",
            [table,taskname],
            function (err, data){
                if (err) throw err;
                cb(data);
            }
        )
    }
}

module.exports = orm;