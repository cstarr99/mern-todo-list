import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  // GET all todos
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("http://127.0.0.1:3000/api/todos");
      const data = await res.json();
      setTodos(data.data.allTodos);
    };

    fetchTodos();
  }, []);

  // CREATE todo
  const createTodo = async () => {
    const res = await fetch("http://127.0.0.1:3000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        completed: false,
      }),
    });

    const data = await res.json();
    setTodos([...todos, data.data.todo]);
    setText("");
  };

  // DELETE todo
  const deleteTodo = async (id) => {
    await fetch(`http://127.0.0.1:3000/api/todos/${id}`, {
      method: "DELETE",
    });

    setTodos(todos.filter((todo) => todo._id !== id));
  };

  // TOGGLE checkmark on todo
  const toggleTodo = async (todo) => {
    const res = await fetch(`http://127.0.0.1:3000/api/todos/${todo._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !todo.completed,
      }),
    });

    const data = await res.json();

    setTodos(todos.map((t) => (t._id === todo._id ? data.data.todo : t)));
  };

  // DELETE all todos
  const DeleteAll = async () => {
    await fetch("http://127.0.0.1:3000/api/todos/", {
      method: "DELETE",
    });
    setTodos([]);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h3>No todos. Make one now!</h3>
      ) : (
        todos.map((todo) => (
          <div key={todo._id}>
            {todo.text}
            <button onClick={() => toggleTodo(todo)}>
              {todo.completed ? "❌" : "✅"}
            </button>
            <button onClick={() => deleteTodo(todo._id)}>🗑️</button>
          </div>
        ))
      )}

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Todo..."
      />
      <button onClick={createTodo}>Make todo</button>
      <button onClick={DeleteAll}>Clear All</button>
    </>
  );
}

export default App;

//TODO:
//fix css
//fix complete
//allow update btn
