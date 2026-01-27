const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

// MongoDB connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// Todo Schema
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Todo Model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
