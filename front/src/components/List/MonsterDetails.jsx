import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/css/List/MonsterDetails.css';
import LootsDetails from './LootsDetails';

const MonsterDetails = ({ match }) => {
	const { id } = match.params;
	const [monster, setMonster] = useState({});

	useEffect(() => {
		axios
			.get(`https://cannotread.herokuapp.com/api/monsters/${id}`)
			.then((response) => setMonster(response.data[0]));
	}, [id]);

	return (
		<div>
			<div className='monster_details_container'>
				<Link to={'/MonsterList'}>
					<button className='monster_details_button'>Return to List</button>
				</Link>
				<div className='monster_details intel'>
					<img
						className='monster_details_image'
						src={monster.image}
						alt={monster.name}
					/>
					<h2>{monster.name}</h2>
					<p>Can be found at {monster.location}</p>
					<p>Danger rating : {monster.danger}/10</p>
					<p>{monster.description}</p>
					<p>Weakness : {monster.weakness}</p>
				</div>

				<LootsDetails value={monster.id_loot} />
			</div>
		</div>
	);
};

export default MonsterDetails;
