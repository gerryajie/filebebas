const express = require("express");
const app = express();

const students = require("./routes/student");
const port = process.env.PORT || 3000;
// app.get("/", (req, res, next) => {
//   res.status(200).send({
//     data: "success fetch GET API",
//   });
// });

// app.post("/", (req, res, next) => {
//   res.status(201).json({
//     data: "success to fetch post API",
//   });
// });

app.use("/students", students);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
