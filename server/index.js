const mongoose = require("mongoose");
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());

const PORT = 8080;

const dburl = require("./config.js").url;

mongoose.connect(dburl).then(() => {
  console.log("Connected bro");
});

const userRouter = require("./routes/UserRouter");
app.use("/api/user", userRouter);

const courseRouter = require("./routes/CourseRouter");
app.use("/api/course", courseRouter);

const topicRouter = require("./routes/TopicRouter");
app.use("/api/topic", topicRouter);

const subTopicRouter = require("./routes/SubTopicRouter");
app.use("/api/subtopic", subTopicRouter);

app.listen(PORT, () => {
  console.log(`Listening tp ${PORT}`);
});
