import React from 'react';

const LibraryRatingItem = ({ type, name }) => {
  // let features = [overall, performance, story];


  return (
    <div className="library-rating-line">
      <div className="library-rating-type">

        <div className="library-rating-type-name">
          {name}
        </div>

        <div className="library-rating-just-stars">
          { type ? <i className="fa fa-star" aria-hidden="true"></i> :
            <i className="fa fa-star-o" aria-hidden="true"></i> }

          { type && type > 1 ? <i className="fa fa-star" aria-hidden="true"></i> :
            <i className="fa fa-star-o" aria-hidden="true"></i>}
          { type && type > 2 ? <i className="fa fa-star" aria-hidden="true"></i> :
            <i className="fa fa-star-o" aria-hidden="true"></i>}
          { type && type > 3 ? <i className="fa fa-star" aria-hidden="true"></i> :
            <i className="fa fa-star-o" aria-hidden="true"></i>}
          { type && type > 4 ? <i className="fa fa-star" aria-hidden="true"></i> :
            <i className="fa fa-star-o" aria-hidden="true"></i>}
        </div>
      </div>
    </div>

  )
}

export default LibraryRatingItem;
