import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import weatherReducer from '../reducers/weatherReducer';

const combinedReducer = combineReducers({ weather: weatherReducer });
const store = createStore(combinedReducer, applyMiddleware(ReduxPromise));

export default store;

// api key: &appid=cff2b3ac2c15c46e376f9d74c86eaf5c
