const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, // now it is required else it'll throw error if not provided
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true, // email id will be unique, no two data point can have same email
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
  photoUrl: {
    type: String,
  },
  about: {
    type: String,
    default: "this is a default about of the user!",
  },
  skills: {
    type: [String],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
