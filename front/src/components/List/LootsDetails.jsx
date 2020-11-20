import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/css/List/MonsterDetails.css';

const LootsDetails = (props) => {
	const { value } = props;
	const [loot, setLoot] = useState({});

	useEffect(() => {
		value &&
			axios
				.get(`http://localhost:3000/api/loots/${value}`)
				.then((response) => setLoot(response.data[0]));
	}, [value]);

	return (
		<div>
			<div className='lootDetails'>
				<h2>{loot.name}</h2>
				<p>{loot.description}</p>
			</div>
		</div>
	);
};

export default LootsDetails;
