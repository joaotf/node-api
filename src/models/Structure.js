const mongoose = require("mongoose");

const StructureSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
  url: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Structure", StructureSchema);
