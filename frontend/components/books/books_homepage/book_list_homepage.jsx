import React from 'react';
import BookIndexItem from './book_index_item_homepage';
import shuffle from '../../../util/_shuffle';
import Slider from 'react-slick';
import BookShowRating from '../book_show/book_show_rating';


class BookList extends React.Component {
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
    $('.slick-prev').css("left", "0px");
    $('.slick-prev').css("z-index", "99");
    $('.slick-next').css("right", "15px");
    $('.slick-next').css("z-index", "99");

    const that = this;
    setTimeout(() => $('.homepage-each-element').hover(
      (e) => {
        let idx = parseInt(e.currentTarget.dataset.index);
        let book_idx = parseInt(e.currentTarget.dataset.bookId);
        //if we use book_idx here we may get it working
        if (book_idx !== that.state.idx) {
          that.setState({ idx: book_idx });
        }
        let top;
        let left;
        //
        if ((idx+1) % 4 === 0 ) {
          top = $(e.currentTarget).offset().top;
          left = $(e.currentTarget).offset().left - 305;
        } else {
          top = $(e.currentTarget).offset().top;
          left = $(e.currentTarget).offset().left + 260;
        }
        $('.hbook-index-description').css({display: "block", 'top': top, 'left': left });

    },
      (e) => {
        $('.hbook-index-description').css("display", "none");

    }), 500);

  }

  componentWillReceiveProps(newProps) {
    if (newProps.books && this.books.length === 0) {
      this.books = shuffle(newProps.books.concat(newProps.books)).slice(0,20);
    }
  }

  render () {
    const correct_book_id_books = this.books.filter(book => book.id === this.state.idx);
    //
    //if we set const correct_book_id_books = this.books.filter(book => book.id === this.state.idx)
    //it will give us all of the books with the correct book id
    //then we can just say correct_book_id_books[0] and grab the first book
    //this book should have the correct description
    const hovBook = correct_book_id_books[0];
    let description;
    if (hovBook) {
      description  = hovBook.summary.slice(0,500) + "...";
    }

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      vertical: false

    };
    return (
      <div>
        <ul>
          <Slider {...settings} className="homepage-slider">
            {
            this.books.map((book, idx) => (
                <div key={idx} data-book-id={book.id} data-idx={idx} className="homepage-each-element">
                  <BookIndexItem  book={book} idx={idx} />
                </div>
              ))
            }
          </Slider>
            {this.state.idx && hovBook ? (<div className="hbook-index-description">
              <div className="hbook-index-title">{hovBook.title}</div>

              <div className="hbook-index-format-length">
                <div
                  className="hbook-format">{hovBook.unabridged ? "UNABRIDGED " : "ABRIDGED " }
                </div>

                <div className="hbook-index-length">
                  {hovBook !== undefined  ? (hovBook.length) :
                  null}
                </div>
              </div>

              <div className="hbook-index-ratings">
                <div className="hbook-index-rating">
                  <div className="hbook-index-rating-name">Overall</div>
                  <BookShowRating count={hovBook.overallRating.overall_rating}/>
                  <div className="hbook-index-rating-number">
                    {hovBook.numOverallRatings.num_overall_ratings}</div>
                  </div>
                <div className="hbook-index-rating">
                  <div className="hbook-index-rating-name">Performance</div>
                  <BookShowRating count={hovBook.performanceRating.performance_rating}/>
                  <div className="hbook-index-rating-number">
                    {hovBook.numPerformanceRatings.num_performance_ratings}
                  </div>
                </div>
                <div className="hbook-index-rating">
                  <div className="hbook-index-rating-name">Story</div>
                  <BookShowRating count={hovBook.storyRating.story_rating}/>
                  <div className="hbook-index-rating-number">
                    {hovBook.numStoryRatings.num_story_ratings}
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

export default BookList;
