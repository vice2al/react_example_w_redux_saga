import React, { Component } from "react";
import RecipeList from "./RecipeList";
import { connect } from "react-redux";
import { 
  selectRecipes,
  selectRemoveStatus
} from "../Redux/recipesSlice";

const AVAILABLE = 0;
const PENDING = 1;
const SUCCESS = 2;

class RecipeSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      recipes_found: null,
      recipe_to_be_removed: -1 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderSearchResult = this.renderSearchResult.bind(this);
    this.handleRecipeRemoval = this.handleRecipeRemoval.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.remove_status === PENDING 
      && this.props.remove_status === SUCCESS){
      
      var updated_list = this.state.recipes_found;
      updated_list.splice(this.state.recipe_to_be_removed, 1);
      
      this.setState({
        recipes_found: updated_list, 
        recipe_to_be_removed: -1
      });
    }
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
                recipes={this.state.recipes_found}
                onRemoval={this.handleRecipeRemoval} 
                recipe_to_be_removed={this.state.recipe_to_be_removed}
              />;
    }
  }

  handleRecipeRemoval (index) {
    this.setState({
      recipe_to_be_removed: index
    });
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
  state => ({ 
    recipes: selectRecipes(state), 
    remove_status: selectRemoveStatus(state)
  })
) (RecipeSearch);