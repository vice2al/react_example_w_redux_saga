import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//ReactDOM.render(<Router><App /></Router>, document.getElementById('content'));

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App/>, wrapper) : false;