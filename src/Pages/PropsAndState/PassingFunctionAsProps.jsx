import React, { Component } from 'react';
import AddUserDetails from './AddUserDetails';
import ShowUserDetails from './ShowUserDetails';

class PassingFunctionAsProps extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			age: ''
		}
	}

	// handleSubmitData = (data) => {
	// 	this.setState({
	// 		name: data.name,
	// 		age: data.age
	// 	})
	// }

	handleSubmitData = (data) => {
		const { name, age } = data;
		this.setState({ name, age,})
	}

	render() {
		console.log('state in Passing function: ', this.state);
		
		// return(
		// 	<div className='paragraph-content'>
		// 		<AddUserDetails handleSubmit={this.handleSubmitData}/>
		// 		<br/>
		// 		<ShowUserDetails name={this.state.name} age={this.state.age}/>
		// 	</div>
		// )

		const { name, age } = this.state;
		return(
			<div className='paragraph-content'>
				<AddUserDetails handleSubmit={this.handleSubmitData}/>
				<br/>
				<ShowUserDetails name={name} age={age}/>
			</div>
		)

	}
}

export default PassingFunctionAsProps;