const express = require("express");
const { GetAllTodo, CreateTodo } = require("./../controllers/todoControllers");

const router = express.Router();
router.route("/").get(GetAllTodo).post(CreateTodo);

module.exports = router;
