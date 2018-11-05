import { FETCH_WEATHER } from '../actions/index';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return [payload.data, ...state];

    default:
      return state;
  }
};
