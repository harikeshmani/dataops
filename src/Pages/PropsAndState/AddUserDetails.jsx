import React, { Component } from 'react';

class AddUserDetails extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			age: ''
		}
	}

	render() {
		// console.log('name: ', this.state.name);
		const { handleSubmit } = this.props;
		
		return(
			<div>
				Enter the User Name: <br/>
				<input
					type='text'
					placeholder='e.g. john'
					onChange={(event) => this.setState({name: event.target.value})}
				/>
				<br/><br/>
				Enter age: <br/>
				<input
					type='text'
					placeholder='e.g. 23'
					onChange={(event) => this.setState({age: event.target.value})}
					/>
				<br/>
				{/* <button
					onClick={() => this.props.handleSubmit(this.state)}
					className='theme-color'
					style={{ marginTop: '1em' }}
				>
					Submit
				</button> */}
				{/* distructuring */}
				<button
					onClick={() => handleSubmit(this.state)}
					className='theme-color'
					style={{ marginTop: '1em' }}
				>
					Submit
				</button>
				
			</div>
		)
	}
}

export default AddUserDetails;