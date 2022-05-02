const mysql = require("mysql2");
require("dotenv").config();


const dbCon = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: process.env.DB_PASSWORD,
  password: "vtori37PASS",
  database: "employee_db"
});

module.exports = dbCon;
console.log("hi");
