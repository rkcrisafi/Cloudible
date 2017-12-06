import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BookShowRating from '../book_show/book_show_rating';

const BookIndexItem = ({ book, idx, audio, audioId, handleAudioClick }) => {
  let description = book.summary.slice(0,500) + "...";
  let fullDescription = (
    <div className="book-index-description">
      <div className="book-index-title">{book.title}</div>
      <div className="book-index-author-line">
        <div className="book-index-by">By: </div>
        <div className="book-index-author"> {book.author}</div>
      </div>
      <div className="book-index-description-rating">
        <BookShowRating count={book.overallRating}/>
        <div
          className="book-index-rating-number">{book.numOverallRatings.num_overall_ratings} ratings
        </div>
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

          <div className="book-index-book-player">
            <Link to={`/books/${book.id}`} >
              <img src={book.imageUrl} width="150" height="150"  className="index-book-image-link"/>
            </Link>

            <div onClick={() => handleAudioClick(audioId, idx, book, audio)} className="book-index-audio">
              { (idx === audioId && audio.paused) || (audioId === null || idx !== audioId) ?
                <i className="fa fa-play-circle" aria-hidden="true"></i> :
                <i className="fa fa-pause-circle" aria-hidden="true"></i>
              }
            </div>
          </div>

        <div className="book-index-outside-narrator-line-rating">
          <div className="book-index-outside-narrator-line">
            <div className="book-index-outside-narrator">Narrator:</div>
            <div className="book-index-outside-narrator-name">{book.narrator}</div>
          </div>
          <div className="book-index-rating">
            <BookShowRating count={book.overallRating}/>
          </div>
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
