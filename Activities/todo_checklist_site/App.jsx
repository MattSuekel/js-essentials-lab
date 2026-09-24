import { useState } from 'react';
import TodoInput from './components/TodoInput';
import './App.css';

const App = () => {
  const [todoItems, setTodoItems] = useState([
    { id: 't1', text: 'Finish homework' },
    { id: 't2', text: 'Go on a hike' }
  ]);

  const addTodoHandler = enteredText => {
    setTodoItems(prevTodos => [
      { id: Math.random().toString(), text: enteredText },
      ...prevTodos
    ]);
  };

  const deleteItemHandler = todoId => {
    setTodoItems(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <div id="app-container">
      <section id="todo-form">
        <TodoInput onAddTodo={addTodoHandler} />
      </section>
      <section id="todos">
        <ul>
          {todoItems.map(todo => (
            <li key={todo.id} onClick={() => deleteItemHandler(todo.id)}>
              {todo.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;