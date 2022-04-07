import React, { useState } from "react";
import './App.css';
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

  return (
    <div className='app-wrapper'>
      <TodoInput setTodos={setTodos}/>
      {todos.map(({ title, id, isChecked }) => (
        <TodoItem key={id} title={title} isChecked={isChecked} setTodos={setTodos} id={id}/>
      ))}
    </div>
  );
}

export default App;
