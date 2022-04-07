import React, {useState} from 'react';
import './index.css'

const TodoInput = ({ setTodos }) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => setInputValue(e.target.value)
  const handleButtonClick = () => {
    if (inputValue) {
      setTodos((prev) => {
        const updatedTodos = [...prev, { title: inputValue, id: Date.now(), isChecked: false }]
        localStorage.setItem('todos', JSON.stringify(updatedTodos))

        return updatedTodos
      })
      setInputValue('')
    }
  }

  return (
    <div className='entry-field'>
      <input type='text' className='input-todo' value={inputValue} onChange={handleInputChange}/>
      <button type='button' className='add-button' onClick={handleButtonClick}>Add</button>
    </div>
  );
};

export default TodoInput;

