import merge from 'lodash/merge';
import { RECEIVE_SEARCH_AUDIO } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_AUDIO:
      return merge({}, action.results);
    default:
      return state;
  }
};

export default searchReducer;
