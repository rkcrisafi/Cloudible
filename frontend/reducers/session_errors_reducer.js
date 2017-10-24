import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const receiveErrorReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default receiveErrorReducer;
