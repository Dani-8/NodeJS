const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// DB CONNECT (safe version)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Schema/Model
const TaskSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

// ROUTES

// GET all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find().lean();
  res.json(tasks);
});

// CREATE task
app.post("/tasks", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// DELETE task
app.delete("/tasks/:id", async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  res.json(task);
});

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));