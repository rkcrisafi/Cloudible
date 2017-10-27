import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookIndexItem = ({ book }) => {
  
  let description = book.summary.slice(0,500) + "..."
  return (
    <li>
      <Link to={`books/${book.id}`}>
        {book.image}
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
