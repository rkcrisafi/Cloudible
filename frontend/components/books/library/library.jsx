import React from 'react';
import LibraryItem from './library_index_item';

class Library extends React.Component {

  componentDidMount() {
    this.props.fetchBook(book);
    this.props.deleteBook(user_id, book_id);
    this.props.showLibrary(user_id);
  }
}
