import React from 'react';
import BookIndexItem from './book_index_item_homepage';
import shuffle from '../../../util/_shuffle';
import Slider from 'react-slick';


class BookIndex extends React.Component {

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
    $('.slick-arrow .slick-next').css("font-size", "40px");

    // $('.homepage-each-element').hover



  }

  render () {
    let books = this.props.books.concat(this.props.books);
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
            shuffle(books).slice(0,20).map((book, idx) => (
                <li style={{position: "relative"}} className="homepage-each-element"><BookIndexItem key={book.id} book={book} idx={idx} style={{position: "absolute"}}/></li>
              ))
            }
          </Slider>
        </ul>
      </div>
    );
  }
}

export default BookIndex;
