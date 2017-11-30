import React from 'react';
import { Link } from 'react-router-dom';
import LibraryRatingItem from './library_rating_item';

const LibraryItem = ({ book }) => {

  return (
    <tr>
      <td><img src={book.imageUrl} width="90" height="90"  className="library-image-link"/></td>
      <td><Link to={`/books/${book.id}`}>{book.title}</Link></td>
      <td>{book.author}</td>
      <td>{book.length}</td>
      <td>
        <div className="library-rating-stars">
          <LibraryRatingItem type={book.overall}/>
          <LibraryRatingItem type={book.performance}/>
          <LibraryRatingItem type={book.story}/>
        </div>
        <div>Write a review link</div>
      </td>
    </tr>
  )
}

export default LibraryItem;
