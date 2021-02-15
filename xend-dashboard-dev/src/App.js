import React, { Component } from 'react';
import './assets/styles/shards-dashboards.1.1.0.min.css'
import './assets/styles/extras.1.1.0.min.css'
import './App.css';
import decode from 'jwt-decode';
import Router from './Router'
import {Provider} from 'react-redux'
import { setCurrentUser, setToken } from './redux/actions/ActiveAction'
import { addError } from './redux/actions/error'
import {createStore} from 'redux'
import combineReducers from './redux/reducers/index'
import {store} from './redux/index'

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
       <Router/>
      </Provider> 
    );
  }
}

export default App;
