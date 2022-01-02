const mysql = require("mysql2");
const { promisify } = require("util");

const connection = mysql.createConnection({
  host: "gabatch15.coynohz9l3ig.ap-southeast-1.rds.amazonaws.com",
  user: "root",
  password: "Aneh1234",
  database: "salesgery",
});

exports.query = promisify(connection.query).bind(connection);
