import React from 'react';

const BookShowRating = ({ count, number }) => {
  // let features = [overall, performance, story];
  const star = <div className="book-show-full-star"><img src='/assets/stars/full_star.png' width="15" height="15"/></div>
  const halfStar = <div className="book-show-half-star"><img src='/assets/stars/half_star.png' width="15" height="15"/></div>
  const emptyStar = <div className="book-show-empty-star"><img src='/assets/stars/empty_star.png' width="15" height="15"/></div>

  return (
    <div className="book-show-rating-line">
      <div className="book-show-rating-type">
        <div className="book-show-rating-just-stars">
          { count ? star :
            <div className="book-show-no-ratings">
              {emptyStar}{emptyStar}{emptyStar}{emptyStar}{emptyStar}
            </div>
          }

          { count && count < 1.4 ? emptyStar : null }
          { count && count > 1 && count >= 1.4 && count < 1.9 ? halfStar : null }
          { count && count >= 1.9 ? star : null }

          { count && count < 2.4 ? emptyStar : null }
          { count && count > 2 && count >= 2.4 && count < 2.9 ? halfStar : null }
          { count && count >= 2.9 ? star : null }

          { count && count < 3.4 ? emptyStar : null }
          { count && count > 3 && count >= 3.4 && count < 3.9 ? halfStar : null }
          { count && count >= 3.9 ? star : null }

          { count && count < 4.4 ? emptyStar : null }
          { count && count > 4 && count >= 4.4 && count < 4.9 ? halfStar : null }
          { count && count === 5 ? star : null }
        </div>

        <div className="book-show-number-of-ratings">
          {count.overall_rating}
        </div>

        <div className="book-show-rating-ratings">
          ({number.num_overall_ratings} { number.num_overall_ratings > 1 ? "ratings" : "rating" })
        </div>
      </div>
    </div>

  )
}

export default BookShowRating;
