const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true, // now it is required else it'll throw error if not provided
      minLength: 4,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      lowercase: true,
      required: true,
      unique: true, // email id will be unique, no two data point can have same email
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid email address" + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("ENter a strong password");
        }
      },
    },
    age: {
      type: Number,
      min: 18,
      max: 50,
    },
    gender: {
      type: String,
      validate(value) {
        // only work if if it's getting created not update/patch, so use runvalidators on api
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender is not valid");
        }
      },
    },
    photoUrl: {
      type: String,
      default:
        "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid photo Url " + value);
        }
      },
    },
    about: {
      type: String,
      default: "this is a default about of the user!",
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true, // mongo will add created and updated tag
  }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };
