const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  technologies: [{ type: String, required: true }],
  link: { type: String, trim: true }, // no validation here
});

module.exports = mongoose.model("Project", projectSchema);
