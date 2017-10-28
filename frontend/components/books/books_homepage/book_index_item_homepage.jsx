import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookIndexItem = ({ book, idx }) => {
  // debugger
  let description = book.summary.slice(0,500) + "...";
  let fullDescription = (
    <div className="hbook-index-description">
      <div className="hbook-index-title">{book.title}</div>

        <div className="hbook-index-format-length">
          <div className="hbook-format">{book.unabridged ? "UNABRIDGED " : "ABRIDGED " }
        </div>
          <div className="hbook-index-length">
            {book.length !== undefined  ? (book.length) :
            null}
          </div>
        </div>

      <div className="hbook-index-author-line">
        <div className="hbook-index-by">By </div>
        <div className="hbook-index-author"> {book.author}</div>
      </div>
      <div className="hbook-index-narrator-line">
        <div className="hbook-index-narrator">Narrated By</div>
        <div className="hbook-index-narrator-name">{book.narrator}</div>
      </div>
      <div className="hbook-index-summary">{description}</div>
    </div>
  );
  return (
    <li>
      <div className="hbook-index-item">
        <Link to={`books/${book.id}`}>
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
