import React from 'react';
import BookIndexItem from './book_index_item_homepage';
import shuffle from '../../../util/_shuffle';
import Slider from 'react-slick';


class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { idx: null };
    this.books = [];
  }

  componentDidMount() {
    this.props.fetchBooks();


    $('.slick-prev').css("background-color", "black");
    $('.slick-next').css("background-color", "black");
    $('.slick-prev').css("width", "40px");
    $('.slick-next').css("width", "40px");
    $('.slick-prev').css("height", "60px");
    $('.slick-next').css("height", "60px");
    $('.slick-prev').css("color", "60px");
    $('.slick-next').css("height", "60px");
    $('.slick-next').css("font-size", "40px");
    $('.slick-prev').css("background-color", "gray");
    $('.slick-prev').css("opacity", "0.8");
    $('.slick-next').css("opacity", "0.8");
    $('.slick-next').css("background-color", "gray");
    $('.slick-prev').css("left", "0px");
    $('.slick-prev').css("z-index", "200");
    $('.slick-next').css("right", "15px");
    $('.slick-next').css("z-index", "200");

    // console.log(":here");
    const that = this;
    setTimeout(() => $('.homepage-each-element').hover(
      (e) => {
        console.log();
        let idx = parseInt(e.currentTarget.dataset.index);
        console.log(idx);

        if (idx !== that.state.idx) {
          that.setState({ idx });
        }
        let top;
        let left;
        // debugger
        if ((idx+1) % 4 === 3 || (idx+1) % 4 === 0 ) {
          top = $(e.currentTarget).offset().top;
          left = $(e.currentTarget).offset().left - 285;
        } else {
          top = $(e.currentTarget).offset().top;
          left = $(e.currentTarget).offset().left + 250;
        }
        $('.hbook-index-description').css({display: "block", 'top': top, 'left': left });

    },
      (e) => {
        $('.hbook-index-description').css("display", "none");

    }), 50);

  }

  componentWillReceiveProps(newProps) {
    if (newProps.books) {
      this.books = shuffle(newProps.books.concat(newProps.books)).slice(0,20);
    }
  }

  render () {

    let description;
    if (this.state.idx) {
      description  = this.books[this.state.idx].summary.slice(0,500) + "...";
    }

    let settings = {
      // accessibility: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      vertical: false

    };
    return (
      <div >
        <ul>
          <Slider {...settings} className="homepage-slider">
            {
            this.books.map((book, idx) => (
                <div key={idx} className="homepage-each-element">
                  <BookIndexItem  book={book} idx={idx} data-idx={idx}/>
                </div>
              ))
            }
          </Slider>
            {this.state.idx ? (<div className="hbook-index-description">
              <div className="hbook-index-title">{this.books[this.state.idx].title}</div>

                <div className="hbook-index-format-length">
                  <div className="hbook-format">{this.books[this.state.idx].unabridged ? "UNABRIDGED " : "ABRIDGED " }
                </div>
                  <div className="hbook-index-length">
                    {this.books[this.state.idx] !== undefined  ? (this.books[this.state.idx].length) :
                    null}
                  </div>
                </div>

              <div className="hbook-index-author-line">
                <div className="hbook-index-by">By </div>
                <div className="hbook-index-author"> {this.books[this.state.idx].author}</div>
              </div>
              <div className="hbook-index-narrator-line">
                <div className="hbook-index-narrator">Narrated By</div>
                <div className="hbook-index-narrator-name">{this.books[this.state.idx].narrator}</div>
              </div>
              <div className="hbook-index-summary">{description}</div>
            </div>) : (null)}
        </ul>
      </div>
    );
  }
}

export default BookList;
