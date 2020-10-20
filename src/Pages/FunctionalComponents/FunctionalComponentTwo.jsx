import React from 'react';

// Can be used in other files as it is exported
export const NonDefaultArrowFunction = () => {
	return(
		<div>This is an example of calling a non default arrow function in a component</div>
	)
}

// Can be used inside this file only as it is not exported
const addFunction = (x, y) => {
	return x + y;
}

const FunctionalComponentTwo = () => {

	const variableOne = 10;
	const variableTwo = 15;

	const increment = (x, y) => {
		return x + y;
	}

	const decrement = (x, y) => {
		return x - y;
	}

	function htmlFunctionOne() {
		return(
			<div>
				Simple function uses lower case <br/>
				<button className='theme-color'>html Function One</button>
				<br/>
				<input type='text'/>
			</div>
		)
	}

	function HtmlFunctionOne() {
		return(
			<div>
				Compoent uses PascalCase<br/>
				<button className='theme-color'>html Function One</button>
				<br/>
				<input type='text'/>
			</div>
		)
	}

	const htmlFunctionTwo = () => {
		return(
			<div>
				Simple arrow function uses lower case <br/>
				<button className='theme-color'>html Function One</button>
				<br/>
				<input type='text'/>
			</div>
		)
	}

	const HtmlFunctionTwo = () => {
		return(
			<div>
				Compoent uses PascalCase<br/>
				<button className='theme-color'>html Function One</button>
				<br/>
				<input type='text'/>
			</div>
		)
	}

	const HtmlFunctionThree = () => {
		return(
			<div>
				PascalCase can also be used as normal functions
				<br/>
				but lowercase functions can not be used as compoenets
			</div>
		)
	}

	const SingleLine = () => {
		return <div>
			No paranthesis required if an arrow function returns one line only
			<br/>
			But the function looks weired and not advisible
		</div>
	}

	return(
		<div className='paragraph-content'>
			Hello... This is an example of ES6 Arrow function in React
			<br/>
			Calling the increment arrow function: 6+4 = {increment(6, 4)}
			<br/>
			Calling the decrement arrow function: 6-4 = {decrement(6, 4)}
			<br/>
			<NonDefaultArrowFunction />
			<br/>
			Calling the add function: 10+5 = {addFunction(10, 5)}
			<br/>
			Example of variable initialtion<br/>
			Value of Variable One is {variableOne} and value of variable two is {variableTwo}
			<br/>
			{htmlFunctionOne()}
			<br/>
			{htmlFunctionTwo()} {/* use lowercase for functions */}
			{/* <htmlFunctionTwo /> This will show a warning.. Don't use */}
			<HtmlFunctionOne /> {/* use PascalCase for component */}
			<HtmlFunctionTwo />
			{HtmlFunctionThree()}
			<SingleLine /> 
		</div>
	)

	// can not access before initialisation
	// const decrement = (x, y) => {
	// 	return x - y;
	// }
	
}

export default FunctionalComponentTwo;