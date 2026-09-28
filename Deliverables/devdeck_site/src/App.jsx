import { useState } from 'react';
import BookmarkInput from './components/BookmarkInput';
import BookmarkList from './components/BookmarkList';
import './App.css'

const INITIAL_BOOKMARKS = [
  { id: 'b1', title: 'React Documentation', url: 'https://react.dev', category: 'Documentation', isFavorite: true },
  { id: 'b2', title: 'Vite Guide', url: 'https://vite.dev', category: 'Tools', isFavorite: false },
  { id: 'b3', title: 'MDN Web Docs', url: 'https://developer.mozilla.org', category: 'Documentation', isFavorite: false }
];

const App = () => {
  const [bookmarks, setBookmarks] = useState(INITIAL_BOOKMARKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addBookmarkHandler = (title, url, category) => {
    const newBookmark = {
      id: Math.random().toString(),
      title,
      url,
      category,
      isFavorite: false
    };
    setBookmarks(prev => [newBookmark, ...prev]);
  };

  const toggleFavoriteHandler = id => {
    setBookmarks(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const deleteBookmarkHandler = id => {
    setBookmarks(prev => prev.filter(item => item.id !== id));
  };

  const filteredBookmarks = selectedCategory === 'All'
    ? bookmarks
    : bookmarks.filter(b => b.category === selectedCategory);

  return (
    <div className="app-layout">
      <header className="page-header">
        <h1 className="header-title">DevDeck</h1>
        <p className="header-subtitle">Your Developer Resource Hub</p>
        <div className="header-divider" />
      </header>

      <main className="deck-main">
        <section>
          <BookmarkInput onAddBookmark={addBookmarkHandler} />
        </section>

        <section>
          <div className="filter-container">
            <label className="filter-label">Filter by Category: </label>
            <select
              id="category-filter"
              className="cat-select"
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Documentation">Documentation</option>
              <option value="Tools">Tools</option>
              <option value="Tutorials">Tutorials</option>
            </select>
          </div>

          <BookmarkList
            items={filteredBookmarks}
            onToggleFavorite={toggleFavoriteHandler}
            onDelete={deleteBookmarkHandler}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
