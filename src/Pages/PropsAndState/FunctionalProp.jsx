import React from 'react';

const FunctionalProp = (props) =>{ //You can name it anything than props
	console.log('props: ', props);

	const { name, explanation } = props; //no 'this' keyword required
	
	return(
		<div className='paragraph-content'> 
			Name: {name}
			<br/>
			Why DataOps: {explanation}
		</div>
	)
}

export default FunctionalProp;