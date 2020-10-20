import React, { useState, useEffect } from 'react';
import ImageContainer from '../../CommonComponents/ImageContainer/ImageContainer';

const hooksArr = ['useState()', 'useEffect()', 'useSelector()']

const ReduxAndReducers = () => {
	const [name, setName] = useState(['subhasis']);
	const [counter, setCounter] = useState(0);

	//setName('none'); // This will show too many renders

	// This will set to initial count value 10
	// useEffect(() => {
	// 	console.log('Name before setName: ', name, ' initial count: ', counter);
	// 	setName(['Subhasis']);
	// 	setCounter(10);
	// });

	// This will increase counter again and again
	// useEffect(() => {
	// 	console.log('Name before setName: ', name);
	// 	setName(['Subhasis', 'John']);
	// 	setCounter(counter+1);
	// });

	//Use effect will run once... Simulating ComponentDidMount... Most important
	// useEffect(() => {
	// 	console.log('Name before setName: ', name);
	// 	setName(['Subhasis', 'John']);
	// 	setCounter(counter+1);
	// }, []);

	// Make useEffect fire when state variable changes
	useEffect(() => {
		setName([...name, counter])
	}, [counter]);

	return(
		<div className=' main-body'>
			<div className='main-content'>
				<ImageContainer />
				<h1 className='center-text'>React Hooks</h1>
				<div className='sub-header'>Why learn ReactJS from DataOps?</div>
				<div className='paragraph-content'>
					Hooks are ways to simulate state, life cycle methods and many more properties of the
					class component in a functional component. <br/>
					We will learn about the following hooks:
					{
						hooksArr.map((hook, index) => {
							return(
								<li key={index}>{hook}</li>
							)
						})
					}
					Hooks are basically predefined functions which perform a perticular task.
				</div>
				<div className='paragraph-content'>
					Name: 
					{
						name.map((n, index) => {return <li key={index}>{n}</li>})
					}
					<br/>
					Counter: {counter}
					<br/>
					{/* This will not work and will go into infinite loop as we are calling the set counter directly */}
					{/* <button className='common-button primary' onClick={setCounter(counter + 1)}>Increment</button> */}
					<button className='common-button primary' onClick={() => setCounter(counter + 1)}>Increment</button>

				</div>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</div>
		</div>
	)
}

export default ReduxAndReducers;