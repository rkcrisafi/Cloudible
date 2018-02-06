import React from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "", body: "" };
  }

  componentDidMount() {
    this.props.fetchBook(this.props.bookId);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.title;
    let body = this.state.body;
    this.props.createReview(this.props.bookId, this.props.ratingId, { title, body })
      .then(data => this.props.history.push(`/library`));
  }

  render() {
    let book = this.props.book;
    return (
      <div className="write-review">
        {
          (!book) ? null :
          <div className="write-review-book">
            <Link to={`/books/${book.id}`} >
              <img src={book.imageUrl} width="200" height="200"  className="write-review-book-cover"/>
            </Link>

            <div className="write-review-book-description">
              <div className="write-review-book-title">{book.title}</div>
              <div className="write-review-unabridged">{ (book.unabridged) ? "UNABRIDGED" : "ABRIDGED" }</div>
              <div className="write-review-author">by {book.author}</div>
              <div className="write-review-narrator">Narrated by {book.narrator}</div>
            </div>
          </div>
        }
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="write-review-title">
            <div className="write-review-step-number">
              <div className="write-review-step">Step</div>
              <div className="write-review-stepnumber">1</div>
            </div>
            <label>
              <div className="write-review-enter-title">Enter a headline for your review:</div>
              <input type="text" value={this.state.title} onChange={this.update('title')} className="write-review-input"/>
            </label>
          </div>
          <div className="write-review-body">
            <div className="write-review-step-number">
              <div className="write-review-step">Step</div>
              <div className="write-review-stepnumber">2</div>
            </div>
            <label>
              <div className="write-review-enter-body">Write your review in the space below:</div>
              <textarea value={this.state.body} onChange={this.update('body')} className="write-review-textarea"/>
            </label>
          </div>
          <input type="submit" value="Submit" className="write-review-submit"/>
        </form>
      </div>
    );
  }

}

export default ReviewForm;
