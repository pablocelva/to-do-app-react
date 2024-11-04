import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const [todos, setTodos ] = useState([])
  
  const addTodo = (text) => {
    const newTodo = { id:Date.now(), text, completed: false }
    setTodos([...todos, newTodo])
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <h1>To Do List React</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
