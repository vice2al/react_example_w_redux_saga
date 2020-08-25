import React from "react";
import Recipe from "./Recipe"

export default function RecipeList(props){

	var recipes_to_list = props.recipes;

	return (
		<div>
			{recipes_to_list.map((recipe, index) => (
				<Recipe recipe={recipe} key={index}/>
			))}
		</div>
	);
}