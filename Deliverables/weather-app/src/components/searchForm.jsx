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
    <form onSubmit={submitHandler} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter city"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        disabled={props.isLoading}
        className="min-w-0 flex-1 border border-border bg-muted px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-primary"
      />

      <button
        type="submit"
        disabled={props.isLoading || !cityInput.trim()}
        className=" bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {props.isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}

export default SearchForm;
