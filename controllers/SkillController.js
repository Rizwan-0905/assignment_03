const Skill = require("../models/Skill");

exports.findAll = async (req, res) => {
  try {
    const data = await Skill.find();
    if (!data.length)
      return res.status(404).json({ message: "No records found" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const item = await Skill.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
};

exports.create = async (req, res) => {
  try {
    const created = await new Skill(req.body).save();
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Skill.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting data" });
  }
};
