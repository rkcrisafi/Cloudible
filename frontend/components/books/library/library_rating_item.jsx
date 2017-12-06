import React from 'react';

class LibraryRatingItem extends React.Component {
  constructor(props) {
    super(props);

  this.handleHover = this.handleHover.bind(this);
  this.handleHoverOff = this.handleHoverOff.bind(this);
  this.handleClick = this.handleClick.bind(this);

  this.state = { hover: false, hoverIndex: null, clicked: false };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.hover !== this.state.hover || nextState.hoverIndex !== this.state.hoverIndex;
  // }

// componentDidMount() {
//   this.props.showLibrary();
// }

  handleHover(num) {
    this.setState({ hover: true, hoverIndex: num });
  }

  handleHoverOff() {
    this.setState({ hover: false, hoverIndex: null });
  }

  handleClick(num) {
    let bookId = this.props.book.id;
    let book = this.props.book;
    let ratingId = this.props.book.ratingId;
    let type = this.props.type;
    if (book.overall || book.performance || book.story) {
      this.props.updateRating(bookId, ratingId, { [type]: num + 1 });
    } else {
      this.props.addRating(bookId, { [type]: num + 1 });
    }
  }

  render() {
    let name = this.props.name;
    let number = this.props.number;
    const stars = [0,1,2,3,4].map(num => {

      let className;
      if (this.state.hover) {
        className = this.state.hoverIndex >= num ? "fa fa-star" : "fa fa-star-o";
      } else {
        className = number && number > num ? "fa fa-star" : "fa fa-star-o";
      }


      return <i onMouseEnter={() => this.handleHover(num)} onMouseLeave={this.handleHoverOff} onClick={() => this.handleClick(num)} className={className} aria-hidden="true"></i>;
    });
    return (
      <div className="library-rating-line">
        <div className="library-rating-type">

          <div className="library-rating-type-name">
            {name}
          </div>

          <div className="library-rating-just-stars">
            {stars.map(star => star)}
          </div>
        </div>
      </div>
    );

  }

}

export default LibraryRatingItem;
