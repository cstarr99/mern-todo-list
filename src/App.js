import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

function TodoWrapper() {
  const [todo, setTodo] = useState([]);
  function addTodo(item) {
    setTodo([...todo, item]);
  }
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoItem />
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [item, setItem] = useState("");

  function handleValue(e) {
    e.preventDefault();
    addTodo(item);
  }

  return (
    <form onSubmit={handleValue}>
      <h1>Todo List</h1>
      <input
        value={item}
        type="text"
        placeholder="Add a new task..."
        onChange={(e) => setItem(e.target.value)}
      />
      <button>add text</button>
    </form>
  );
}

function TodoItem() {
  return (
    <div>
      <h3>Item</h3>
    </div>
  );
}

export default App;
