import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import {RecipeSearch, AddRecipe} from "./Components";
import {recipes} from "./RecipesConst";
import {load} from "./Redux/recipesSlice";

const RECIPESEARCH_COMPONENT = 0;
const ADDRECIPE_COMPONENT = 1;

class App extends React.Component{


  constructor(props) {
    super(props);

    this.state = {
      active_component: RECIPESEARCH_COMPONENT
    };

    this.renderSelectedComponent = this.renderSelectedComponent.bind(this);
    this.switchComponent = this.switchComponent.bind(this);
  }

  componentDidMount(){
  	this.props.load(recipes);
  }

  renderSelectedComponent(){
    var component;

    switch(this.state.active_component){
      case RECIPESEARCH_COMPONENT:
        component = <RecipeSearch />;
        break;
      case ADDRECIPE_COMPONENT:
        component = <AddRecipe />;
        break;
      default:
        component = <div/>;
        console.log("App.js: Invalid component");
    }

    return component;
  }

  switchComponent(event) {
    var field = parseInt(event.target.dataset.field);

    if (field === RECIPESEARCH_COMPONENT && field !== this.state.active_component)
      this.setState({active_component: RECIPESEARCH_COMPONENT});
    else if (field === ADDRECIPE_COMPONENT && field !== this.state.active_component)
      this.setState({active_component: ADDRECIPE_COMPONENT});
  }

  render() {

    return (
        <div>
          <h1>{"Re(act)cipe"}</h1>
          <h2>{"Now we are cooking!"}</h2>
          <p/>
          <div>
            <button 
              data-field={RECIPESEARCH_COMPONENT}
              onClick={this.switchComponent}
            > 
              {"Search Recipe"} 
            </button>
            <button 
              data-field={ADDRECIPE_COMPONENT}
              onClick={this.switchComponent}
            >
              {"Add Recipe"}
            </button> 
          </div>
          <p/>
          {this.renderSelectedComponent()}
        </div>
    );
  }
}

export default connect(
  null,
  { load }
)(App);