import React, { Component } from 'react';
import './assets/styles/shards-dashboards.1.1.0.min.css'
import './assets/styles/extras.1.1.0.min.css'
import './App.css';
import Router from './Router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import combineReducers from './redux/reducers/index'

const store = createStore(combineReducers)


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
