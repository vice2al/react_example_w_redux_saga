import "regenerator-runtime"

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers  } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './Saga/sagas';
import App from './App';
import recipesReducer from './Redux/recipesSlice';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
  recipes: recipesReducer,
}),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga);

const wrapper = document.getElementById("container");

wrapper ? ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	wrapper) : false;