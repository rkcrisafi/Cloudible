import React from 'react';
import BookIndexItem from './book_index_item';
import shuffle from '../../util/_shuffle';

class BookIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = { audioIdx: null };
    this.books = [];
  }


  componentDidMount() {
    this.props.fetchBooks();
  }

  componentWillReceiveProps (newProps) {
    if (this.books.length === 0) {
      // debugger
      this.books = shuffle(newProps.books).slice(0,12);
    }
  }

  handleAudioState (oldIdx, newIdx, book, audio) {
    // debugger
    if (oldIdx === newIdx) {
      this.toggleAudio(audio);
    } else {
      if (audio.paused) {
        audio.play();
      }
      // debugger
      $("audio").attr("src", book.audioUrl);
      audio.play();
      // debugger
    }
    this.setState({ audioIdx: newIdx });
  }

  toggleAudio (audio) {
    //audio comes from somewhere
    // debugger
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  render () {
    // debugger
    let theAudio = (
      <audio controls ref={audio => this.audio = audio}>
        <source src="" type="audio/mp3"/>
      </audio>
    );
      // debugger
    return (
      <div className = "book-index">
        <ul className="book-index-list">
          {
          this.books.map((book, idx) => (
              <BookIndexItem key={book.id} audioId={this.state.audioIdx} book={book} idx={idx} audio={this.audio} handleAudioClick={this.handleAudioState.bind(this)} />
            ))
          }
        </ul>
        <div className="book-index-the-only-audio">{theAudio}</div>
      </div>
    );
  }
}

export default BookIndex;
