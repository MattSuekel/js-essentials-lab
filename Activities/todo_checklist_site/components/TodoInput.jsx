import { useState } from 'react';
import Button from './Button';
import './TodoInput.css';

const TodoInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const todoInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Checklist Task</label>
        <input
          type="text"
          value={enteredValue}
          onChange={todoInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TodoInput;