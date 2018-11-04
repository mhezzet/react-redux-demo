import { combineReducers, createStore } from 'redux';
import reducer_books from '../reducers/reducer_books';
import active_book from '../reducers/reducer_active_book';

export default createStore(
  combineReducers({
    books: reducer_books,
    activeBook: active_book
  })
);
