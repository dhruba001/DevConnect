const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/users");
const app = express();

app.post("/signup", async (req, res) => {
  const userobj1 = {
    firstName: "Dhruba",
    lastName: "Goswami",
    emailId: "dhruba@gmail.com",
    password: "q1w2e3r4",
    age: "30",
    gender: "Male",
  };
  const userobj2 = {
    firstName: "Ananya",
    lastName: "Roy",
    emailId: "ananya@gmail.com",
    password: "q1w2e3r4",
    age: "26",
    gender: "female",
  };

  const user = new User(userobj2);
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
