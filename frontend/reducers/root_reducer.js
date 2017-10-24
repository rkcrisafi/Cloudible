import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer
});
