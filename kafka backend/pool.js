var mysql = require("mysql");
var pool = mysql.createPool({
connectionLimit: 100,
port: "3306",
host: "localhost",
user: "root",
password: "Admin123",
database: "LinkedinApplication"
});
module.exports = pool;