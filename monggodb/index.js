require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");

const transactions = require("./routes/transactions");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/transactions", transactions);
app.listen(port, () => console.log(`server running ${port}`));
