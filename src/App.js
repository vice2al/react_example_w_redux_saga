import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import {
  RecipeSearch, 
  AddRecipe
} from "./Components";
import {
  load_request, 
  selectLoadStatus
} from "./Redux/recipesSlice";
import {
  ACTION_PENDING,
  ACTION_SUCCESS
} from "./Redux/redux_constants";
import {recipes} from "./recipes_constants";

const LOADING_COMPONENTS = 0
const RECIPESEARCH_COMPONENT = 1;
const ADDRECIPE_COMPONENT = 2;

class App extends React.Component{


  constructor(props) {
    super(props);

    this.state = {
      active_component: LOADING_COMPONENTS
    };

    this.renderSelectedComponent 
      = this.renderSelectedComponent.bind(this);
    this.switchComponent = this.switchComponent.bind(this);
  }

  componentDidMount(){
  	this.props.load_request(recipes);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.load_status === ACTION_PENDING 
      && this.props.load_status === ACTION_SUCCESS)
      this.setState({active_component: RECIPESEARCH_COMPONENT});
  }

  renderSelectedComponent(){
    var component;

    switch(this.state.active_component){
      case LOADING_COMPONENTS:
        component = <h4>{"Loading Recipes"}</h4>
        break;
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

    if (this.state.active_component !== LOADING_COMPONENTS){
      if (field === RECIPESEARCH_COMPONENT 
        && field !== this.state.active_component)
        this.setState({active_component: RECIPESEARCH_COMPONENT});
      else if (field === ADDRECIPE_COMPONENT 
        && field !== this.state.active_component)
        this.setState({active_component: ADDRECIPE_COMPONENT});
    }
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

//In this component the mapStateToProps function is written inline 
//in the connect method, since we only need one state property.
export default connect(
  state => ({ load_status: selectLoadStatus(state) }),
  { load_request }
)(App);