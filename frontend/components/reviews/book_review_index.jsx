import React from 'react';
import BookReviewIndexItem from './book_review_index_item';

class BookReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookReviews(this.props.bookId);
  }

  render() {
    let sortedReviews = [];
    if (this.props.reviews) {
      sortedReviews = this.props.reviews.sort((a, b) => {
        if (a.review.created_at < b.review.created_at) {
          return 1;
        } else if (a.review.created_at > b.review.created_at) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    return (
      <div className="book-review-index">
        {
          sortedReviews.map((review, idx) => {
            return (
              !review ? null :
              <BookReviewIndexItem key={idx} rating={review.rating} review={review.review} />
            );
          })
        }
      </div>
    );
  }
}

export default BookReviewIndex;
