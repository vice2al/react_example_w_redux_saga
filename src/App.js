import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import {RecipeSearch} from "./Components";
import {recipes} from "./RecipesConst";
import {load} from "./Redux/recipesSlice";

class App extends React.Component{


  constructor(props) {
    super(props);
  }

  componentDidMount(){
  	this.props.load(recipes);
  }

  render() {
    return (
        <div>
          <h1>{"Re(act)cipe"}</h1>
          <h2>{"Now we are cooking!"}</h2>
          <RecipeSearch />
        </div>
    );
  }
}

export default connect(
  null,
  { load }
)(App);