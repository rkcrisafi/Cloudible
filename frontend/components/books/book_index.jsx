import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render () {
    return (
      <div className = "book-index">
        <ul className="book-index-list">
          {
            this.props.books.map((book, idx) => (
              <BookIndexItem key={book.id} book={book} idx={idx}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default BookIndex;
