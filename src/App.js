import React, { Component } from "react";
import ReactDOM from "react-dom";
import {RecipeSearch} from "./Components"
import {recipes} from "./RecipesConst"
class App extends React.Component{


  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
    this
  }

  componentDidMount(){
  	this.setState({recipes: recipes});
  }

  render() {
    return (
        <div>
          <h1>{"Re(act)cipe"}</h1>
          <h2>{"Now we are cooking!"}</h2>
          <RecipeSearch recipes={this.state.recipes}/>
        </div>
    );
  }
}

export default App;