const { query } = require("../models");

class Transaction {
  async getAllTransactions(req, res, next) {
    try {
      const insertedData = await query(
        "INSERT INTO userlogin(id,username , firstname, lastname,password) VALUES (?, ?, ?, ?,?)",
        [
          req.body.username,
          req.body.firstname,
          req.body.lastname,
          req.body.password,
        ]
      );
      const password = "";

      if (password === null) {
        return res.status(404).json({ errors: ["Gagal"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async getOneTransaction(req, res, next) {
    try {
      const data = await query(
        "SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?",
        [req.params.id]
      );

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Transaction not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async createTransaction(req, res, next) {
    try {
      /* Callback */
      // Find good and its price
      // connection.query(
      //   'SELECT * FROM goods WHERE id=?',
      //   [req.body.id_good],
      //   (err, results) => {
      //     if (err) {
      //       return res.status(500).json({ errors: ['Internal Server Error'] });
      //     }
      //     const price = results[0].price;
      //     const total = parseFloat(price) * parseInt(req.body.quantity);
      //     // Insert Data
      //     connection.query(
      //       'INSERT INTO transactions(id_customer, id_good, quantity, total) VALUES (?, ?, ?, ?)',
      //       [req.body.id_customer, req.body.id_good, req.body.quantity, total],
      //       (err, results) => {
      //         if (err) {
      //           return res
      //             .status(500)
      //             .json({ errors: ['Internal Server Error'] });
      //         }
      //         // Find new Data
      //         connection.query(
      //           'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
      //           [results.insertId],
      //           (err, results) => {
      //             if (err) {
      //               return res
      //                 .status(500)
      //                 .json({ errors: ['Internal Server Error'] });
      //             }
      //             res.status(201).json({ data: results });
      //           }
      //         );
      //       }
      //     );
      //   }
      // );

      const goods = await query("SELECT * FROM goods WHERE id=?", [
        req.body.id_good,
      ]);
      const price = goods[0].price;
      const total = parseFloat(price) * parseFloat(req.body.quantity);

      const insertedData = await query(
        "INSERT INTO transactions(id_customer, id_good, quantity, total) VALUES (?, ?, ?, ?)",
        [req.body.id_customer, req.body.id_good, req.body.quantity, total]
      );

      const data = await query(
        "SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?",
        [insertedData.insertId]
      );

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}

module.exports = new Transaction();
