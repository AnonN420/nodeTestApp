const express = require("express");
const app = express();
const pool  = require("./db")

app.get("/", (req, res) => res.send("Hello Youtube!"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.get("/chk-rds",async(req,res)=>{
  let result = await pool.query("select * from COMPANY");
  let [resOb] = result.rows;
  res.status(200).json({
    data:resOb
  });
})

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});