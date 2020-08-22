import React, { Component } from "react";
import ReactDOM from "react-dom";

class RecipeSearch extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      recipes: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  handleSearch() {
  	var search_string = this.state.value;
  	var recipes_found = [];

  	this.state.recipes.forEach(recipe => {
  		if (recipe.title.includes(search_string))
  			recipes_found.push(recipe);
	  }
  	);
  }

  render() {
    return (
    	<div>
	      <form>
	        <input
	          type="text"
	          value={this.state.value}
	          onChange={this.handleChange}
	        />
	      </form>
	      <button onClick={this.handleSearch}>
	        {"Search Recipe"}
	      </button>
      </div>
    );
  }
}

export default RecipeSearch;