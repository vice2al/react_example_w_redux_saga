import React, { Component } from "react";
import RecipeList from "./RecipeList";
import { connect } from "react-redux";
import { selectRecipes } from "../Redux/recipesSlice";

const TITLE_FIELD         = 0;
const DESCRIPTION_FIELD   = 1;
const INGREDIENTS_FIELD   = 2;
const INSTRUCTIONS_FIELD  = 3;

class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title_value: "",
      description_value: "",
      ingredients: [""],
      instructions: [""]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleFieldAddition = this.handleFieldAddition.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const field = parseInt(event.target.getAttribute("field"));
		const index = parseInt(event.target.getAttribute("index"));
    switch(field){

      case TITLE_FIELD:
        this.setState({
          title_value: value
        });
        break;

      case DESCRIPTION_FIELD:
        this.setState({
          description_value: value
        });
        break;
      //TODO: change these two, depending on the input form
      case INGREDIENTS_FIELD:
      	
      	var list = this.state.ingredients;
      	
      	list[index] = value;
      	console.log(event.target);
        this.setState({
          ingredients: list
        });
        break;
      case INSTRUCTIONS_FIELD:
      	var list = this.state.instructions;
      	
      	list[index] = value;
      	console.log(event.target);
        this.setState({
          instructions: list
        });
        break;
      default:
        console.log("AddRecipe.jsx: Invalid field provided");
    }
  }

  //TODO
  handleAddition() {
  	
  }

  handleFieldAddition(event) {
  	const field = parseInt(event.target.getAttribute("field"));
  	var list = [];
  	if (field == INGREDIENTS_FIELD){
	  	list = this.state.ingredients;
	  	list.push("");
	  	this.setState({
	  		ingredients: list
	  	});
  	}
  	else {
  		list = this.state.instructions;
	  	list.push("");
	  	this.setState({
	  		instructions: list
	  	});
  	}
  }

  render() {
    return (
    	<div>
	    	<div>
          <h4>{"Title"}</h4>
		      <form>
		        <input
		          type="text"
              field={TITLE_FIELD}
		          value={this.state.title_value}
		          onChange={this.handleChange}
		        />
		      </form>

          <h4>{"Description"}</h4>
          <form>
            <input
              type="text"
              field={DESCRIPTION_FIELD}
              value={this.state.description_value}
              onChange={this.handleChange}
            />
          </form>

          <h4>{"Ingredients"}</h4>

          <ul>
	          {this.state.ingredients.map((value, index) => {
	            return (
  	            <li key={index}>
  	            	<form key={index}>
  		              <input
  		              	key={index}
  		              	index={index}
  		                type="text"
  		                field={INGREDIENTS_FIELD}
  		                value={value}
  		                onChange={this.handleChange}
  		              />
  		            </form>
  		          </li>)
	          })}
          </ul>
          <button
          	field={INGREDIENTS_FIELD} 
          	onClick={this.handleFieldAddition}
          >
		        {"Another Ingredient"}
		      </button>
          <h4>{"Instructions"}</h4>
          <ol>
	          {this.state.instructions.map((value, index) => {
	            return (
  	            <li key={index}>
  	            	<form key={index}>
  		              <input
  		              	key={index}
  		              	index={index}
  		                type="text"
  		                field={INSTRUCTIONS_FIELD}
  		                value={value}
  		                onChange={this.handleChange}
  		              />
  		            </form>
  		          </li>)
	          })}
          </ol>
          <button 
          	field={INSTRUCTIONS_FIELD} 
          	onClick={this.handleFieldAddition}
          >
		        {"Another Step"}
		      </button>
	      </div>
	      <p/>
	      <button onClick={this.handleAddition}>
	        {"Add Recipe"}
	      </button>
      </div>
    );
  }
}

export default AddRecipe;