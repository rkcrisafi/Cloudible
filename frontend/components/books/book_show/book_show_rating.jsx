import React from 'react';

const BookShowRating = ({ type, number }) => {
  // let features = [overall, performance, story];
  const star = <div className="book-show-full-star"><img src='/assets/stars/full_star.png' width="15" height="15"/></div>
  const halfStar = <div className="book-show-half-star"><img src='/assets/stars/half_star.png' width="15" height="15"/></div>
  const emptyStar = <div className="book-show-empty-star"><img src='/assets/stars/empty_star.png' width="15" height="15"/></div>

  return (
    <div className="book-show-rating-line">
      <div className="book-show-rating-type">
        <div className="book-show-rating-just-stars">
          { type ? star :
            <div>
              {emptyStar}{emptyStar}{emptyStar}{emptyStar}{emptyStar}
            </div>
          }

          { type && type < 1.4 ? emptyStar : null }
          { type && type > 1 && type >= 1.4 && type < 1.9 ? halfStar : null }
          { type && type >= 1.9 ? star : null }

          { type && type < 2.4 ? emptyStar : null }
          { type && type > 2 && type >= 2.4 && type < 2.9 ? halfStar : null }
          { type && type >= 2.9 ? star : null }

          { type && type < 3.4 ? emptyStar : null }
          { type && type > 3 && type >= 3.4 && type < 3.9 ? halfStar : null }
          { type && type >= 3.9 ? star : null }

          { type && type < 4.4 ? emptyStar : null }
          { type && type > 4 && type >= 4.4 && type < 4.9 ? halfStar : null }
          { type && type === 5 ? star : null }
        </div>

        <div>
          {type}
        </div>

        <div className="book-show-rating-number">
          ({number} { number > 1 ? "ratings" : "rating" })
        </div>
      </div>
    </div>

  )
}

export default BookShowRating;
