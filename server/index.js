const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/User.js");

const app = express();
const PORT = 3000;

const dburl =
  "mongodb+srv://harshjusharma:URucEmxdiqtwcWI9@fscluster0.bv4zmm8.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dburl).then(() => {
  console.log("Connected bro");
});

app.listen(PORT, () => {
  console.log(`Listening tp ${PORT}`);
});

app.post("/insert", (req, res) => {
  console.log("here");
  var userModel = new User(req.params.user);
  userModel.name = "s";
  userModel.save().then((err, data) => {
    if (err) console.log(err);
    res.status(200).send({ msg: "done" });
  });
});
