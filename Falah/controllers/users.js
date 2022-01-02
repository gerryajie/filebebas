const { query } = require('../models');

class User {
    async userRegister(req, res, next) {
        try {
            const { username, firstName, lastName, password } = req.body;

            const insertData = await query(
                `INSERT INTO user(username, firstName, lastName, password) VALUES(?, ?, ?, ?)`,
                [username, firstName, lastName, password]
            );

            const [data] = await query(
                `SELECT * FROM user WHERE id = ?`,
                [insertData.insertId]
            );

            res.status(201).json({ payload: data });

        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: 'Internal Server Error' });
        }
    }

    // create login
    async userLogin(req, res, next) {
        try {
            // extract username & password dari payload
            // validasi username & password
            // find data by username

            const { username, password } = req.body;

            const findData = await query(
                `SELECT * FROM user WHERE username=?`,
                [username]
            );

            if (findData.length === 0) {
                return res.status(404).json({ errors: 'username not found' });
            }

            if (findData[0].password !== password) {
                return res.status(400).json({ errors: 'wrong password' });
            }

            return res.status(200).json({ message: `WELCOMEEEEEE, ${findData[0].firstName} ${findData[0].lastName}` })

        } catch (error) {

        }
    }
}

module.exports = new User()