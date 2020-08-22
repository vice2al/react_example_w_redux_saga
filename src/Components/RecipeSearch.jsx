import React, { Component } from "react";
import RecipeList from "./RecipeList";

class RecipeSearch extends Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
      recipes: props.recipes,
      recipes_found: null
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

  	if (search_string.localeCompare("") != 0){

	  	this.state.recipes.forEach(recipe => {
	  		if (recipe.title.toLowerCase().includes(search_string))
	  			recipes_found.push(recipe);
		  }
	  	);
	  }
  	this.setState({recipes_found: recipes_found});
  }

  render() {
  	let renderSearchResult;
  	
  	if (this.state.recipes_found === null)
  		renderSearchResult = <div/>;
  	else if (this.state.recipes_found.length == 0)
  		renderSearchResult = <h4>{"No recipes found."}</h4>;
  	else
  		renderSearchResult = <RecipeList recipes={this.state.recipes_found}/>;

    return (
    	<div>
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
	      <div>
	      	{renderSearchResult}
	      </div>
      </div>
    );
  }
}

export default RecipeSearch;