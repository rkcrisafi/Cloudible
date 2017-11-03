import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';


const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const updateUser = (formData, id) => dispatch => {
  return UserApiUtil.updateUser(formData, id).then(user => dispatch(receiveUser(user)));
};

export const fetchUser = (id) => dispatch => {
  return UserApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));
};
