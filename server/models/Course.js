const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacherID: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  courseID: {
    type: String,
    required: true,
  },
  curriculumID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
