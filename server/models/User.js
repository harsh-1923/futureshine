const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  // email: {
  //   type: String,
  //   required: true,
  // },
  // password: {
  //   type: String,
  //   required: true,
  // },
  // contact: {
  //   type: String,
  //   required: true,
  // },
  // url: {
  //   type: String,
  //   required: false,
  // },
  // studentID: {
  //   type: String,
  //   req: true,
  // },
  // timestamp: {
  //   type: String,
  //   default: Date.now(),
  // },
});

module.exports = mongoose.model("User", UserSchema);
