const express = require('express');

const { createTransaction, getAllTransactions, getTransactionById } = require('../controllers/transactions');

const router = express.Router();

router.get('/list', getAllTransactions);
router.get('/:id', getTransactionById);
router.post('/', createTransaction);



module.exports = router;