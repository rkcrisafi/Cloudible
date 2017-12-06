import React from 'react';
import { Link } from 'react-router-dom';
import LibraryRatingItem from './library_rating_item';

const LibraryItem = ({ book, addRating, updateRating }) => {

  return (
    <tr>
      <td><img src={book.imageUrl} width="90" height="90"  className="library-image-link"/></td>
      <td><Link to={`/books/${book.id}`}>{book.title}</Link></td>
      <td>{book.author}</td>
      <td>{book.length}</td>
      <td>
        <div className="library-rating-stars">
          <LibraryRatingItem book={book} type={"overall"} number={book.overall} name="Overall" addRating={addRating} updateRating={updateRating} bookId={book.id}/>
          <LibraryRatingItem book={book} type={"performance"} number={book.performance} name="Performance" addRating={addRating} updateRating={updateRating} bookId={book.id}/>
          <LibraryRatingItem book={book} type={"story"} number={book.story} name="Story" addRating={addRating} updateRating={updateRating} bookId={book.id}/>
        </div>
        <div>Write a review link</div>
      </td>
    </tr>
  )
}

export default LibraryItem;
