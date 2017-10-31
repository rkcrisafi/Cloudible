import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookIndexItem = ({ book, idx, audio }) => {
  // debugger
  let description = book.summary.slice(0,500) + "...";
  let fullDescription = (
    <div className="book-index-description">
      <div className="book-index-title">{book.title}</div>
      <div className="book-index-author-line">
        <div className="book-index-by">By: </div>
        <div className="book-index-author"> {book.author}</div>
      </div>
      <div className="book-index-narrator-line">
        <div className="book-index-narrator">Narrator:</div>
        <div className="book-index-narrator-name">{book.narrator}</div>
      </div>
      <div className="book-index-length-line">
        <div className="book-index-duration">Duration:</div>
        <div className="book-index-length">{book.length}</div>
      </div>
      <div className="book-index-format-line">
        <div className="book-index-format">Format:</div>
        <div>{book.unabridged ? "Unabridged" : "Abridged" }</div>
      </div>
      <div className="book-index-summary">{description}</div>
    </div>
  );
  

  return (
    <li>
      <div className="book-index-item">
        <Link to={`/books/${book.id}`} >
          <div>
            <img src={book.imageUrl} width="150" height="150"  className="index-book-image-link"/>
            <div onClick={handleAudioClick} className="book-index-audio">{audio}</div>
          </div>
        </Link>

        <div className="book-index-outside-narrator-line">
          <div className="book-index-outside-narrator">Narrator:</div>
          <div className="book-index-outside-narrator-name">{book.narrator}</div>
        </div>

        <div>{((idx+1) % 6 === 5 || (idx+1) % 6 === 0) ?
            <div className="right-side-drop">{fullDescription}</div> :
            <div className = "left-side-drop">{fullDescription}</div>}
        </div>

      </div>

    </li>
  )
}

export default BookIndexItem;
