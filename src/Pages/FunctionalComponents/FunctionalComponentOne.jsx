import React from 'react';

export function NotDefaultFunction() {
	return(
		<div>This line comes from a function which is not default</div>
	)
}

function FunctionalComponentOne() {
	function increment(x, y){
		return x+y;
	}

	function htmlFunction() {
		return(
			<div>
				<button className='theme-color'>Click me!</button>
				<br/>
				<input type='text'/>
			</div>
		)
	}

	function SingleLine() {
		return <div>
			No paranthesis required if a function returns one line only
			<br/>
			But the function looks weired and not advisible
		</div>
	}

	return(
		<div className='paragraph-content'>
			Hello.. This is an example of JS function
			<br/>
			Calling increment Function : {increment(6, 4)}
			<br/>
			Calling decreament Function : {decrement(6, 4)}
			<br/>
			Calling a function which returns an html: {htmlFunction()}
			<br/>
			{/* <htmlFunction /> This gives an warning as lowercase functions can not be used as Components */}
			<SingleLine />
		</div>
	)

	function decrement(x, y) {
		return x - y;
	}

}

export default FunctionalComponentOne;