import { useState } from 'react';
import './Todo.css';

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  const handleInputChanges = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddList = () => {
    if(inputValue.trim() !== ''){
      setList([...list, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    setList(list.filter((todo, i) => i !== index));
  };

  return(
    <>
      <h1>To-do List📃</h1>
      <textarea 
        type="text"
        placeholder='Add a new list'
        value={inputValue}
        onChange={handleInputChanges}
      /><br/>
      <button onClick={handleAddList} className='btn'>Add List</button>
      <ul>
        {
          list.map((todo, index) => (
            <div className="list" key={index}>
                <li>
                  {todo}
                  <br/>
                  <button onClick={() => handleDelete(index)} className='delete'>Delete</button>
              </li>
            </div>
          ))
        }
    </ul>
    </>
  )
}
export default Todo;