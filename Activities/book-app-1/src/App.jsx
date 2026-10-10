import { useState, useEffect, useCallback } from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const URL = 'http://localhost:3000/books'

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("unable to retreive books.")
      }

      const data = await response.json();

      // const loadedBooks = []
      //
      // for (const key in data) {
      //   loadedBooks.push({
      //     id: key,
      //     title: data[key].title,
      //     author: data[key].author,
      //     publishYear: data[key].publishYear,
      //   })
      // }

      setBooks(data);
    }
    catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [URL]);

  async function addBookHandler(book) {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(book),
        header: {
        'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to save.');
      }

      fetchBooksHandler();
    }
    catch (err) {
      setError(err.message);
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  let content = <p>No books found.</p>;

  if (books.length > 0) {
    content = <BookList books={books} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading books...</p>;
  }

  return (
    <main className="container">
      <section>
        <h2>Add New Book</h2>
        <AddBook onAddBook={addBookHandler} />
      </section>

      <section>
        <button onClick={fetchBooksHandler}>Fetch Books</button>
      </section>

      <section>{content}</section>
    </main>
  );
}

export default App;
