const express = require("express");

// Import controller
const {
  getAllTransactions,
  getOneTransaction,
} = require("../controllers/transactions");

const router = express.Router(); // Make router

router.post("/:register", getAllTransactions);
router.post("/:login", getOneTransaction);

module.exports = router;
