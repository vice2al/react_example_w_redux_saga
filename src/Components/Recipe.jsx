import React from "react";

export default function Recipe(props){

	var recipe = props.recipe;

	return (
		<div>
			<h4>{recipe.title}</h4>
			<p/>
			{recipe.description}
			<p/>
			<h5> {"Ingredients"} </h5>
			<ul>
				{recipe.ingredients.map(ingredient => (
					<li> {ingredient} </li>
				))}
			</ul>			
			<h5> {"Instructions"} </h5>
			<ol>
				{recipe.instructions.map(step => (
					<li> {step} </li>
				))}
			</ol>
			</div>
	);
}