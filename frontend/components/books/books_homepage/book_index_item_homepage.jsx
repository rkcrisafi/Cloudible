import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookIndexItem = ({ book }) => {
  let fullDescription = null;
  return (
    <li>
      <div className="hbook-index-item">
        <Link to={`/books/${book.id}`}>
            <img src={book.imageUrl} width="230" height="230"  className="hindex-book-image-link"/>
        </Link>
      </div>

    </li>
  )
}

export default BookIndexItem;
