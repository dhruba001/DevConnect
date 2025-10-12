const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/users");
const { validateSignUpData } = require("./utils/validation");

const app = express(); // create server instance

app.use(express.json());

//new user sign up
app.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req); // validation of data, not schema level
    const user = new User(req.body); // now make a new user entry in db
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("error : " + err.message);
  }
});

// Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("something went wrong :" + err);
  }
});

// feed api - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("error :" + err);
  }
});

//delete user api
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted");
  } catch (err) {
    res.status(400).send(err);
  }
});

// patch an data entry [ update only specific field and keep rest of data same put will uapte the whole thing, so if you just send name it will remove everything and only put name there]
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  try {
    // only allowed updates fields can be updated others will be blocked
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];

    const isUpdateAllowed = Object.keys(data).every((k) => {
      return ALLOWED_UPDATES.includes(k);
    });

    if (!isUpdateAllowed) {
      throw new Error("Update not allowed !");
    }
    if (data.skills.length > 10) {
      throw new Error("skills can't be more than 10");
    }
    await User.findByIdAndUpdate(userId, data, {
      runValidators: true, // check gender column in user.js
    });
    res.send("user Updated ");
  } catch (err) {
    res.status(400).send("error" + err);
  }
});

//connect db and then start listening
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
