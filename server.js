const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
const mongoose_url = process.env.MONGO_URL;

const EducationRouter = require("./routers/EducationRouter");
const ExperienceRouter = require("./routers/ExperienceRouter");
const ProjectRouter = require("./routers/ProjectRouter");
const SkillRouter = require("./routers/SkillRouter");

mongoose
  .connect(mongoose_url)
  .then(() => console.log("connected to db"))
  .catch((err) => console.error(err));

app.use("/api/education", EducationRouter);
app.use("/api/experience", ExperienceRouter);
app.use("/api/projects", ProjectRouter);
app.use("/api/skills", SkillRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
