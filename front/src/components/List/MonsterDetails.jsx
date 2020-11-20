import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/css/List/MonsterDetails.css';
import LootsDetails from './LootsDetails';

const MonsterDetails = ({ match }) => {
	const { id } = match.params;
	const [monster, setMonster] = useState({});

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_MYTH_API_URL}/api/monsters/${id}`)
			.then((response) => setMonster(response.data[0]));
	}, [id]);

	return (
		<div>
			<div className='monster_details_container'>
				<div className='monster_details intel'>
					<h2>{monster.name}</h2>
					<img
						className='monster_details_image'
						src={monster.image}
						alt={monster.name}
					/>
					<p className='details_title'>
						Can be found at{' '}
						<span className='details_content'>{monster.location}</span>
					</p>
					<p className='details_title'>
						Danger rating :{' '}
						<span className='details_content'>{monster.danger}/10</span>
					</p>
					<p className='details_content'>{monster.description}</p>
					<p className='details_title'>
						Weakness :{' '}
						<span className='details_content'>{monster.weakness}</span>
					</p>
					<p className='details_content'>
						{monster.height} m {monster.weight} kg
					</p>
					<p className='details_title'>
						Wanted ?{' '}
						<span className='details_content'>
							{monster.wanted ? 'Yes' : 'No'}
						</span>
					</p>
					<p className='details_title'>
						Alive ?{' '}
						<span className='details_content'>
							{monster.alive ? 'Yes' : 'No'}
						</span>
					</p>
				</div>

				<LootsDetails value={monster.id_loot} />
			</div>
		</div>
	);
};

export default MonsterDetails;
