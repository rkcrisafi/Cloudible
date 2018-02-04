import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import { combineReducers } from 'redux';
import BooksReducer from './book_reducer';
import SearchReducer from './search_reducer';
import UserReducer from './user_reducer';
import RatingReducer from './rating_reducer';
import ReviewReducer from './review_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  books: BooksReducer,
  search: SearchReducer,
  user: UserReducer,
  ratings: RatingReducer,
  reviews: ReviewReducer,
});
