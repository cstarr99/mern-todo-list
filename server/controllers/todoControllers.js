const Todo = require("../config/db");

// Get all todos
exports.GetAllTodo = async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.status(200).json({
      status: "success",
      results: allTodos.length,
      data: {
        allTodos,
      },
    });
  } catch (err) {
    res.status(404).json({
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
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//Update a Todo
exports.UpdateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        todo: updatedTodo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//Delete a Todo
exports.DeleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//Delete All Todos
exports.DeleteAllTodos = async (req, res) => {
  try {
    await Todo.deleteMany({});

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
