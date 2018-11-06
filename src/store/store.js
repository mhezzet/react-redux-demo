import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxPromise from 'redux-promise';
import { reducer as formReducer } from 'redux-form';
import postReducer from '../reducers/postReducer';

const reducers = combineReducers({ posts: postReducer, form: formReducer });
const middleWares = applyMiddleware(reduxPromise);

export default createStore(reducers, middleWares);
