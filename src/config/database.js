require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURL = `${process.env.MONGO_URI}devtinder`;
  await mongoose.connect(mongoURL);
};

module.exports = {
  connectDB,
};
