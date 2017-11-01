import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookIndexItem = ({ book, idx }) => {

  return (
    <li>
      { !Array.isArray(book) ? (
       <div data-idx={book.idx} className="lbook-index-item lhomepage-each-element">
          <Link to={`/books/${book.book.id}`}>
            <img src={book.book.imageUrl} className="lindex-book-image-link"/>
          </Link>
      </div>) :
        (<div className="lbook-small-book-index">
          {book.map((b, i) => (
            <Link data-idx={b.idx} key={i} to={`/books/${b.book.id}`}>
              <img data-idx={b.idx} src={b.book.imageUrl} width="140" height="140" className="lindex-book-small-image-link lhomepage-each-element"/>
            </Link>))}
        </div>)
          }
      </li>
    )
  }

export default BookIndexItem;
