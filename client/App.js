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
      <TodoForm addTodo={addTodo} Todo={todo} />
      <TodoItem />
    </div>
  );
}

function TodoForm({ addTodo, Todo }) {
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
      <button>Add</button>
      {Todo.map((todoItem) => (
        <TodoItem Todo={todoItem} />
      ))}
    </form>
  );
}

function TodoItem({ Todo }) {
  return (
    <div>
      <h3>{Todo}</h3>
    </div>
  );
}

export default App;
