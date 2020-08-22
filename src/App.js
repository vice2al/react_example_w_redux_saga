import React, { Component } from "react";
import ReactDOM from "react-dom";
import {RecipeSearch} from "./Components"

class App extends React.Component{


  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h1>{"Re(act)cipe"}</h1>
          <h2>{"Now we are cooking!"}</h2>
          <RecipeSearch/>
        </div>
    );
  }
}

export default App;