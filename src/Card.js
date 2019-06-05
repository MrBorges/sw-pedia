import React from 'react';
//import { characters } from './Characters';

//const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = characters[0];

const Card = ( { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } ) => {
	return (
		<div className={`bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5`}>
			<h1 className='tc'>{name}</h1>
			<ul>				
				<li> Height: {height} </li>
				<li> Mass: {mass} </li>
				<li> Hair color: {hair_color}</li>
				<li> Skin color: {skin_color} </li>
				<li> Eye color: {eye_color} </li>
				<li> Birth year: {birth_year} </li>
				<li> Gender: {gender} </li>
			</ul>
		</div>
		);
}

export default Card;