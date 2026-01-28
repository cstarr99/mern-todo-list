const Todo = require("../config/db");

// Get all todos
exports.GetAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
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
exports.CreateTodo = async (req, res) => {
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

//Update a Todo

//Delete a Todo
