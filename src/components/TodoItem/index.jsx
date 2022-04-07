import React from 'react';
import './index.css'

const TodoItem = ({ id, title, isChecked, setTodos }) => {
  const handleChange = (e) => {
    setTodos((prev) => {
      const updatedTodos = prev.map((todoItem) => (todoItem.id === id) ? { ...todoItem, isChecked: e.target.checked } : todoItem)
      localStorage.setItem('todos', JSON.stringify(updatedTodos))

      return updatedTodos
    })
  }
  const handleClick = () => {
    setTodos((prev) => {
      const updatedTodos = prev.filter(({ id: todoId }) => !(todoId === id))
      localStorage.setItem('todos', JSON.stringify(updatedTodos))

      return updatedTodos
    })
  }

  return (
    <div className='todo-box'>
      <input type='checkbox' className='todo-checkbox' checked={isChecked} onChange={handleChange}/>
      <div className={(isChecked) ? 'checked-checkbox' : 'todo-text'}>
        {title}
      </div>
      <button type='button' className='delete-button' onClick={handleClick}>Delete</button>
    </div>
  );
};

export default TodoItem;