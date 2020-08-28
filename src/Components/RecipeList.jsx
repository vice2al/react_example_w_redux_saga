import React from "react";
import Recipe from "./Recipe"
import { useDispatch } from 'react-redux'
import {remove_request} from "../Redux/recipesSlice";

export default function RecipeList(props){

	const dispatch = useDispatch();

	function handleRemoveRecipe(event, recipe) {
		// If we wanted to keep all functionality in the RecipeSearch 
		// component we would move the redux call there. In this instance
		// I wanted to try doing it inside the stateless component for 
		// practice reasons.
		dispatch(remove_request(recipe));
		props.onRemoval(event.target.dataset.index);
	}

	return (
		<div>
			{props.recipes.map((recipe, index) => (
				<div key={index}>
					<Recipe recipe={recipe} key={index}/>
					<button 
						key={index+1}
						data-index={index}
	          onClick={(event) => handleRemoveRecipe(event, recipe)}
	        >
	          {
	          	index == props.recipe_to_be_removed 
	          	? "Removing..." : "Remove Recipe"
	          }
	        </button>
        </div>
			))}
		</div>
	);
}
