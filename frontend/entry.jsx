import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions';
import Root from './components/root';
import configureStore from './store/store';

const store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;
window.login = login;
// window.dispatch = store.dispatch;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={store}/>,
  document.getElementById('root'));
});
