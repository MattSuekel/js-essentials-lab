import { useState, useEffect, useCallback } from 'react';
import BookList from './components/BookList';
import './App.css';
import useHttp from './hooks/useHttp';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const { isLoading, error, sendRequest } = useHttp();

  const fetchBookHandler = useCallback((query) => {
    if (!query.trim()) {
      return;
    }

  const transformBooks = (data) => {
    const transformedData = data.docs.map((bookData) => ({
      id: bookData.key,
      title: bookData.title,
      author: bookData.author_name,
      publishYear: bookData.first_publish_year,
    }));

    setBooks(transformedData);
  };

  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`;
  
    sendRequest(url, {}, transformBooks);
  }, [sendRequest]);

  useEffect(() => {
    fetchBookHandler("");
  }, [fetchBookHandler]);

  function searchInputChangeHandler(event) {
    setSearchTerm(event.target.value);  
  }

  function submitHandler(event) {
    event.preventDefault();
    fetchBookHandler(searchTerm);
  }

  let content = <p>no books found</p>

  if (books.length > 0) {
    content = <BookList books={books} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>loading...</p>
  }

  return (
    <main className="container">
      <section>
        <form onSubmit={submitHandler}>
          <input 
            type='text'
            value={searchTerm}
            onChange={searchInputChangeHandler}
            placeholder='Search...'
          />
          <br/><br/>
          <button type='submit'>Fetch Books</button>
        </form>
      </section>
      <section>{content}</section>
    </main>
  );
}

export default App;

