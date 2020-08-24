import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'
import App from './App'

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	wrapper) : false;