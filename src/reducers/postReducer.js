import _ from 'lodash';
import { FETCH_POST, FETCH_POSTS } from '../actions';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return _.mapKeys(payload.data, 'id');
    case FETCH_POST:
      return { ...state, [payload.data.id]: payload.data };
    default:
      return state;
  }
};
