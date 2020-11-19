import React from 'react';
import '../../styles/css/Admin/Admin.css';
import MonsterForm from './MonsterForm';
import LootForm from './LootForm';

function Admin() {
	return (
		<div className='admin'>
			<LootForm />
			<MonsterForm />
		</div>
	);
}

export default Admin;
