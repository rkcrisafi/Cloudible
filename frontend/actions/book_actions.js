import * as BookApiUtil from '../util/book_api_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
// export const CREATE_BOOK = 'CREATE_BOOK';
export const RECEIVE_USER_BOOKS = 'RECEIVE_USER_BOOKS';

const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books
});

const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
});

const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId
});

const receiveUserBooks = (books) => ({
  type: RECEIVE_USER_BOOKS,
  books
});

export const fetchBooks = () => dispatch => (
  BookApiUtil.fetchBooks().then(books => dispatch(receiveBooks(books)))
);

export const fetchBook = book_id => dispatch => (
  BookApiUtil.fetchBook(book_id).then(book => dispatch(receiveBook(book)))
);

export const addBook = (user_id, book_id) => dispatch => (
  BookApiUtil.addBook(user_id, book_id).then(user => dispatch(receiveCurrentUser(user)))
);

export const deleteBook = (user_id, book_id) => dispatch => (
  BookApiUtil.deleteBook(user_id, book_id).then(book => dispatch(removeBook(bookId)))
);

export const showLibrary = (user_id) => dispatch => (
  BookApiUtil.showLibrary(user_id).then(books => dispatch(receiveUserBooks(books)))
);
