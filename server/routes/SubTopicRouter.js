const express = require("express");
const subTopicRouter = express.Router();
const SubTopicSchema = require("../models/SubTopic.js");

subTopicRouter.post("/create", (req, res) => {
  console.log("Creating a subtopic...");
  const { subTopicID, title } = req.body;

  if (!subTopicID || !title) {
    return res
      .status(400)
      .json({ error: true, message: "Missing credentials" });
  } else {
    const timestamp = Date.now();

    const newTopic = new SubTopicSchema({ subTopicID, title, timestamp });

    newTopic
      .save()
      .then((savedTopic) => {
        return res.status(400).json({
          error: false,
          message: "SubTopic created",
          data: savedTopic,
        });
      })
      .catch((err) => {
        return res.status(200).json({
          error: true,
          message: "Failed to save Sub Topic",
          error: err,
        });
      });
  }
});

module.exports = subTopicRouter;
