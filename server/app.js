const express = require("express");
const cors = require("cors");
const app = express();
const todoRouter = require("./routers/todoRouters");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRouter);

module.exports = app;
