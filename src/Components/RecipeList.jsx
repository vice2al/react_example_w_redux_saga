import React from "react";
import Recipe from "./Recipe"
import { useDispatch } from 'react-redux'
import {remove} from "../Redux/recipesSlice";

export default function RecipeList(props){

	var recipes_to_list = props.recipes;
	const dispatch = useDispatch();

	function removeRecipe(event) {
		dispatch(remove(event.target.dataset.recipe));
	}

	return (
		<div>
			{recipes_to_list.map((recipe, index) => (
				<div key={index}>
					<Recipe recipe={recipe} key={index}/>
					<button 
						key={index+1}
	          data-recipe={recipe}
	          onClick={removeRecipe}
	        >
	          {"Remove this Recipe"}
	        </button>
        </div>
			))}
		</div>
	);
}
