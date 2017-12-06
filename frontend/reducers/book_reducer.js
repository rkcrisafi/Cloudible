import { RECEIVE_BOOKS, RECEIVE_BOOK, REMOVE_BOOK, RECEIVE_USER_BOOKS } from '../actions/book_actions';
import { RECEIVE_RATING } from '../actions/rating_actions';

import merge from 'lodash/merge';

const BooksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_BOOKS:
    case RECEIVE_USER_BOOKS:
      return merge({}, action.books);
    case RECEIVE_BOOK:
      return merge({}, state, {[action.book.id]: action.book});
    case REMOVE_BOOK:
      newState = merge({}, state);
      delete newState[action.bookId];
      return newState;
    case RECEIVE_RATING:
      if (action.rating.overall) {
        newState[action.rating.book_id].overall = action.rating.overall;
      } else if (action.rating.performance) {
        newState[action.rating.book_id].performance = action.rating.performance;
      } else if (action.rating.story) {
        newState[action.rating.book_id].story = action.rating.story;
      }
      return newState;
    default:
      return state;
  }
};

export default BooksReducer;
