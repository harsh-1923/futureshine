const mongoose = require("mongoose");

const SubTopicSchema = new mongoose.Schema({
  subTopicID: {
    type: String, // same as the topic ID
    required: true,
  },
  subTopicID: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("SubTopic", SubTopicSchema);
