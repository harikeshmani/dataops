import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageContainer from '../../CommonComponents/ImageContainer/ImageContainer';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

const HooksDemo = () => {
	const dispatch = useDispatch();
	const myCount = useSelector(state => state.myCount);
	
	return(
		<div className=' main-body'>
			<div className='main-content'>
				<ImageContainer />
				<h1 className='center-text'>Redux and Reducers</h1>
				<br/>
				<ComponentOne />
				<ComponentTwo />
				
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</div>
		</div>
	)
}

export default HooksDemo;