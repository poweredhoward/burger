var mysql = require("mysql");

var connection = mysql.createConnection({
    database: "tasks_db",
    port: 3306,
    host: "localhost",
    user: "root",
    password: "admin"
});

connection.connect(function (err){
    if(err) console.log(err.stack);
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;