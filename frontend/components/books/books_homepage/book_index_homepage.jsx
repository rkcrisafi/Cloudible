import React from 'react';
import { BookSingleList, BookDoubleList } from './book_index_container_homepage';

const BookIndex = props => {
  return (
    <div>
      <BookSingleList className="bookSingleList"/>
      <BookDoubleList className="bookDoubleList"/>
      <BookSingleList className="bookSingleList"/>
      <BookSingleList className="bookSingleList"/>
      <BookDoubleList className="bookDoubleList"/>
    </div>
  );
};

export default BookIndex;
