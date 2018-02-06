import React from 'react';

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
            <div className="write-review-book-cover">
              <img src={book.imageUrl} width="200" height="200"  className="write-review-book-image"/>
            </div>
            <div className="write-review-book-description">
              <div className="write-review-book-title">{book.title}</div>
              <div className="write-review-unabridged">{ (book.unabridged) ? "UNABRIDGED" : "ABRIDGED" }</div>
              <div className="write-review-author">by {book.author}</div>
              <div className="write-review-narrator">Narrated by {book.narrator}</div>
            </div>
          </div>
        }
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Enter a headline for your review:
            <input type="text" value={this.state.title} onChange={this.update('title')}/>
          </label>
          <label>Write your review in the space below:
            <textarea value={this.state.body} onChange={this.update('body')}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

}

export default ReviewForm;
