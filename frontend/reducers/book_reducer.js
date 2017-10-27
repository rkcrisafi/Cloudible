import { RECEIVE_BOOKS, RECEIVE_BOOK, REMOVE_BOOK, RECEIVE_USER_BOOKS } from '../actions/book_actions';

import merge from 'lodash/merge';

const BooksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKS:
    case RECEIVE_USER_BOOKS:
      return merge({}, action.books);
    case RECEIVE_BOOK:
      return merge({}, state, {[action.book.id]: action.book});
    case REMOVE_BOOK:
      let newState = merge({}, state);
      delete newState[action.bookId];
      return newState;
    default:
      return state;
  }
};

export default BooksReducer;
