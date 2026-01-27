const express = require("express");
const cors = require("cors");
const app = express();
const Todo = require("./config/db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/api/todos", async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  const savedTodo = await todo.save();
  res.json(savedTodo);
});

// Test route
app.get("/", (req, res) => {
  res.send("API running");
});

module.exports = app;
