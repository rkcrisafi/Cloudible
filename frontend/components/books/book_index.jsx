import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.props.books.map(book => (
              <BookIndexItem key={book.id} book={book} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default BookIndex;
