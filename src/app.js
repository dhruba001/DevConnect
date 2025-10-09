const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/users");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("error :", err);
  }
});

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
