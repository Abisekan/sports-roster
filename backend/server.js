const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

// NEW: Import our Player rules from the models folder
const Player = require("./models/Player");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Successfully connected to MongoDB Atlas!"))
  .catch((error) => console.error("❌ MongoDB connection failed:", error));

// READ: Fetch all players from the real MongoDB database
app.get("/api/players", async (req, res) => {
  try {
    const players = await Player.find(); // Asks MongoDB for all documents
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE: Save a new player to the real MongoDB database
app.post("/api/players", async (req, res) => {
  const newPlayer = new Player(req.body); // Checks the data against our Schema rules
  try {
    const savedPlayer = await newPlayer.save(); // Saves it to the cloud
    res.status(201).json(savedPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Remove a player from the real MongoDB database
app.delete("/api/players/:id", async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.id); // Finds by unique ID and deletes
    res.status(200).json({ message: "Player successfully removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log("Server is successfully running on port 5000");
});
