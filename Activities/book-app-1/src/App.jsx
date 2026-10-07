import { useState } from 'react';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  function fetchBookHandler() {
    fetch("https://openlibrary.org/search.json?q=fiction&limit=10").then(
      (response) => {
        const temp = response.json();

        console.log(temp);
        return temp;
      }
    ).then(
        (data) => {
          console.log(data.docs);
  
          const transformedData = data.docs.map((bookData) => {
            return {
              id: bookData.key,
              title: bookData.title,
              author: bookData.author_name,
              publishYear: bookData.first_publish_year
            };
          });

          setBooks(transformedData);
        }
      );
  }

  return (
    <main className="container">
      <section>
        <button onClick={fetchBookHandler}>Fetch Books</button>
      </section>
      <section>
        <BookList books={books}/>
      </section>
    </main>
  );
}

export default App;

