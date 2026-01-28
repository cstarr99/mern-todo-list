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
    <div className="TodoWrapper">
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
    <form onSubmit={handleValue} className="TodoForm">
      <h1 className="h1">Todo List</h1>
      <input
        value={item}
        type="text"
        placeholder="Add a new task..."
        onChange={(e) => setItem(e.target.value)}
        className="todo-input"
      />
      <button className="todo-btn">Add</button>
      {Todo.map((todoItem) => (
        <TodoItem Todo={todoItem} />
      ))}
    </form>
  );
}

function TodoItem({ Todo }) {
  return (
    <div className="Todo">
      <h3>{Todo}</h3>
    </div>
  );
}

export default App;
