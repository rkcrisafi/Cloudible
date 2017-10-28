import { connect } from 'react-redux';
import BookIndex from './book_index_homepage';
import { fetchBooks } from '../../../actions/book_actions';

const mapStateToProps = state => ({
  books: Object.keys(state.books).map(id => state.books[id])
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIndex);
