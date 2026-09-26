import BookmarkItem from './BookmarkItem';

const BookmarkList = props => {
  if (props.items.length === 0) {
    return <p>No bookmarks found in this category.</p>;
  }

  return (
    <ul>
      {props.listItems.map(bookmark => (
        <BookmarkItem
          key={bookmark.id}
          id={bookmark.id}
          title={bookmark.title}
          url={bookmark.url}
          category={bookmark.category}
          isFavorite={bookmark.isFavorite}
          onToggleFavorite={props.onToggleFavorite}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default BookmarkList;