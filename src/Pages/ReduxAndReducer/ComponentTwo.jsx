import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IncreaseNumber, DecreaseNumber } from '../../redux/ActionReducerDemo';

const ComponentTwo = () => {
	const dispatch = useDispatch();
	const count = useSelector(state => state.myCount);
	const iplTeamDetails = useSelector(state => state.IPLData);

	return(
		<div className="paragraph-content">
			My Count Value is: {count}<br/>
			<button onClick={() => dispatch(IncreaseNumber())} >Increase</button><br/>
			<button onClick={() => dispatch(DecreaseNumber())} >Increase</button><br/>
			<br/>
			IPL Team Details:<br/>
			Team Name: {iplTeamDetails.teamName}<br/>
			Captain: {iplTeamDetails.captain}


		</div>
	);
}

export default ComponentTwo;