import './App.css';
import { useState } from 'react';

function App() {
  // Те, що користувач зараз вводить в input
  const [inputValue, setInputValue] = useState('');
  // Список всіх to do
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const text = inputValue.trim();
    if (text === '') return; // порожні задачі не додаємо

    setTodos([...todos, text]); // додаємо нову задачу в кінець списку
    setInputValue(''); // очищаємо input
  };

  // Додавання по натисканню клавіші Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="new task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <p className="count">{todos.length}</p>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <button onClick={addTodo}>Add TO DO</button>
    </div>
  );
}

export default App;
