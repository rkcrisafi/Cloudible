import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookIndexItem = ({ book, idx }) => {
  // debugger
  let fullDescription = null;
  return (
    <li>
      <div className="hbook-index-item">
        <Link to={`/books/${book.id}`}>
            <img src={book.imageUrl} width="230" height="230"  className="hindex-book-image-link"/>
        </Link>

        <div>{((idx+1) % 4 === 3 || (idx+1) % 4 === 0) ?
            <div className="hright-side-drop">{fullDescription}</div> :
            <div className = "hleft-side-drop">{fullDescription}</div>}
        </div>

      </div>

    </li>
  )
}

export default BookIndexItem;
