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
      Instructions: [""]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const field = parseInt(event.target.getAttribute("field"));

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
        this.setState({
          ingredients_value: value
        });
        break;
      case INSTRUCTIONS_FIELD:
        this.setState({
          instructions_value: value
        });
        break;
      default:
        console.log("AddRecipe.jsx: Invalid field provided");
    }
  }

  //TODO
  handleAddition() {
  	
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
          <form>
            <input
              type="text"
              field={INGREDIENTS_FIELD}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>

          <h4>{"Instructions"}</h4>
          <form>
            <input
              type="text"
              field={INSTRUCTIONS_FIELD}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>

		      <button onClick={this.handleAddition}>
		        {"Add Recipe"}
		      </button>
	      </div>
      </div>
    );
  }
}

export default AddRecipe;