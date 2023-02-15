const express = require("express");
const app = express();

app.get("/", (eq,res) =>{
  res.send("HELLO TESTING  1...2...3...");
})

app.listen(8000, () =>{
  console.log("THIS IS SPY!!!")
})