import React, { useState } from 'react';
import '../../styles/css/Admin/Admin.css';
import axios from 'axios';

const LootForm = () => {
	const [input, setInput] = useState({});

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleClick = async () => {
		await axios
			.post(`${process.env.REACT_APP_MYTH_API_URL}/api/loots`, {
				...input,
			})
			.then((reponse) => console.log(reponse))
			.catch((error) => {
				console.log(error);
			});
		await window.location.reload(true);
	};

	return (
		<div className='lootForm'>
			<h2>IMPORTANT!</h2>

			<p>
				You must post the monster's loot before posting your monster, then, the
				loot will appear on the select button at the bottom of the monster
				creation form, and then it will be assigned to the monster when you
				select it.
			</p>

			<h2> Loots </h2>

			<input
				className='inputMonsterForm'
				name='name'
				onChange={(e) => handleChange(e)}
				placeholder='Name'
			/>

			<input
				className='inputMonsterForm'
				name='Description'
				onChange={(e) => handleChange(e)}
				placeholder='Description'
			/>

			<div className='centerButtonMonsterForm'>
				<button
					className='buttonMonsterForm'
					type='submit'
					onClick={() => handleClick()}>
					Submit
				</button>
			</div>
		</div>
	);
};
export default LootForm;
