import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  books: state.search.Book
});

const mapDispatchToProps = dispatch => ({

});


class SearchResults extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    debugger
    return (
      <div className="search-result-page">
        {this.props.books.map((book) => {
         return (
          <div className="search-result-book">
            <Link to={`/books/${book.id}`} >
              <img src={book.imageUrl} width="150" height="150"  className="search-image-link"/>
            </Link>

            <div className="search-title-link"><Link to={`/books/${book.id}`}>{book.title}</Link></div>
            <div className="search-author">By {book.author}</div>
            <div className="search-narrator">Narrated By {book.narrator}</div>
            <div className="search-length">Length: {book.length}</div>

          </div>
        );
      })}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(SearchResults);
