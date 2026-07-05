const mongoose = require("mongoose");

// This defines the strict rules for what a "Player" looks like
const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: String, required: true },
  sport: { type: String, required: true },
});

// This exports the rules so our server.js file can use them
module.exports = mongoose.model("Player", playerSchema);
