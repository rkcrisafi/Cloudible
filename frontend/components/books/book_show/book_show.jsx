import React from 'react';
import { Link } from 'react-router-dom';

class BookShow extends React.Component {
  componentDidMount() {
    // debugger
    this.props.fetchBook(this.props.match.params.bookId);
  }

  handleClick(e) {
    if (this.props.currentUserId) {
      this.props.addBook(this.props.currentUserId, this.props.book.id).then(() => this.props.history.push("/library"));
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
  // debugger
  return (
    <div>
      <div className="book-show-book-section">
        <div className="book-show-book">
          <img src={book.imageUrl} width="232" height="232"  className="show-book-image"/>
          <audio controls src="http://s3.us-east-2.amazonaws.com/cloudible-dev/audio/ladysusan_1_austen_64kb.mp3"/>
          <div className="book-show-description">

            <h1 className="book-show-title">{book.title}</h1>
            <div className="book-show-by">By: {book.author}</div>
            <div className="book-show-narrator-name">Narrated by: {book.narrator}</div>
            <div className="book-show-length">Length: {book.length}</div>
            <div className="book-show-format">{book.unabridged ? "Unabridged" : "Abridged" }</div>
            <div className="book-show-language">Language: {book.language}</div>
          </div>
        </div>
          <div className="show-book-buy-button">
            { this.props.currentUser && this.props.currentUser.bookIds.includes(book.id) ?
              <button className="book-show-listen-now-button">Listen Now</button> :
              <button onClick={this.handleClick.bind(this)} className="book-show-free-button">Free Trial</button>}
            <div className="book-show-division-or">
              <hr className="book-show-divider-left"/>
              <div className="book-show-or">OR</div>
              <hr className="book-show-divider-right"/>
            </div>
            { this.props.currentUser && this.props.currentUser.bookIds.includes(book.id) ?
              <button className="book-show-in-your-library-button" onClick={() => this.props.history.push("/library")}>In your library</button> :
              <button onClick={this.handleClick.bind(this)} className="book-show-on-us-button">This One on Us</button> }
          </div>
        </div>
    </div>
    );
  }
}
export default BookShow;
