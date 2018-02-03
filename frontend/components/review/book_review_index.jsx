import React from 'react';
import BookReviewIndexItem from 'book_review_index_item';

class BookReviewIndex extends React.Component {
  consrtuctor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookReviews(this.props.bookId);
  }

  render() {
    return (
      <div>
        {
          this.props.reviews.map((review, idx) => (
            <BookReviewIndexItem key={idx} rating={review.rating} review={review.review}/>
          ))
        }
      </div>
    );
  }
}

export default BookReviewIndex;
