import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const configureStore = function(initialState = {currentVideo: exampleVideoData[0], videoList: exampleVideoData}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}

const store = configureStore()

export default store