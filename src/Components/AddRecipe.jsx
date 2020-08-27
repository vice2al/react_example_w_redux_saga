import React, { Component } from "react";
import RecipeList from "./RecipeList";
import { connect } from "react-redux";
import { 
  add_request, 
  selectAddStatus 
} from "../Redux/recipesSlice";

const TITLE_FIELD         = 0;
const DESCRIPTION_FIELD   = 1;
const INGREDIENTS_FIELD   = 2;
const INSTRUCTIONS_FIELD  = 3;

const AVAILABLE = 0;
const PENDING = 1;
const SUCCESS = 2;

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
    this.handleSubmittion = this.handleSubmittion.bind(this);
    this.handleFieldAddition = this.handleFieldAddition.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.add_status === PENDING 
      && this.props.add_status === SUCCESS){
      this.setState({
        title_value: "",
        description_value: "",
        ingredients: [""],
        instructions: [""]
      })
    }
  }

  handleChange(event) {
    const { value } = event.target;
    const field = parseInt(event.target.dataset.field);
		const index = parseInt(event.target.dataset.index);
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

      case INGREDIENTS_FIELD:
      	var list = this.state.ingredients;
      	list[index] = value;

        this.setState({
          ingredients: list
        });
        break;

      case INSTRUCTIONS_FIELD:
      	var list = this.state.instructions;
      	list[index] = value;

        this.setState({
          instructions: list
        });
        break;
      default:
        console.log("AddRecipe.jsx: Invalid field provided");
    }
  }

  handleSubmittion() {
  	var new_recipe = {
  		title: this.state.title_value,
			description: this.state.description_value,
			ingredients: this.state.ingredients,
			instructions: this.state.instructions
  	}
  	this.props.add_request(new_recipe);
  }

  handleFieldAddition(event) {
  	const field = parseInt(event.target.dataset.field);
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
              data-field={TITLE_FIELD}
		          value={this.state.title_value}
		          onChange={this.handleChange}
		        />
		      </form>

          <h4>{"Description"}</h4>
          <form>
            <input
              type="text"
              data-field={DESCRIPTION_FIELD}
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
  		                type="text"
  		              	data-index={index}
  		                data-field={INGREDIENTS_FIELD}
  		                value={value}
  		                onChange={this.handleChange}
  		              />
  		            </form>
  		          </li>)
	          })}
          </ul>
          <button
          	data-field={INGREDIENTS_FIELD} 
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
  		                type="text"
  		              	data-index={index}
  		                data-field={INSTRUCTIONS_FIELD}
  		                value={value}
  		                onChange={this.handleChange}
  		              />
  		            </form>
  		          </li>)
	          })}
          </ol>
          <button 
          	data-field={INSTRUCTIONS_FIELD} 
          	onClick={this.handleFieldAddition}
          >
		        {"Another Step"}
		      </button>

	      </div>
	      
	      <p/>
	      
	      <button onClick={this.handleSubmittion}>
	        {
            this.props.add_status === PENDING 
            ? "Adding..." : "Add Recipe"
          }
	      </button>
	      {
	      	this.props.add_status === SUCCESS
	      	? <h4>{"Recipe added!"}</h4> : <div/>
	      }
      </div>
    );
  }
}

export default connect(
  state => ({ add_status: selectAddStatus(state) }),
  { add_request }
)(AddRecipe);