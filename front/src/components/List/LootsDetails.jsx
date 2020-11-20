import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/css/List/MonsterDetails.css';

const LootsDetails = (props) => {
	const { value } = props;
	const [loot, setLoot] = useState({});

	useEffect(() => {
		value &&
			axios
				.get(`${process.env.REACT_APP_MYTH_API_URL}/api/loots/${value}`)
				.then((response) => setLoot(response.data[0]));
	}, [value]);

	return (
		<div>
			<div className='lootDetails'>
				<div className='lootDetailsDiv'>
					<h2 className='lootText'> Treasure </h2>
					<h4>{loot.name}</h4>
					<p>{loot.description}</p>
				</div>
			</div>
		</div>
	);
};

export default LootsDetails;
