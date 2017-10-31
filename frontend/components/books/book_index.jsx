import React from 'react';
import BookIndexItem from './book_index_item';
import shuffle from '../../util/_shuffle';

class BookIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = { audioIdx: null };
  }


  componentDidMount() {
    this.props.fetchBooks();
  }

  handleAudioState (oldIdx, newIdx, book) {
    if (oldIdx === newIdx) {
      audio.toggleAudio();
    } else {
      $(".book-index-audio").attr("src", book.audioUrl);
    }
    this.setState({ audioIdx: newIdx });
  }

  toggleAudio () {
    //audio comes from somewhere
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  render () {
    let theAudio = (
      <audio controls>
        <source src="http://s3.us-east-2.amazonaws.com/cloudible-dev/audio/ladysusan_1_austen_64kb.mp3" type="audio/mp3"/>
      </audio>);
    return (
      <div className = "book-index">
        <ul className="book-index-list">
          {
          shuffle(this.props.books).slice(0,12).map((book, idx) => (
              <BookIndexItem key={book.id} audioId={audioIdx} book={book} idx={idx} audio={theAudio}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default BookIndex;
