import { connect } from 'react-redux';
import BookList from './book_list_homepage';
import BookDList from './book_double_list_homepage';
import { fetchBooks } from '../../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    books: Object.keys(state.books).map(id => state.books[id])
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks())
});

export const BookSingleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

export const BookDoubleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDList);
