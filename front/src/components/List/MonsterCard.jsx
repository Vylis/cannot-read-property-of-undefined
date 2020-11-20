import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/css/List/MonsterCard.css';

function MonsterCard(props) {
	const { id, name, danger, image, location } = props;

	return (
		<div className='monster_card_container'>
			<img className='monster_card_image' src={image} alt={name} />
			<div className='monster_card_intel'>
				<h3 className='monster_name'>{name}</h3>
				<div className='danger_container'>
					<span className='info_title'>Danger rate : </span>
					<span className='info_content'>{danger}/10</span>
				</div>
				<div className='location_container'>
					<span className='info_title'>Can be found at : </span>
					<span className='info_content'>{location}</span>
				</div>
				<Link to={`/MonsterList/${id}`} className='monster_card_btn'>
					Learn more <span className='detail_arrow'>{'>'}</span>
				</Link>
			</div>
		</div>
	);
}

export default MonsterCard;
