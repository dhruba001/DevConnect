const express = require("express");

const app = express(); // creating a new server using express

app.get("/user", (req, res) => {
  res.send({ firstname: "Dhruba", lastname: "Goswami" });
});

app.post("/user", (req, res) => {
  res.send("data sucessfully saved to db");
});

app.delete("/user", (req, res) => {
  res.send("data sucessfully deleted");
});

app.use("/test", (req, res) => {
  // this will match all like get post put etc
  res.send("Hello from the server");
}); // this function is known as request handler/ route handler

app.listen(7777, () => {
  console.log("server is sucessfully running on port 7777");
}); // now out server will first create a server and then listen for incoming traffic
