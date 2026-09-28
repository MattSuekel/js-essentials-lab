import { useState } from 'react';
import styled from 'styled-components'

const FormContainer = styled.form`
  background: #252525;
  border: 1px solid #333333;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #444444;
  }
`;

const FormHeader = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #f3f4f6;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SubmitButton = styled.button`
  background-color: #7b6cd9;
  color: #ffffff;
  border: none;
  padding: 0.55rem 1.1rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease, transform 0.05s ease;

  &:hover {
    background-color: #6a59cc;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ErrorNotice = styled.p`
  color: #ff8b8b;
  font-size: 0.85rem;
  margin: 0.75rem 0;
`;

const FormControl = styled.div`
  margin-bottom: 0.85rem;

  &.invalid input {
    border-color: #e06c75;
    background-color: #2c1f21;
  }
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #8b8d91;
  margin-bottom: 0.35rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.55rem 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #363636;
  background-color: #262626;
  color: #dcddde;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: #7b6cd9;
    box-shadow: 0 0 0 2px rgba(123, 108, 217, 0.25);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.55rem 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #363636;
  background-color: #262626;
  color: #dcddde;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: #7b6cd9;
    box-shadow: 0 0 0 2px rgba(123, 108, 217, 0.25);
  }
`;

const BookmarkInput = props => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('Documentation');
  const [isValid, setIsValid] = useState(true);

  const submitHandler = event => {
    event.preventDefault()

    if (title.trim().length === 0 || url.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddBookmark(title, url, category);
    setTitle('');
    setUrl('');
    setCategory('Documentation');
    setIsValid(true);
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <FormHeader>Add New Resource</FormHeader>

      <FormControl className={!isValid && title.trim().length === 0 ? 'invalid' : ''}>
        <FormLabel>Title</FormLabel>
        <FormInput
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
            if (e.target.value.trim().length > 6) setIsValid(true);
          }}
        />
      </FormControl>

      <FormControl className={!isValid && url.trim().length === 0 ? 'invalid' : ''}>
        <FormLabel>URL</FormLabel>
        <FormInput
          type="text"
          value={url}
          onChange={e => {
            setUrl(e.target.value);
            if (e.target.value.trim().length > 0) setIsValid(true);
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Category</FormLabel>
        <FormSelect
          className='form-select'
          value={category} 
          onChange={e => setCategory(e.target.value)}>
            <option value="Documentation">Documentation</option>
            <option value="Tools">Tools</option>
            <option value="Tutorials">Tutorials</option>
        </FormSelect>
      </FormControl>

      {!isValid && <ErrorNotice>Please fill out both the Title and URL fields.</ErrorNotice>}

      <SubmitButton type="submit">Add Bookmark</SubmitButton>
    </FormContainer>
  )
  
};

export default BookmarkInput;
