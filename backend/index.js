const express = require("express");
const app = express();

app.get("/", (req,res) =>{
  res.send("HELLO TESTING  1...2...3...");
})

app.listen(3000, () =>{
  console.log("THIS IS SPY!!!")
})