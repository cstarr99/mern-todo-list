const express = require("express");
const todoController = require("./../controllers/todoControllers");

const router = express.Router();
router
  .route("/")
  .get(todoController.GetAllTodo)
  .post(todoController.CreateTodo)
  .delete(todoController.DeleteAllTodos);

router
  .route("/:id")
  .patch(todoController.UpdateTodo)
  .delete(todoController.DeleteTodo);

module.exports = router;
