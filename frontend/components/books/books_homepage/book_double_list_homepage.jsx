import React from 'react';
import BookIndexItem from './book_list_item';
import shuffle from '../../../util/_shuffle';
import Slider from 'react-slick';
import BookShowRating from '../book_show/book_show_rating';


class BookDoubleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { idx: null };
    this.books = [];
  }

  componentDidMount() {
    this.props.fetchBooks();


    $('.slick-prev').css("width", "40px");
    $('.slick-next').css("width", "40px");
    $('.slick-prev').css("height", "60px");
    $('.slick-next').css("height", "60px");
    $('.slick-prev').css("background-color", "gray");
    $('.slick-prev').css("opacity", "0.8");
    $('.slick-next').css("opacity", "0.8");
    $('.slick-next').css("background-color", "gray");
    $('.slick-prev').css("left", "5px");
    $('.slick-prev').css("top", "150px");
    $('.slick-next').css("top", "150px");
    $('.slick-prev').css("z-index", "99");
    $('.slick-next').css("z-index", "99");



    const that = this;
    setTimeout(() => $('.lhomepage-each-element ').hover(
      (e) => {
        let idx = parseInt(e.currentTarget.dataset.idx);
        let book_idx = parseInt(e.currentTarget.dataset.bookId);

        if (book_idx !== that.state.idx) {
          that.setState({ idx: book_idx });
        }
        let top;
        let left;
        if ((idx+1) % 6 === 0 ) {
          top = $(e.currentTarget).offset().top;
          left = $(e.currentTarget).offset().left - 305;
        } else if ((idx+1) % 6 === 1 ) {
          top = $(e.currentTarget).offset().top;
          left = $(e.currentTarget).offset().left + 340;
        } else {
          top = $(e.currentTarget).offset().top;
          left = $(e.currentTarget).offset().left + 150;
        }
        $('.lbook-index-description').css({display: "block", 'top': top, 'left': left });

    },
      (e) => {
        $('.lbook-index-description').css("display", "none");

    }), 1400);

  }

  componentWillReceiveProps(newProps) {
    if (newProps.books && this.books.length === 0) {
      this.books = shuffle(newProps.books).slice(0,12);
    }
  }

  makeNewList(arr) {
    let newLength = arr.length - (arr.length % 6);
    let result = [];
    let mini = [];
    arr.slice(0,newLength).forEach((book, idx) => {

      if ((idx+1) % 6 === 1 || (idx+1) % 6 === 0) {
        result.push({book, idx});
      } else {
        mini.push({book, idx});
        if (mini.length === 4) {
          result.push(mini);
          mini = [];
        }
      }
    });
    return result;
  }

  render () {

    let correct_book_id_books = [];
    if (this.state.idx) {
      correct_book_id_books = this.books.filter(book => book.id === this.state.idx);
    }

    const hovBook = correct_book_id_books[0];

    let description;

    if (this.state.idx) {
      description  = hovBook.summary.slice(0,500) + "...";
    }

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      vertical: false

    };
    return (
      <div >
        <ul>
          <Slider {...settings} className="lhomepage-slider">
            {


            this.makeNewList(this.books).map((book, idx) => (

              <div key={idx}>
                <BookIndexItem idx={idx} book={book}/>
              </div>
              ))
            }
          </Slider>
            {this.state.idx ? (<div className="lbook-index-description">
              <div className="hbook-index-title">{hovBook.title}</div>

              <div className="hbook-index-format-length">
                <div className="hbook-format">{hovBook.unabridged ? "UNABRIDGED " : "ABRIDGED " }
              </div>
                <div className="hbook-index-length">
                  {hovBook !== undefined  ? (hovBook.length) :
                  null}
                </div>
              </div>

              <div className="hbook-index-ratings">
                <div className="hbook-index-rating">
                  <div className="hbook-index-rating-name">Overall</div>
                  <BookShowRating count={hovBook.overallRating} orange={true}/>
                  <div className="hbook-index-rating-number">
                    {hovBook.numOverallRatings}</div>
                  </div>
                <div className="hbook-index-rating">
                  <div className="hbook-index-rating-name">Performance</div>
                  <BookShowRating count={hovBook.performanceRating} orange={true}/>
                  <div className="hbook-index-rating-number">
                    {hovBook.numPerformanceRatings}
                  </div>
                </div>
                <div className="hbook-index-rating">
                  <div className="hbook-index-rating-name">Story</div>
                  <BookShowRating count={hovBook.storyRating} orange={true}/>
                  <div className="hbook-index-rating-number">
                    {hovBook.numStoryRatings}
                  </div>
                </div>
              </div>

              <div className="hbook-index-author-line">
                <div className="hbook-index-by">By </div>
                <div className="hbook-index-author"> {hovBook.author}</div>
              </div>
              <div className="hbook-index-narrator-line">
                <div className="hbook-index-narrator">Narrated By</div>
                <div className="hbook-index-narrator-name">{hovBook.narrator}</div>
              </div>
              <div className="hbook-index-summary">{description}</div>
            </div>) : (null)}
        </ul>
      </div>
    );
  }
}

export default BookDoubleList;
