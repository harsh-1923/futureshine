const express = require("express");
const courseRouter = express.Router();
const CourseSchema = require("../models/Course.js");

courseRouter.post("/create", (req, res) => {
  console.log("Creating a Course", req.body);

  const { title, teacherID, description, curriculumID } = req.body;

  if (!title || !teacherID || !description || !curriculumID) {
    return res.status(400).json({ error: true, message: "Missing Details" });
  } else {
    const courseID = teacherID + "-" + curriculumID;
    CourseSchema.findOne({ courseID })
      .then((savedCourse) => {
        if (savedCourse)
          return res.status(400).json({
            error: true,
            message: "Course already exists with same ID",
            data: savedCourse,
          });
        else {
          const newCourse = new CourseSchema({
            title,
            teacherID,
            description,
            curriculumID,
            courseID,
          });

          newCourse
            .save()
            .then((savedCourse) => {
              return res.status(400).json({
                error: false,
                message: "Course created",
                data: savedCourse,
              });
            })
            .catch((error) => {
              return res.status(200).json({
                error: true,
                message: "Failed to create Course",
                err: error,
              });
            });
        }
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ error: true, message: "Internal Server Error" });
      });
  }
});

module.exports = courseRouter;
