const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema({
  topicID: {
    type: String, // same as the cirriculum ID
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Topic", TopicSchema);
