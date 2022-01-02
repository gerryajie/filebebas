const express = require("express");

const { getAllStudents } = require("../controller/student");

const router = express.Router();

router.get("/", getAllStudents);

module.exports = router;
