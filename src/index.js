import React from 'react';
import ReactDOM from 'react-dom';
import {Form} from './Components'
//ReactDOM.render(<Router><App /></Router>, document.getElementById('content'));

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form/>, wrapper) : false;