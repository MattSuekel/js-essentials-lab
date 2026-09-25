import { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
// import './TodoInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: 1px solid ${props => (props.$invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.$invalid ? 'red' : '#ccc')};
    background-color: ${props => (props.$invalid ? 'salmon' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    border-color: #492365;
  }

  & .invalid input {
    border-color: red;
    background-color: salmon;
  }

  & .invalid label {
    color: red;
  }
`;

const TodoInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);


  const todoInputChangeHandler = event => {
    if (event.target.value.trim().length > 0)
      setIsValid(true)
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
        setIsValid(false)
      return;
    }
    props.onAddTodo(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl $invalid={!isValid}>
        <label>Checklist Task</label>
        <input
          type="text"
          value={enteredValue}
          onChange={todoInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TodoInput;
