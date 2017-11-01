import React from 'react';
import { BookSingleList, BookDoubleList } from './book_index_container_homepage';

const BookIndex = props => {
  return (
    <div>
      <div className="best-sellers">Best Sellers</div>
      <BookSingleList className="bookSingleList"/>
      <div className="new-releases">New Releases</div>
      <BookDoubleList className="bookDoubleList"/>
      <div className="new-at-audible">New at Cloudible</div>
      <BookSingleList className="bookSingleList"/>
      <div className="top-books">Top Books of the Month</div>
      <BookSingleList className="bookSingleList"/>
      <div className="coming-soon">Coming soon</div>
      <BookDoubleList className="bookDoubleList"/>
    </div>
  );
};

export default BookIndex;
