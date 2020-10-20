import React, { useState } from 'react';

const StateExampleFunctional = () =>{
	const [count, setCount] = useState(0);
	const [name, functionToResetName] = useState('John');

	const handleDecrement = () => {
		setCount(count-1);
	}

	return(
		<div className='paragraph-content'>
			We use 'useState' to manage state of a functional component
			<br/>
			Count is: {count}
			<br/>
			<button
				className='common-button primary'
				// onClick={setCount(count+1)} //Too many renders
				onClick={() => setCount(count+1)}
			>
				Increment
			</button>
			<button
				className='common-button danger'
				onClick={handleDecrement} // We are not calling the functiona, rather giving a callback function
			>
				Decrement
			</button>
			<br/>
			Name: {name}
			<br/>
			<button
				className='common-button primary'
				onClick={() => functionToResetName('Subhasis')}
			>
				Change Name
			</button>
			<button
				className='common-button primary'
				onClick={() => functionToResetName('John')}
			>
				Change Name to Original
			</button>
		</div>
	)
}

export default StateExampleFunctional;