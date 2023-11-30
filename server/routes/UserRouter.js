const express = require("express");
const userRouter = express.Router();
const UserSchema = require("../models/User");
bodyParser = require("body-parser").json();

userRouter.post("/signup", (req, res) => {
  console.log(req, "HERER");
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({
      error: true,
      message: "Missing username, email or password",
      isAuthenticated: false,
    });
  } else {
    var userModel = new UserSchema({ username });
    userModel.username = username;
    userModel.save().then((err, data) => {
      if (err) console.log(err);
      res.status(200).send({ msg: "done" });
    });
  }

  //   if (!username) {
  //     return res.status(400).json({
  //       error: true,
  //       message: "Missing username, email or password",
  //       isAuthenticated: false,
  //     });
  //   } else {
  //     UserSchema.findOne(username).then((err, user) => {
  //       if (err) {
  //         return res.status(500).json({
  //           error: true,
  //           message: "Internal Server Error",
  //           isAuthenticated: false,
  //         });
  //       } else if (user) {
  //         return res.status(400).json({
  //           error: false,
  //           message: "User already exists",
  //           isAuthenticated: false,
  //         });
  //       }

  //       const newUser = new UserSchema({
  //         username,
  //         // email,
  //         // password,
  //         // workspaceID,
  //       });
  //       newUser.save((err) => {
  //         if (err)
  //           return res.status(400).json({
  //             error: true,
  //             message: "Couldnt create user",
  //             isAuthenticated: false,
  //           });
  //         else
  //           return res.status(200).json({
  //             error: false,
  //             message: "Welcome to Flint, user created",
  //             isAuthenticated: true,
  //             newUser,
  //           });
  //       });
  //     });
  //   }
});

userRouter.post("/signin", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  UserSchema.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(500).json({
        error: true,
        message: "Internal Server Error",
        isAuthenticated: false,
      });
    } else {
      if (!user) {
        return res.status(400).json({
          error: true,
          message: "User Does Not Exist",
          isAuthenticated: false,
        });
      } else {
        if (user.password == password) {
          return res.status(200).json({
            error: false,
            message: "User Authenticated",
            isAuthenticated: true,
            user,
          });
        } else {
          return res.status(400).json({
            error: false,
            message: "Invalid Credentials",
            isAuthenticated: false,
          });
        }
      }
    }
  });
});

module.exports = userRouter;
