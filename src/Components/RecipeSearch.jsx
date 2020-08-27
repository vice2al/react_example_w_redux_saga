import React, { Component } from "react";
import RecipeList from "./RecipeList";
import { connect } from "react-redux";
import { selectRecipes } from "../Redux/recipesSlice";

class RecipeSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      recipes_found: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderSearchResult = this.renderSearchResult.bind(this);
    this.handleRecipeRemoval = this.handleRecipeRemoval.bind(this);
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
      //TODO: Transfer this logic to a selector in recipesSlice
	  	this.props.recipes.forEach(recipe => {
	  		if (recipe.title.toLowerCase().includes(search_string))
	  			recipes_found.push(recipe);
		  }
	  	);
	  }
  	this.setState({recipes_found: recipes_found});
  }

  renderSearchResult() {
    if (this.state.recipes_found === null)
      return <div/>;
    else if (this.state.recipes_found.length == 0)
      return <h4>{"No recipes found."}</h4>;
    else {
      return <RecipeList 
                onRemoval={this.handleRecipeRemoval} 
                recipes={this.state.recipes_found}
              />;
    }
  }

  handleRecipeRemoval (index) {
    var updated_list = this.state.recipes_found;
    updated_list.splice(index, 1);
    this.setState({recipes_found: updated_list});
  }

  render() {

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
	      	{this.renderSearchResult()}
	      </div>
      </div>
    );
  }
}

export default connect(
  state => ({ recipes: selectRecipes(state) })
) (RecipeSearch);