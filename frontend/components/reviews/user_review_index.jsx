import React from 'react';
import UserReviewIndexItem from './user_review_index_item';

class UserReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchUserReviews(this.props.userId);
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
      <div className="user-profile-reviews">
        {
          (this.props.currentUserId && this.props.currentUserId === Number(this.props.userId)) ?
          <div className="user-profile-my-reviews-title">MY REVIEWS</div> : null
        }
        <div className="user-profile-my-reviews">
          {
            sortedReviews.map((review, idx) => {
              return (
                !review ? null :
                <UserReviewIndexItem key={idx} rating={review.rating} review={review.review} book={review.book}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default UserReviewIndex;
