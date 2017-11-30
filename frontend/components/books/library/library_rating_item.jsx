import React from 'react';

const LibraryRatingItem = ({ type }) => {
  // let features = [overall, performance, story];
  return (
    <div className="library-rating-line">
        { type ? <i class="fa fa-star" aria-hidden="true"></i> :
          <i class="fa fa-star-o" aria-hidden="true"></i> }

       { type && type > 1 ? <i class="fa fa-star" aria-hidden="true"></i> :
         <i class="fa fa-star-o" aria-hidden="true"></i>}
       { type && type > 2 ? <i class="fa fa-star" aria-hidden="true"></i> :
         <i class="fa fa-star-o" aria-hidden="true"></i>}
       { type && type > 3 ? <i class="fa fa-star" aria-hidden="true"></i> :
         <i class="fa fa-star-o" aria-hidden="true"></i>}
       { type && type > 4 ? <i class="fa fa-star" aria-hidden="true"></i> :
         <i class="fa fa-star-o" aria-hidden="true"></i>}
    </div>

  )
}

export default LibraryRatingItem;
