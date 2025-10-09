const express = require("express");
const { connectDB } = require("./config/database");

const app = express();

connectDB()
  .then(() => {
    console.log("MongoDB connected");
    app.listen(7777, () => {
      console.log("server is sucessfully running on port 7777");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error :", err);
  });
