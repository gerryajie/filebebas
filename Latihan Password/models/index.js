const mysql = require("mysql2");
const { promisify } = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "gerryajie",
  password: "Bantenku1",
  database: "sales",
});

exports.query = promisify(connection.query).bind(connection);
