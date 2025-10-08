const express = require("express");

const app = express(); // creating a new server using express

// we are listening to 3 routes in port 7777

app.use("/normal", (req, res) => {
  res.send("Hello from the server 0");
}); // this function is known as request handler

app.use("/hello", (req, res) => {
  res.send("Hello there !!");
});

app.use("/", (req, res) => {
  res.send("Main page");
});

app.listen(7777, () => {
  console.log("server is sucessfully running on port 7777");
}); // now out server will first create a server and then listen for incoming traffic
