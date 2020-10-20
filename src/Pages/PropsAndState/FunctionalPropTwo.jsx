import React from 'react';

const FunctionalPropTwo = (props) =>{ //You can name it anything than props
	console.log('props: ', props);

	const { name, explanation, children } = props; //no 'this' keyword required
	
	return(
		<div className='paragraph-content'>
			{
				name
				?
				<div>Name: {name}</div>
				: null
			}
			{
				explanation
				?
				<div>Why DataOps: {explanation}</div>
				: null
			}
			{children}
		</div>
	)
}

export default FunctionalPropTwo;