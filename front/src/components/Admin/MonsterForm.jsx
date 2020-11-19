import React, { useEffect, useState } from 'react';
import '../../styles/css/Admin/Admin.css';
import axios from 'axios';

const MonsterForm = () => {
	const [input, setInput] = useState({});
	const [loots, setLoots] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_MYTH_API_URL}/api/loots`)
			.then((res) => res.data)
			.then((data) => setLoots(data));
	}, []);

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleClick = async () => {
		await axios
			.post(`${process.env.REACT_APP_MYTH_API_URL}/api/monsters`, {
				...input,
			})
			.then((reponse) => console.log(reponse))
			.catch((error) => {
				console.log(error);
			});
		await window.location.reload(true);
	};

	return (
		<div className='monsterForm'>
			<h2> Monsters </h2>

			<input
				className='inputMonsterForm'
				name='name'
				onChange={(e) => handleChange(e)}
				placeholder='Name'
			/>

			<input
				className='inputMonsterForm'
				name='description'
				onChange={(e) => handleChange(e)}
				placeholder='Description'
			/>

			<select
				className='selectInputMonsterForm'
				name='danger'
				onChange={(e) => handleChange(e)}>
				<option value=''>Danger Level</option>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				<option value='6'>6</option>
				<option value='7'>7</option>
				<option value='8'>8</option>
				<option value='9'>9</option>
				<option value='10'>10</option>
			</select>

			<input
				className='inputMonsterForm'
				name='height'
				onChange={(e) => handleChange(e)}
				placeholder='Height'
			/>

			<input
				className='inputMonsterForm'
				name='weight'
				onChange={(e) => handleChange(e)}
				placeholder='Weight'
			/>

			<input
				className='inputMonsterForm'
				name='weakness'
				onChange={(e) => handleChange(e)}
				placeholder='Weakness'
			/>

			<input
				className='inputMonsterForm'
				name='location'
				onChange={(e) => handleChange(e)}
				placeholder='Location'
			/>

			<input
				className='inputMonsterForm'
				name='lastseen'
				onChange={(e) => handleChange(e)}
				placeholder='Last seen location'
			/>

			<input
				className='inputMonsterForm'
				name='image'
				onChange={(e) => handleChange(e)}
				placeholder='Image'
			/>

			<select
				className='selectInputMonsterForm'
				name='alive'
				onChange={(e) => handleChange(e)}>
				<option value=''>Alive</option>
				<option value='true'>True</option>
				<option value='false'>False</option>
			</select>

			<select
				className='selectInputMonsterForm'
				name='wanted'
				onChange={(e) => handleChange(e)}>
				<option value=''>Wanted</option>
				<option value='true'>True</option>
				<option value='false'>False</option>
			</select>

			<input
				className='inputMonsterForm'
				name='reward'
				onChange={(e) => handleChange(e)}
				placeholder='Reward for killing him'
			/>

			<select
				className='selectInputMonsterForm'
				name='id_loot'
				onChange={(e) => handleChange(e)}>
				<option value=''>--Choose your monster's loot--</option>
				{loots.map((loots) => (
					<option value={loots.id}>
						Name:{loots.name}, Id:{loots.id}
					</option>
				))}
			</select>

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
export default MonsterForm;
