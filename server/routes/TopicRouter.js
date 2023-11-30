const express = require("express");
const topicRouter = express.Router();
const TopicSchema = require("../models/Topic.js");

topicRouter.post("/create", (req, res) => {
  console.log("Creating a topic...");
  const { topicID, title } = req.body;

  if (!topicID || !title) {
    return res
      .status(400)
      .json({ error: true, message: "Missing credentials" });
  } else {
    const timestamp = Date.now();

    const newTopic = new TopicSchema({ topicID, title, timestamp });

    newTopic
      .save()
      .then((savedTopic) => {
        return res.status(400).json({
          error: false,
          message: "Topic created",
          data: savedTopic,
        });
      })
      .catch((err) => {
        return res.status(200).json({
          error: true,
          message: "Failed to save Topic",
          error: err,
        });
      });
  }
});

module.exports = topicRouter;
