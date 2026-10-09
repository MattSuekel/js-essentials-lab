import { useState, useEffect, useCallback } from 'react';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState (false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('')

  const fetchBookHandler = useCallback(async (query) => {

    if (!query.trim())
      return;

    setIsLoading(true);
    setError(null);



    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`
      );

      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }

      const data = await response.json();

      const transformedData = data.docs.map((bookData) => {
        return {
          id: bookData.key,
          title: bookData.title,
          author: bookData.author_name,
          publishYear: bookData.first_publish_year
        };
      });

      setBooks(transformedData);
    } catch(e) {
      setError(e.message);
    }

    setIsLoading(false)
  }, []);

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

