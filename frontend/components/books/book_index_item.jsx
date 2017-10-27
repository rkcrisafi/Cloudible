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
      {book.title}
      {book.author}
      {book.narrator}
      {book.length}
      {book.unabridged ? "unabridged" : "abridged" }
      {book.description}
    </li>
  )
}

export default BookIndexItem;
