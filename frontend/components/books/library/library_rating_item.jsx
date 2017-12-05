import React from 'react';

class LibraryRatingItem extends React.Component {
  constructor(props) {
    super(props);

  this.handleHover = this.handleHover.bind(this);
  this.handleHoverOff = this.handleHoverOff.bind(this);
  this.handleClick = this.handleClick.bind(this);

  this.state = { hover: false, hoverIndex: null };
  }

  handleHover(num) {
    this.setState({ hover: true, hoverIndex: num });
  }

  handleHoverOff() {
    this.setState({ hover: false, hoverIndex: null });
  }

  handleClick(num) {
    debugger
    let type = this.props.type;
    if (this.props.number) {
      this.props.updateRating(this.props.bookId, { [type]: num });
    } else {
      this.props.addRating(this.props.bookId, { [type]: num });
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
