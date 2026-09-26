const BookmarkItem = props => {
  return (
    <li>
      <div>
        <h3>{props.title}</h3>
        <span>{props.category}</span>
      </div>

      <p>
        <a href={props.url} target="_blank" rel="noreferrer">
          {props.url}
        </a>
      </p>

      <div>
        <button onClick={() => props.onFavoriteToggle(props.id)}>
          {props.isFavorite ? '★ Favorited' : '☆ Favorite'}
        </button>
        <button onClick={() => props.onDelete(props.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default BookmarkItem;