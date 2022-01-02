const express = require('express');

const transactions = require('./routes/transactions');
const user = require('./routes/users')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/transactions', transactions);
app.use('/user', user);


const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server running on port ${port}...`));