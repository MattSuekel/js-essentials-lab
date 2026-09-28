import BookmarkItem from './BookmarkItem';
import styles from './BookmarkList.module.css'

const BookmarkList = props => {
  if (props.items.length === 0) {
    return <p className={styles.error}>No bookmarks found in this category.</p>;
  }

  return (
    <div className={styles.listWrapper}>
      <ul className={styles.list}>
        {props.items.map(bookmark => (
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
    </div>
  );
};

export default BookmarkList;
