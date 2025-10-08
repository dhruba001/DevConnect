const express = require("express");
const { adminAuth } = require("./middlewares/auth");
const app = express();

app.use("/admin", adminAuth);

app.get("/admin", (req, res, next) => {
  res.send("admin is validated so we're here");
});

app.use("/test", (req, res, next) => {
  res.send("first");
});

app.listen(7777, () => {
  console.log("server is sucessfully running on port 7777");
});
