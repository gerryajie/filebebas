const connection = require("../models");

class Transaction {
  async createTransaction(req, res, next) {
    try {
      const dbConnection = connection.db("sales_afternoon");
      const transaction = connection.db("transactions");

      const data = await transaction.insertOne(req.body);

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["internal Server error"] });
    }
  }
}
module.exports = new Transaction();
