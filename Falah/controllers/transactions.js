const { query } = require('../models');

class Transaction {
    // get all transactions
    async getAllTransactions(req, res, next) {
        try {
            const { id, goodName } = req.query; // id a& goodName could be undefined
            const filterExist = id || goodName
            const filterQuery = filterExist ? [id, goodName] : []

            let dataBase = `SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total `;
            dataBase += `FROM transactions t JOIN customers c ON t.id_customer = c.id `
            dataBase += `JOIN goods g ON g.id = t.id_good `
            dataBase += `JOIN suppliers s ON g.id_supplier = s.id `
            dataBase += filterExist ? `WHERE t.id = ? OR g.name = ? ` : '' // this section is optional
            dataBase += `ORDER BY t.id`

            const data = await query(dataBase, filterQuery);

            if (data.length === 0) {
                return res.status(404).json({ errors: 'Transactions not found' });
            }
            return res.status(200).json({ data });
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: 'Internal Server Error' });
        }
    }

    // get transactions by ID
    async getTransactionById(req, res, next) {
        try {
            const data = await query(
                'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer = c.id JOIN goods g ON g.id = t.id_good JOIN suppliers s ON g.id_supplier = s.id WHERE t.id=?',
                [req.params.id]
            );
            if (data.length === 0) {
                return res.status(404).json({ errors: 'Transactions not found' });
            }

            res.status(200).json({ data })

        } catch (error) {
            res.status(500).json({ errors: 'Internal Server Error' });
        }
    }

    // create transaction
    async createTransaction(req, res, next) {
        try {
            // find good and its price
            // connection.query(
            //     'SELECT * FROM goods WHERE id=?',
            //     [req.body.id_good],
            //     (err, results) => {
            //         if (err) {
            //             return res.status(500).json({ errors: 'Internal Server Error' });
            //         }

            //         const price = results[0].price;
            //         const total = parseFloat(price) * parseFloat(req.body.quantity);

            //         // insert data
            //         connection.query(
            //             'INSERT INTO transactions(id_customer, id_good, quantity, total) VALUES (?, ?, ?, ?)',
            //             [req.body.id_customer, req.body.id_good, req.body.quantity, total],
            //             (err, results) => {
            //                 if (err) {
            //                     return res.status(500).json({ errors: 'Internal Server Error' });
            //                 }

            //                 connection.query(
            //                     'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer = c.id JOIN goods g ON g.id = t.id_good JOIN suppliers s ON g.id_supplier = s.id WHERE t.id=?',
            //                     [results.insertId],
            //                     (err, results) => {
            //                         if (err) {
            //                             return res.status(500).json({ errors: 'Internal Server Error' });
            //                         }

            //                         res.status(201).json({ data: results });
            //                     }
            //                 )
            //             });
            //     });


            /* Async Await */
            // find price of good
            const { id_good, id_customer, quantity } = req.body;
            const goods = await query('SELECT price FROM goods WHERE id=?', [id_good]);
            const price = goods[0].price;
            const total = parseFloat(price) * parseFloat(quantity);

            // insert data
            const insertedData = await query(
                'INSERT INTO transactions(id_customer, id_good, quantity, total) VALUES(?, ?, ?, ?)',
                [id_customer, id_good, quantity, total]
            );
            console.log(insertedData);

            // find new data
            const [data] = await query(
                'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer = c.id JOIN goods g ON g.id = t.id_good JOIN suppliers s ON g.id_supplier = s.id WHERE t.id=?',
                [insertedData.insertId]
            );

            res.status(201).json({ data });

        } catch (error) {
            res.status(500).json({ errors: 'Internal Server Error' });
        }
    }

}

module.exports = new Transaction();