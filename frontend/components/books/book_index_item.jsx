import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookIndexItem = ({ book }) => {
  // debugger
  let description = book.summary.slice(0,500) + "...";
  return (
    <li>
      <Link to={`books/${book.id}`}>
          <img src={book.imageUrl} width="100" height="100" />
      </Link>
        <div className="new-book-index-title">{book.title}</div>
        <div className="new-book-index-author">{book.author}</div>
        <div className="new-book-index-narrator">{book.narrator}</div>
        <div className="new-book-index-length">{book.length}</div>
        <div>
          {book.unabridged ? "unabridged" : "abridged" }
        </div>
        <div className="new-book-index-description">{book.description}</div>
    </li>
  )
}

export default BookIndexItem;
