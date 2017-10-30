import React from 'react';
import { Link } from 'react-router-dom';

class BookShow extends React.Component {
  componentDidMount() {
    // debugger
    this.props.fetchBook(this.props.match.params.bookId);
  }

  handleClick(e) {
    if (this.props.currentUserId) {
      this.props.addBook(this.props.currentUserId, this.props.bookId).then(() => this.props.history.push("/library"));
    } else {
      this.props.history.push("/login");
    }

  }

render () {
  console.log(this.props.book);
  const book = this.props.book;
  if (!book) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <div className="book-show-book">
        <img src={book.imageUrl} width="400" height="400"  className="show-book-image"/>
        <div className="book-show-description">
          <h1 className="book-show-title">{book.title}</h1>
            <div className="book-show-author-line">
              <div className="book-show-by">By {book.author}</div>
              <div className="book-show-author"> {book.author}</div>
            </div>
            <div className="book-show-narrator-line">
              <div className="book-show-narrator">Narrated By</div>
              <div className="book-show-narrator-name">{book.narrator}</div>
            </div>
            <div className="book-show-length-line">
              <div className="book-show-duration">Length:</div>
              <div className="book-show-length">{book.length}</div>
            </div>
            <div className="book-show-format">{book.unabridged ? "Unabridged" : "Abridged" }</div>
            <div className="book-show-language-line">
              <div className="book-show-language">Languages:</div>
              <div className="book-show-language">{book.language}</div>
            </div>
          </div>
        </div>
        <div className="show-book-buy-button">

          <button onClick={this.handleClick.bind(this)}>Free Trial</button>
          <button onClick={this.handleClick.bind(this)}>This One on Us</button>
        </div>
    </div>
    );
  }
}
export default BookShow;
