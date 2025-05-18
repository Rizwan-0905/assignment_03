const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  level: {
    type: String,
    required: true,
    enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
  },
  yearsOfExperience: { type: Number, required: true, min: 0 },
});

module.exports = mongoose.model("Skill", skillSchema);
