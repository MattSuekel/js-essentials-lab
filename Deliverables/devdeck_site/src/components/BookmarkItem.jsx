import './BookmarkItem.css'

const CATEGORY_COLORS = {
  Documentation: { bg: '#2b233d', text: '#b39df2' }, 
  Tools: { bg: '#1c2e3d', text: '#7bc4e2' },       
  Tutorials: { bg: '#36291a', text: '#f0b35b' }      
};

const BookmarkItem = props => {
  const badgeStyle = CATEGORY_COLORS[props.category] || { bg: '#2a2a2a', text: '#9e9e9e' };

  return (
    <li
      className={`bookmark-item ${props.isFavorite ? 'is-favorited' : ''}`}
      style={{
        borderTop: props.isFavorite ? '2px solid #f2994a' : '4px solid #333333',
        backgroundColor: props.isFavorite ? '#23201a' : '#252525'
      }}
    >      
      <div className="bookmark-header">
        <h3 className="bookmark-title">{props.title}</h3>

        <span
          className="category-pill"
          style={{
            backgroundColor: badgeStyle.bg,
            color: badgeStyle.text
          }}
        >
          {props.category}</span>
      </div>

      <p className="bookmark-link-wrapper">
        <a href={props.url} target="_blank" rel="noreferrer" className="bookmark-link">
          {props.url}
        </a>
      </p>

      <div className="bookmark-actions">
        <button onClick={() => props.onToggleFavorite(props.id)}
          className={`action-btn ${props.isFavorite ? 'btn-fav-active' : 'btn-fav'}`}
        >
          {props.isFavorite ? '★ Favorited' : '☆ Favorite'}
        </button>
        <button onClick={() => props.onDelete(props.id)}
          className="action-btn btn-delete"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default BookmarkItem;
