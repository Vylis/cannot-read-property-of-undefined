import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MonsterCard from './MonsterCard';
import '../../styles/css/List/MonsterList.css';

function MonsterList() {
	const [monsters, setMonsters] = useState([]);

	useEffect(() => {
		handleAxios();
	}, []);

	const handleAxios = () => {
		axios
			.get(`https://cannotread.herokuapp.com/api/monsters`)
			.then((response) => setMonsters(response.data));
	};

	return (
		<div>
			<div className='monster_list_container'>
				{monsters.map((monster) => (
					<MonsterCard key={monster.name} {...monster} />
				))}
			</div>
		</div>
	);
}

export default MonsterList;
