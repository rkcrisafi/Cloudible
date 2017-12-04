import React from 'react';
import { Link } from 'react-router-dom';
import BookShowRating from './book_show_rating';

class BookShow extends React.Component {
  constructor (props) {
    super(props);

    this.state = { playing: false };

  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);

  }

  handleClick(e) {
    if (this.props.currentUserId) {
      this.props.addBook(this.props.currentUserId, this.props.book.id).then(() => this.props.history.push("/library"));
    } else {
      this.props.history.push("/login");
    }

  }

  toggleAudio (audio) {
    //audio comes from somewhere
    if (audio.paused) {
      audio.play();
      this.setState({playing: true});
    } else {
      audio.pause();
      this.setState({playing: false});

    }
  }

render () {
  const book = this.props.book;
  if (!book) {
    return <div>Loading....</div>;
  }
  let theAudio = (
    <audio controls ref={audio => this.audio = audio}>
      <source src={this.props.book.audioUrl} type="audio/mp3"/>
    </audio>);
  return (
    <div className="book-show-page">
      <div className="book-show-book-description-buttons">
        <div className="book-show-book-section">

          <div className="book-show-book">
            <div className="book-show-just-book">
              <img src={book.imageUrl} width="232" height="232"  className="show-book-image"/>
            </div>
            <div className="show-book-audio">{theAudio}</div>
            <div onClick={() => this.toggleAudio(this.audio)} className="book-show-audio">
              { !this.state.playing ?
                <i className="fa fa-play-circle" aria-hidden="true" font-size="13px"></i> :
                <i className="fa fa-pause-circle" aria-hidden="true"></i>
              }
              <div className="book-show-sample-word">Sample</div>
            </div>
          </div>

          <div>

            <div className="book-show-description">

              <h1 className="book-show-title">{book.title}</h1>
              <div className="book-show-by">By: {book.author}</div>
              <div className="book-show-narrator-name">Narrated by: {book.narrator}</div>
              <div className="book-show-length">Length: {book.length}</div>
              <div className="book-show-format">{book.unabridged ? "Unabridged" : "Abridged" }</div>
              <div className="book-show-language">Language: {book.language}</div>
              <BookShowRating type={book.overallRating} number={book.numOverallRatings.num_overall_ratings}/>
            </div>
          </div>
        </div>
        <div className="show-book-buy-button">
          { this.props.currentUser && this.props.currentUser.bookIds.includes(book.id) ?
            <button className="book-show-listen-now-button" onClick={() => this.toggleAudio(this.audio)}>Listen Now</button> :
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
        <div className="book-show-summary">
          <div className="book-show-summary-title">Summary</div>
          <div className="book-show-summary-body">{book.summary}</div>
        </div>

    </div>
    );
  }
}
export default BookShow;
