import React, { Component } from 'react';

function FunctionOne() {
	return <div>Inside Function one which is outside the class</div>
}

const FunctionTwo = () => {
	return <div>Inside Function two which is outside the class</div>
}

class ExtraClass extends Component {
	render() {
		return(
			<div style={{ fontWeight: 'bold' }}>Multiple calsses can be defined in one file...</div>
		)
	}
}

class ClassComponentExample extends Component{

	addFunction(x, y) {
		return x+y;
	}

	subtract = (x, y) => {
		return x-y;
	}

	FunctionThree () {
		return <div>Inside Function three which is inside the class</div>
	}

	functionFour () {
		return <div>Inside Function Four which is inside the class, but in lower case</div>
	}

	render() {
		return(
			<div className='paragraph-content'>
				<span style={{ fontWeight: 'bold' }}>render() is the method responsible for generating the UI</span><br/>
				Calling add function: add(x, y) - You have to give curly braces <br/>
				{/* Calling add function: {addFunction(5, 4)} This will not work. add 'this' */}
				Calling add function: 5+4 = {this.addFunction(5, 4)}
				<br/>
				Calling subtract arrow function: 6 - 2 = {this.subtract(6, 2)} <br/>
				calling decrement function: 9 down to {this.decrement(9)}
				<br/>
				All Of these below codes work
				<FunctionOne />
				{FunctionOne()}
				<FunctionTwo />
				{FunctionTwo()}
				<this.FunctionThree />
				{this.FunctionThree()}
				<div>No lowercase restriction</div>
				<this.functionFour />
				{this.functionFour()}
				{/* {this.functionFour} This does not work... Obviously */}
				<ExtraClass />

			</div>
		)
	}

	decrement = (x) => {
		return x -1;
	}
}

export default ClassComponentExample;