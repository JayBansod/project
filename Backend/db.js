const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/expenditure";
const connectToDB = () => {
  try {
    mongoose.connect(uri);
    console.log("mongo connected");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectToDB;
