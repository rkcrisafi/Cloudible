import { RECEIVE_CURRENT_USER, RECIEVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = defaultState, action) => {
  let nextState;
  let currentUser;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      nextState = merge({}, state, { currentUser });
      return nextState;
    default:
      return state;
    }
  };

  export default sessionReducer;
