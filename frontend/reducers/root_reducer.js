import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import { combineReducers } from 'redux';
import BooksReducer from './book_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  books: BooksReducer
});
