import { useState } from 'react';

function SearchForm(props) {
  const [cityInput, setCityInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const cleanCity = cityInput.trim();
    if (cleanCity) {
      props.onSearch(cleanCity);
      setCityInput('')
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input 
        type="text"
        placeholder="Enter City"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        disabled={props.isLoading}
      />
      <button type="submit" disabled={props.isLoading || !cityInput.trim()} >
        {props.isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}

export default SearchForm;
