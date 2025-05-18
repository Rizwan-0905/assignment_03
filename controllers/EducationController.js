const Education = require("../models/Education");
const mongoose = require("mongoose");

// GET /api/education - Fetch all records
exports.findAll = async (req, res) => {
  try {
    const users = await Education.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "No records found" });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Couldn't fetch records" });
  }
};

// GET /api/education/:id - Fetch a single record
exports.findOne = async (req, res) => {
  try {
    const user = await Education.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong while fetching the record" });
  }
};

// POST /api/education - Create a new record
exports.create = async (req, res) => {
  try {
    const newRecord = new Education(req.body);
    const saved = await newRecord.save();
    res.status(201).json(saved);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to create record", details: error.message });
  }
};


exports.update = async (req, res) => {
  try {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Record not found for update" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to update record", details: error.message });
  }
};


exports.remove = async (req, res) => {
  try {
    const deleted = await Education.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Record not found for deletion" });
    }

    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete record" });
  }
};
