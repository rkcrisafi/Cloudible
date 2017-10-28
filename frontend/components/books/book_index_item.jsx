import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookIndexItem = ({ book }) => {
  // debugger
  let description = book.summary.slice(0,500) + "...";
  return (
    <li>
      <div className="book-index-item">
        <Link to={`books/${book.id}`}>
            <img src={book.imageUrl} width="150" height="150"  className="index-book-image-link"/>
        </Link>
        <div className="book-index-outside-narrator">Narrator: {book.narrator}</div>
      </div>

      <div className="book-index-description">
          <div className="book-index-title">{book.title}</div>
          <div className="book-index-author">{book.author}</div>
          <div className="book-index-narrator">{book.narrator}</div>
          <div className="book-index-length">{book.length}</div>
          <div>
            {book.unabridged ? "unabridged" : "abridged" }
          </div>
        </div>
        <div className="new-book-index-description">{book.description}</div>
    </li>
  )
}

export default BookIndexItem;
