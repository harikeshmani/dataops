import React, { Component } from 'react';

class ShowUserDetails extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			age: ''
		}
	}

	render() {
		return(
			<div>
				User Name: {this.props.name}<br/>
				Age: {this.props.age}
			</div>
		)
	}
}

export default ShowUserDetails;