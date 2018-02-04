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
    return (
      <div className="book-review-index">
        {
          this.props.reviews.map((review, idx) => {
            return (
              !review ? null :
              <BookReviewIndexItem key={idx} rating={review.rating} review={review.review}/>
            );
          })
        }
      </div>
    );
  }
}

export default BookReviewIndex;
