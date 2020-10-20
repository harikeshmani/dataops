import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetIPLTeam } from '../../redux/ActionReducerDemo';

const ComponentOne = () => {
	const dispatch = useDispatch();
	const count = useSelector(state => state.myCount);
	const [teamName, setTeamName] = useState('');
	const [captain, setCaptain] = useState('');

	const handleSubmit = () => {
		dispatch(SetIPLTeam({ teamName, captain }));
	}

	return(
		<div className="paragraph-content">
			count in component One is: {count}  <br/>
			Set IPL team details: <br/>
			Team Name:
			<input type='text' onChange={(event) => setTeamName(event.target.value)} />
			<br/>
			Captain Name:
			<input type='text' onChange={(event) => setCaptain(event.target.value)} />
			<br/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default ComponentOne;