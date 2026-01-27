const express = require("express");
const cors = require("cors");
const app = express();
const Todo = require("./config/db");

// Middleware
app.use(cors());
app.use(express.json());

const GetAllTodo = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// Get all todos
// app.get("/api/todos", async (req, res) => {
//   const todos = await Todo.find();
//   res.json(todos);
// });

const CreateTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      text: req.body.text,
      completed: req.body.completed,
    });
    res.status(201).json({
      status: "success",
      data: {
        todo: newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
// Create a new todo
// app.post("/api/todos", async (req, res) => {
//   try {
//     const newTodo = await Todo.create({
//       text: req.body.text,
//       completed: req.body.completed,
//     });
//     res.status(201).json({
//       status: "success",
//       data: {
//         todo: newTodo,
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: err,
//     });
//   }
// });

app.use("/api/todos", GetAllTodo);
app.use("/api/todos", CreateTodo);

module.exports = app;
