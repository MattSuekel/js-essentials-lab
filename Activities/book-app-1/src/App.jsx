import BookList from './components/BookList';
import './App.css';

function App() {
  const books = [
    {
      id: '1',
      title: 'The Stand',
      author: 'Stephen King',
      publishYear: '1978',
    },
    {
      id: '1',
      title: 'Sphere',
      author: 'MICHAEAL Crichton',
      publishYear: '1987',
    },
  ];

  return (
    <main className="container">
      <section>
        <button>Fetch Books</button>
      </section>
      <section>
        <BookList books={books}/>
      </section>
    </main>
  );
}

export default App;
