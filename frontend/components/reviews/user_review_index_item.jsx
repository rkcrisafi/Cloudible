import React from 'react';
import BookShowRating from '../books/book_show/book_show_rating';
import { Link } from 'react-router-dom';


const UserReviewIndexItem = ({ rating, review, book }) => {
  const bookCover = book.imageUrl;

  return (
    <div className="user-profile-single-review">
      <div className="user-profile-book-info">
        <Link to={`/books/${book.id}`}>
          <img src={bookCover} width="200" height="200"  className="user-profile-book-image"/>
        </Link>
        <Link className="user-profile-book-title" to={`/books/${book.id}`}>{book.title}</Link>
        <div className="user-profile-unabridged">
          { (book.unabridged) ? "UNABRIDGED" : "ABRIDGED" }
        </div>
        <div className="user-profile-book-author">By {book.author}</div>
        <div className="user-profile-book-narrator">Narrated by {book.narrator}</div>
      </div>
      <div className="user-profile-ratings-review">
        <div className="user-profile-review-title">"{review.title}"</div>
        <div className="user-profile-ratings">
          <div className="user-profile-rating">Overall <BookShowRating count={rating.overall}/></div>
          <div className="user-profile-rating">Performance <BookShowRating count={rating.performance}/></div>
          <div className="user-profile-rating">Story <BookShowRating count={rating.story}/></div>
        </div>

        <div className="user-profile-review-body">{review.body}</div>
      </div>

    </div>
  )
}

export default UserReviewIndexItem;
