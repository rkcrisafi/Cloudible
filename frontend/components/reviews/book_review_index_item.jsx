import React from 'react';
import BookShowRating from '../books/book_show/book_show_rating';

const BookReviewIndexItem = ({ rating, review }) => {
  const pic = review.userImageUrl;

  return (
    <div className="book-review-rating">
      <div className="book-review-rating-user">
        <div className="book-review-rating-stars">
          <div className="book-review-a-rating">
            <div className="book-review-a-rating-name">Overall</div>
            <BookShowRating count={rating.overall}/>
          </div>
          <div className="book-review-a-rating">
            <div className="book-review-a-rating-name">Performance</div>
            <BookShowRating count={rating.performance} />
          </div>
          <div className="book-review-a-rating">
            <div className="book-review-a-rating-name">Story</div>
            <BookShowRating count={rating.story} />
          </div>
        </div>
        <div className="book-review-user">
          <div className="book-review-user-pic">
            <img src={pic} width="40" height="40"  className="book-review-user-image"/>
          </div>
          <div className="book-review-user-date">
            <div className="book-review-first-name">{review.first_name}</div>
            <div className="book-review-date-created">{review.created_at.slice(5,10)}-{review.created_at.slice(2,4)}</div>
          </div>
        </div>
      </div>
      <div className="book-review">
        <div className="book-review-title">"{review.title}"</div>
        <div className="book-review-body">{review.body}</div>
      </div>
    </div>
  )
}

export default BookReviewIndexItem;
