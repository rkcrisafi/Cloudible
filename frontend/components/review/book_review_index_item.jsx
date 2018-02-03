import React from 'react';
import BookShowRating from '../books/book_show/book_show_rating';

class BookReviewIndexItem = ({ rating, review }) => {
  return (
    <li>
      <div className="book-review-rating-stars">
        Overall      <BookShowRating count={rating.overall}/>
        Performance  <BookShowRating count={rating.performance} />
        Story        <BookShowRating count={rating.story} />
      </div>
      <div className="book-review-user">
        
      </div>
    </li>
  )
}
