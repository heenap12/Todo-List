import React, { useState } from 'react'
import "./App.css"
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text }]);
      setText("");
    }
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
      />
    </div>
  );
};
export default App