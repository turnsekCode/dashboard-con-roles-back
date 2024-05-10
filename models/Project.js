const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String },
  slug: { type: String },
  //createdBy: {
  //  type: mongoose.Schema.Types.ObjectId,
  //  ref: "User",
  //  required: true,
  //},
});

module.exports = mongoose.model("Project", projectSchema);
